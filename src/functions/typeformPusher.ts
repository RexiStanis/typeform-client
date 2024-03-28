import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { createClient } from "@typeform/api-client";
import { sendMutation, sendQuery } from "../apolloWrapper";
import { Queries, Mutations } from "../graphqlOperations"
import { InputGenerators } from "../transform/inputGenerators";
import { DateTime } from "neo4j-driver";
import { version } from "os";


const tfClient = createClient({
    token: process.env["TYPEFORM_API_KEY"],
    apiBaseUrl: process.env["TYPEFORM_API_URL"]
});

export async function typeformPusher(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    try {
        const persistedSurveyIds = (await sendQuery<{ typeformSurveys: { typeformId: string, modifiedAt: string, formversion: number }[] }>(Queries.TYPEFORM_ALL_SURVEY_IDS, null)).typeformSurveys;
        const externalSurveySummaries = await tfClient.forms.list();


        const promises: Promise<void>[] = [];

        for (const s of externalSurveySummaries.items) {

            let surveyVersion: number = 1;
            if (persistedSurveyIds.length === 0 || !persistedSurveyIds.some(survey => survey.typeformId === s.id)) { // Survey has never been pushed before
                console.log(s.id)
                promises.push(new Promise(async () => {
                    await pushSurvey(s.id, s.last_updated_at, surveyVersion);
                    await pushResponses(s.id, [{ typeformId: s.id, modifiedAt: s.last_updated_at, formversion: surveyVersion }])
                }))
            }
            else {
                const filteredSurveys = persistedSurveyIds.filter(survey => survey.typeformId === s.id).reduce((prev, current) => (prev.formversion > current.formversion ? prev : current));

                if (Date.parse(s.last_updated_at) > Date.parse(filteredSurveys.modifiedAt)) {
                    console.log(s.id)
                    // Survey has been pushed before
                    surveyVersion = filteredSurveys?.formversion + 1;

                    promises.push(new Promise(async () => {
                        await pushSurvey(s.id, s.last_updated_at, surveyVersion);
                        await pushResponses(s.id, [{ typeformId: s.id, modifiedAt: s.last_updated_at, formversion: surveyVersion }]);
                    }));
                }

            }

        }


        const groupedItems = groupAndSort(persistedSurveyIds);
        const groupedPersistedSurveyIds = Array.from(groupedItems.entries());
        // push any new responses for existing surveys.
        for (const [key, value] of groupedPersistedSurveyIds) {
            promises.push(pushResponses(key, value))
        }

        await Promise.all(promises); // Block until all surveys are loaded.

        return { status: 200, body: "Success!" };
    } catch (error) {
        console.error(error);
        return { status: 500, body: "Internal Server Error" };
    }
};

async function pushSurvey(surveyId: string, formUpdatedDate: string, formVersion: number): Promise<void> {
    const externalSurvey = await tfClient.forms.get({ uid: surveyId })
    const input = { input: InputGenerators.typeformSurveyCreate(externalSurvey, formUpdatedDate, formVersion) };
    //console.log(JSON.stringify(input, null, 2));
    await sendMutation(Mutations.TYPEFORM_CREATE_SURVEY, input);
}

//TODO: Implement batching instead of creating one-by-one. Do the same for Surveys.
async function pushResponses(surveyId: string, lst: any): Promise<void> {
    const userId = "77be4287-4417-40b1-8b21-e8b1d0261441"; // TODO: REMOVE ME AND REPLACE ME WITH SOMETHING DYNAMIC!

    const persistedResponseIds = (await sendQuery<{ typeformResponses: { typeformId: string }[] }>(
        Queries.TYPEFORM_RESPONSE_IDS_WHERE, { where: { survey: { typeformId: surveyId } } })).typeformResponses.map(r => r.typeformId)
    const externalResponses = (await tfClient.responses.list({ uid: surveyId })).items
    const unpersistedResponses = externalResponses.filter(r => !persistedResponseIds.includes(r.response_id!))


    const responseCreationPromises: Promise<void>[] = [];
    for (const r of unpersistedResponses) {
        let formUpdatedDate: string = "", formVersion: number = 0;

        for (const currentSurvey of lst) {
            const nextSurvey = lst[lst.indexOf(currentSurvey) + 1];
            console.log(nextSurvey)


            if (nextSurvey && Date.parse(r.submitted_at as string) >= Date.parse(currentSurvey.modifiedAt as string) &&
                Date.parse(r.submitted_at as string) <= Date.parse(nextSurvey.modifiedAt as string)) {
                console.log('current', Date.parse(currentSurvey.modifiedAt as string), currentSurvey.formversion, currentSurvey.typeformId);
                console.log('next', Date.parse(nextSurvey.modifiedAt as string), nextSurvey.formversion)
                console.log('respons', Date.parse(r.submitted_at as string))
                formUpdatedDate = currentSurvey.modifiedAt;
                formVersion = currentSurvey.formversion;
                break;
            }
            else if (nextSurvey === undefined && Date.parse(currentSurvey.modifiedAt as string) < Date.parse(r.submitted_at as string)) {
                console.log('last', currentSurvey.modifiedAt, currentSurvey.formversion, currentSurvey.typeformId);
                formUpdatedDate = currentSurvey.modifiedAt;
                formVersion = currentSurvey.formversion;
                break;
            }

        }

        if (formUpdatedDate !== "" && formVersion !== 0) {
            const input = { input: InputGenerators.typeformResponseCreate(r, surveyId, userId, formUpdatedDate, formVersion) }
            responseCreationPromises.push(sendMutation(Mutations.TYPEFORM_CREATE_RESPONSE, input))
        }

    }
    await Promise.all(responseCreationPromises);
}
//Grouping by typeformId
type SurveyItem = {
    typeformId: string;
    modifiedAt: string;
    formversion: number;
};
function groupBy<T, K extends keyof T>(items: T[], key: K): Map<string, T[]> {
    return items.reduce((result, item) => {
        const keyValue = String(item[key]);
        const group = result.get(keyValue) || [];
        group.push(item);
        result.set(keyValue, group);
        return result;
    }, new Map<string, T[]>());
}
function groupAndSort(items: SurveyItem[]): Map<string, SurveyItem[]> {
    // Grouping by typeformId
    const groupedByTypeformId = groupBy(items, 'typeformId');

    // Sorting each group by formversion
    for (const group of groupedByTypeformId.values()) {
        group.sort((a, b) => a.formversion - b.formversion);
    }

    return groupedByTypeformId;
}
app.http('typeform-pusher', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: typeformPusher
});
