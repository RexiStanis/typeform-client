import { Typeform as TypeformAPI } from "@typeform/api-client"

export namespace TypeformAPIExtension {
    export type TypeformAnswer = {
        field: TypeformAnswerField
        /**
         * The answer-field's type.
         */
        type?:
        | 'choice'
        | 'choices'
        | 'date'
        | 'email'
        | 'url'
        | 'file_url'
        | 'number'
        | 'boolean'
        | 'text'
        | 'payment'
        /**
         * Represents single choice answers for dropdown-like fields.
         */
        choice?: TypeformAnswerChoice
        /**
         * Represents multiple choice answers.
         */
        choices?: TypeformAnswerChoices

        date?: string
        email?: string
        file_url?: string
        number?: number
        boolean?: boolean
        text?: string
        url?: string
    }

    export type TypeformAnswerField = {
        id: string
    }

    export type TypeformAnswerChoice = {
        id: string
        ref: string
        label: string
    }

    export type TypeformAnswerChoices = {
        ids: string[]
        refs: string[]
        labels: string[]
    }
}
