import { Typeform as TypeformAPI } from "@typeform/api-client"
import * as GQLServer from "../__generated__/graphql"
import { TypeformAPIExtension } from "./typeformAPIExtension"
import { GQLExtension } from "./gqlExtension"

export namespace InputGenerators {

    export function typeformSurveyCreate(form: TypeformAPI.Form, formUpdatedDate: string, formVersion: number): GQLServer.TypeformSurveyCreateInput {
        return new GQLExtension.TypeformSurvey(
            form, formUpdatedDate, formVersion,

            new GQLExtension.Neo4j.CreateMany(form.fields!.map(f => typeformQuestionCreate(f, formVersion)))
        );
    }

    export function typeformQuestionCreateAndConnect(question: TypeformAPI.Field, typeformId: string, formVersion: number): GQLServer.TypeformQuestionCreateInput {
        return {
            ...typeformQuestionCreate(question, formVersion),
            typeformSurvey: new GQLExtension.Neo4j.ConnectWhere({ typeformId: typeformId, formversion: formVersion })
        }
    }

    function typeformQuestionCreate(question: TypeformAPI.Field, formVersion: number): GQLServer.TypeformQuestionCreateInput {
        return new GQLExtension.TypeformQuestion(
            question,
            question.attachment ? new GQLExtension.Neo4j.Create(new GQLExtension.TypeformQuestionAttachment(question.attachment)) : undefined,
            question.validations ? new GQLExtension.Neo4j.Create(new GQLExtension.TypeformQuestionValidations(question.validations)) : undefined,
            question.properties ? new GQLExtension.Neo4j.Create(typeformQuestionPropertiesCreate(question.properties, formVersion)) : undefined,
            formVersion
        )
    }

    function typeformQuestionPropertiesCreate(properties: TypeformAPI.Properties.Field, formVersion: number): GQLServer.TypeformQuestionPropertiesCreateInput {
        return new GQLExtension.TypeformQuestionProperties(
            properties,
            properties.choices ? new GQLExtension.Neo4j.CreateMany(properties.choices?.map(c => typeformQuestionChoiceCreate(c))) : undefined,
            properties.fields ? new GQLExtension.Neo4j.CreateMany(properties.fields.map(f => typeformQuestionCreate(f, formVersion))) : undefined,
        )
    }

    function typeformQuestionChoiceCreate(choice: TypeformAPI.Choice): GQLServer.TypeformQuestionChoiceCreateInput {
        return new GQLExtension.TypeformQuestionChoice(
            choice,
            choice.attachment ? new GQLExtension.Neo4j.Create(new GQLExtension.TypeformQuestionAttachment(choice.attachment)) : undefined
        )
    }


    export function typeformResponseCreate(response: TypeformAPI.Response, surveyId: string, userId: string, formUpdatedDate: string, formVersion: number): GQLServer.TypeformResponseCreateInput {

        return new GQLExtension.TypeformResponse(
            response,
            response.answers ? new GQLExtension.Neo4j.CreateMany(response.answers.map(a => typeformAnswerCreate(a as TypeformAPIExtension.TypeformAnswer, formVersion))) : undefined,
            new GQLExtension.Neo4j.ConnectWhere({ typeformId: surveyId, formversion: formVersion }),
            new GQLExtension.Neo4j.ConnectWhere({ id: userId }),
            formUpdatedDate,
            formVersion
        )
    }

    function typeformAnswerCreate(answer: TypeformAPIExtension.TypeformAnswer, formVersion: number): GQLServer.TypeformAnswerCreateInput {
        const choices = getChoices(answer);

        return new GQLExtension.TypeformAnswer(
            answer,
            choices.length > 0 ? new GQLExtension.Neo4j.CreateMany(
                choices.map(c => new GQLExtension.TypeformAnswerChoice(c, new GQLExtension.Neo4j.ConnectWhere({ typeformId: c.id })))
            ) : undefined,
            new GQLExtension.Neo4j.ConnectWhere({ typeformId: answer.field.id, formversion: formVersion })
        )

    }

    /* 
    In my mind, transforming to TypeformAPIExtension.TypeformAnswerChoice first instead of going straight to GQLExtension.TypeformAnswerChoice makes sense. But IDK if it's best to just go straight to the GQL type...
    */
    function getChoices(answer: TypeformAPIExtension.TypeformAnswer): TypeformAPIExtension.TypeformAnswerChoice[] {
        let choices: TypeformAPIExtension.TypeformAnswerChoice[] = [];

        if (answer.choice) {
            choices.push(answer.choice);
        }

        if (answer.choices) {
            const labels = answer.choices.labels;
            const ids = answer.choices.ids.filter(s => s !== "other"); //TODO: Figure out how the heck to handle the "other" option.
            const refs = answer.choices.refs;
            if (labels.length === ids.length && ids.length === refs.length) {
                for (let i = 0; i > ids.length; i++) {
                    choices.push({ id: ids[i], ref: refs[i], label: labels[i] });
                }
            } else {
                throw new Error("Choices arrays are not all the same length. Either the assumption that they would be was mistaken or something has gone horribly wrong.");
            }
        }

        return choices;
    }


}