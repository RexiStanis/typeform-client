import { graphql } from "./__generated__";



export namespace Queries {

    export const TYPEFORM_ALL_SURVEY_IDS = graphql(`
        query TypeformSurveys {
            typeformSurveys {
                typeformId
                modifiedAt
                formversion
            }
        }
    `)

    export const TYPEFORM_RESPONSE_IDS_WHERE = graphql(`
        query TypeformResponses($where: TypeformResponseWhere) {
            typeformResponses(where: $where) {
                typeformId
            }
        }
    `)
}

export namespace Mutations {
    export const TYPEFORM_CREATE_SURVEY = graphql(`
        mutation CreateTypeformSurveys($input: [TypeformSurveyCreateInput!]!) {
                createTypeformSurveys(input: $input) {
                    typeformSurveys {
                        id
                title
                typeformId
                }
            }
        }
    `);

    export const TYPEFORM_CREATE_RESPONSE = graphql(`
        mutation CreateTypeformResponses($input: [TypeformResponseCreateInput!]!) {
            createTypeformResponses(input: $input) {
                info {
                nodesCreated
                relationshipsCreated
                }
            }
        }
    `)

    export const UPDATE_SURVEY = graphql(`
mutation UpdateTypeformQuestions($where: TypeformSurveyWhere, $update: TypeformSurveyUpdateInput) {
    updateTypeformSurveys(where: $where, update: $update) {
    info {
      nodesCreated
    }
  }
}
`);
}