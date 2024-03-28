/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n        query TypeformSurveys {\n            typeformSurveys {\n                typeformId\n                modifiedAt\n                formversion\n            }\n        }\n    ": types.TypeformSurveysDocument,
    "\n        query TypeformResponses($where: TypeformResponseWhere) {\n            typeformResponses(where: $where) {\n                typeformId\n            }\n        }\n    ": types.TypeformResponsesDocument,
    "\n        mutation CreateTypeformSurveys($input: [TypeformSurveyCreateInput!]!) {\n                createTypeformSurveys(input: $input) {\n                    typeformSurveys {\n                        id\n                title\n                typeformId\n                }\n            }\n        }\n    ": types.CreateTypeformSurveysDocument,
    "\n        mutation CreateTypeformResponses($input: [TypeformResponseCreateInput!]!) {\n            createTypeformResponses(input: $input) {\n                info {\n                nodesCreated\n                relationshipsCreated\n                }\n            }\n        }\n    ": types.CreateTypeformResponsesDocument,
    "\nmutation UpdateTypeformQuestions($where: TypeformSurveyWhere, $update: TypeformSurveyUpdateInput) {\n    updateTypeformSurveys(where: $where, update: $update) {\n    info {\n      nodesCreated\n    }\n  }\n}\n": types.UpdateTypeformQuestionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query TypeformSurveys {\n            typeformSurveys {\n                typeformId\n                modifiedAt\n                formversion\n            }\n        }\n    "): (typeof documents)["\n        query TypeformSurveys {\n            typeformSurveys {\n                typeformId\n                modifiedAt\n                formversion\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query TypeformResponses($where: TypeformResponseWhere) {\n            typeformResponses(where: $where) {\n                typeformId\n            }\n        }\n    "): (typeof documents)["\n        query TypeformResponses($where: TypeformResponseWhere) {\n            typeformResponses(where: $where) {\n                typeformId\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation CreateTypeformSurveys($input: [TypeformSurveyCreateInput!]!) {\n                createTypeformSurveys(input: $input) {\n                    typeformSurveys {\n                        id\n                title\n                typeformId\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation CreateTypeformSurveys($input: [TypeformSurveyCreateInput!]!) {\n                createTypeformSurveys(input: $input) {\n                    typeformSurveys {\n                        id\n                title\n                typeformId\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation CreateTypeformResponses($input: [TypeformResponseCreateInput!]!) {\n            createTypeformResponses(input: $input) {\n                info {\n                nodesCreated\n                relationshipsCreated\n                }\n            }\n        }\n    "): (typeof documents)["\n        mutation CreateTypeformResponses($input: [TypeformResponseCreateInput!]!) {\n            createTypeformResponses(input: $input) {\n                info {\n                nodesCreated\n                relationshipsCreated\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation UpdateTypeformQuestions($where: TypeformSurveyWhere, $update: TypeformSurveyUpdateInput) {\n    updateTypeformSurveys(where: $where, update: $update) {\n    info {\n      nodesCreated\n    }\n  }\n}\n"): (typeof documents)["\nmutation UpdateTypeformQuestions($where: TypeformSurveyWhere, $update: TypeformSurveyUpdateInput) {\n    updateTypeformSurveys(where: $where, update: $update) {\n    info {\n      nodesCreated\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;