import { Typeform as TypeformAPI } from "@typeform/api-client"
import { TypeformAPIExtension } from "./typeformAPIExtension"
import * as GQLServer from "../__generated__/graphql"

export namespace GQLExtension {

    export namespace Neo4j {

        export class Create {
            constructor(obj: any) {
                this.create = new Node(obj);
            }
            create: Node
        }

        export class CreateMany {
            constructor(obj: any[]) {
                this.create = obj.map(o => new Node(o))
            }
            create: Node[]
        }


        export class ConnectWhere {
            constructor(obj: any) {
                this.connect = { where: new Node(obj) }
            }
            connect: { where: any }
        }

        class Node {
            constructor(obj: any) {
                this.node = obj
            }
            node: any
        }

        export type CreateOneOrMany = Create | CreateMany
    }

    export class TypeformSurvey<TQuestions extends Neo4j.CreateOneOrMany> {


        constructor(form: TypeformAPI.Form, formUpdatedDate: string, formVersion: number, questions: TQuestions) {
            this.title = form.title!,
                this.typeformId = form.id!,
                this.modifiedAt = formUpdatedDate,
                this.formversion = formVersion,
                this.questions = questions
        }

        title: string;
        typeformId: string;
        questions: TQuestions;
        modifiedAt: string;
        formversion: number
    }

    export class TypeformQuestion<TAttachment extends Neo4j.CreateOneOrMany | undefined, TValidations extends Neo4j.CreateOneOrMany | undefined, TProperties extends Neo4j.CreateOneOrMany | undefined> {
        constructor(question: TypeformAPI.Field, attachment: TAttachment, validations: TValidations, properties: TProperties, formVersion: number) {
            const hasProperties = question.properties && Object.keys(question.properties).length > 0 // this is kind of a hack. The proerties comes back as an empty object sometimes, so we have to treat that as undefined.

            this.title = question.title!,
                this.type = question.type! as GQLServer.TypeformQuestionType,
                this.typeformId = question.id!,
                this.ref = question.ref,
                this.attachment = attachment,
                this.validations = validations,
                this.properties = hasProperties ? properties : undefined,
                this.formversion = formVersion
            // this.questionVersion = questionVersion;

        }
        title: string;
        type: GQLServer.TypeformQuestionType;
        typeformId: string;
        ref?: string;
        attachment?: TAttachment;
        validations?: TValidations;
        properties?: TProperties;
        formversion: number
    }

    export class TypeformQuestionProperties<TChoices extends Neo4j.CreateOneOrMany | undefined, TFields extends Neo4j.CreateOneOrMany | undefined>{

        constructor(properties: TypeformAPI.Properties.Field, choices: TChoices, fields: TFields) {
            this.allowMultipleSelection = properties.allow_multiple_selection,
                this.allowOtherChoice = properties.allow_other_choice,
                this.choices = choices,
                this.dateFormat = properties.structure,
                this.description = properties.description,
                this.fields = fields,
                this.scaleCenterLabel = properties.labels?.center,
                this.scaleLeftLabel = properties.labels?.left,
                this.scaleRightLabel = properties.labels?.right,
                this.scaleStartAtOne = properties.start_at_one,
                this.scaleSteps = properties.steps
        }

        allowMultipleSelection?: boolean;
        allowOtherChoice?: boolean;
        choices?: TChoices;
        dateFormat?: string;
        description?: string;
        fields?: TFields;
        scaleCenterLabel?: string;
        scaleLeftLabel?: string;
        scaleRightLabel?: string;
        scaleStartAtOne?: boolean;
        scaleSteps?: number;
    }

    export class TypeformQuestionValidations {
        constructor(validations: TypeformAPI.Validations) {
            this.maxLength = validations.max_length,
                this.maxValue = validations.max_value,
                this.minValue = validations.min_value,
                this.required = validations.required
        }


        required?: boolean;
        maxLength?: number;
        minValue?: number;
        maxValue?: number;
    }

    export class TypeformQuestionAttachment {
        constructor(attachment: TypeformAPI.Attachment) {
            this.href = attachment.href!,
                this.type = attachment.type!,
                this.scale = attachment.scale
        }

        type: string;
        href: string;
        scale?: number;
    }

    export class TypeformQuestionChoice<TAttachment extends Neo4j.CreateOneOrMany | undefined> {
        constructor(choice: TypeformAPI.Choice, attachment: TAttachment) {
            this.typeformId = choice.id!,
                this.ref = choice.ref,
                this.label = choice.label,
                this.attachment = attachment
        }
        typeformId: string
        ref?: string
        label?: string
        attachment?: TAttachment
    }


    export class TypeformResponse<TAnswers extends Neo4j.CreateOneOrMany | undefined> {
        constructor(response: TypeformAPI.Response, answers: TAnswers, survey: Neo4j.ConnectWhere, user: Neo4j.ConnectWhere, formmodifiedAt: string, formversion: number) {
            this.typeformId = response.response_id!
            this.landedAt = response.landed_at!
            this.submittedAt = response.submitted_at!
            this.formmodifiedAt = formmodifiedAt
            this.answers = answers;
            this.survey = survey;
            this.user = user;
            this.formversion = formversion;
        }

        typeformId: string
        landedAt: string
        submittedAt: string
        formmodifiedAt: string
        formversion: number
        answers: TAnswers
        survey: Neo4j.ConnectWhere
        user: Neo4j.ConnectWhere
    }

    export class TypeformAnswer<TChoices extends Neo4j.CreateOneOrMany | undefined> {
        constructor(answer: TypeformAPIExtension.TypeformAnswer, choices: TChoices, question: Neo4j.ConnectWhere) {
            this.type = answer.type! as GQLServer.TypeformAnswerType;
            this.date = answer.date;
            this.email = answer.email;
            this.fileUrl = answer.file_url;
            this.number = answer.number ? String(answer.number) : undefined;
            this.boolean = answer.boolean;
            this.text = answer.text;
            this.url = answer.url;
            this.choices = choices;
            this.question = question;
        }

        type: GQLServer.TypeformAnswerType;
        date?: string;
        email?: string;
        fileUrl?: string;
        number?: string;
        boolean?: boolean;
        text?: string;
        url?: string;
        choices?: TChoices;
        question: Neo4j.ConnectWhere;
    }

    export class TypeformAnswerChoice {
        constructor(choice: TypeformAPIExtension.TypeformAnswerChoice, questionChoice: Neo4j.ConnectWhere) {
            this.typeformId = choice.id;
            this.ref = choice.ref;
            this.label = choice.label;
            this.questionChoice = questionChoice
        }
        typeformId: string;
        ref?: string;
        label?: string;
        questionChoice: Neo4j.ConnectWhere
    }
}