/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any; }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any; }
};

export type CreateDomainsMutationResponse = {
  __typename?: 'CreateDomainsMutationResponse';
  domains: Array<Domain>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateLinksMutationResponse = {
  __typename?: 'CreateLinksMutationResponse';
  info: CreateInfo;
  links: Array<Link>;
};

export type CreateOrganizationsMutationResponse = {
  __typename?: 'CreateOrganizationsMutationResponse';
  info: CreateInfo;
  organizations: Array<Organization>;
};

export type CreateProjectsMutationResponse = {
  __typename?: 'CreateProjectsMutationResponse';
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateSystemsMutationResponse = {
  __typename?: 'CreateSystemsMutationResponse';
  info: CreateInfo;
  systems: Array<System>;
};

export type CreateTypeformAnswerChoicesMutationResponse = {
  __typename?: 'CreateTypeformAnswerChoicesMutationResponse';
  info: CreateInfo;
  typeformAnswerChoices: Array<TypeformAnswerChoice>;
};

export type CreateTypeformAnswersMutationResponse = {
  __typename?: 'CreateTypeformAnswersMutationResponse';
  info: CreateInfo;
  typeformAnswers: Array<TypeformAnswer>;
};

export type CreateTypeformQuestionAttachmentsMutationResponse = {
  __typename?: 'CreateTypeformQuestionAttachmentsMutationResponse';
  info: CreateInfo;
  typeformQuestionAttachments: Array<TypeformQuestionAttachment>;
};

export type CreateTypeformQuestionChoicesMutationResponse = {
  __typename?: 'CreateTypeformQuestionChoicesMutationResponse';
  info: CreateInfo;
  typeformQuestionChoices: Array<TypeformQuestionChoice>;
};

export type CreateTypeformQuestionPropertiesMutationResponse = {
  __typename?: 'CreateTypeformQuestionPropertiesMutationResponse';
  info: CreateInfo;
  typeformQuestionProperties: Array<TypeformQuestionProperties>;
};

export type CreateTypeformQuestionValidationsMutationResponse = {
  __typename?: 'CreateTypeformQuestionValidationsMutationResponse';
  info: CreateInfo;
  typeformQuestionValidations: Array<TypeformQuestionValidations>;
};

export type CreateTypeformQuestionsMutationResponse = {
  __typename?: 'CreateTypeformQuestionsMutationResponse';
  info: CreateInfo;
  typeformQuestions: Array<TypeformQuestion>;
};

export type CreateTypeformResponsesMutationResponse = {
  __typename?: 'CreateTypeformResponsesMutationResponse';
  info: CreateInfo;
  typeformResponses: Array<TypeformResponse>;
};

export type CreateTypeformSurveysMutationResponse = {
  __typename?: 'CreateTypeformSurveysMutationResponse';
  info: CreateInfo;
  typeformSurveys: Array<TypeformSurvey>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type CreateWorkItemsMutationResponse = {
  __typename?: 'CreateWorkItemsMutationResponse';
  info: CreateInfo;
  workItems: Array<WorkItem>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime']['output'];
  min: Scalars['DateTime']['output'];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']['output']>;
  min?: Maybe<Scalars['DateTime']['output']>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organizationAggregate?: Maybe<DomainOrganizationOrganizationAggregationSelection>;
  organizationConnection: DomainOrganizationConnection;
  systems: Array<System>;
  systemsAggregate?: Maybe<DomainSystemSystemsAggregationSelection>;
  systemsConnection: DomainSystemsConnection;
};


export type DomainOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type DomainOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type DomainOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DomainOrganizationConnectionSort>>;
  where?: InputMaybe<DomainOrganizationConnectionWhere>;
};


export type DomainSystemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SystemOptions>;
  where?: InputMaybe<SystemWhere>;
};


export type DomainSystemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SystemWhere>;
};


export type DomainSystemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DomainSystemsConnectionSort>>;
  where?: InputMaybe<DomainSystemsConnectionWhere>;
};

export type DomainAggregateSelection = {
  __typename?: 'DomainAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DomainConnectInput = {
  organization?: InputMaybe<DomainOrganizationConnectFieldInput>;
  systems?: InputMaybe<Array<DomainSystemsConnectFieldInput>>;
};

export type DomainConnectOrCreateInput = {
  organization?: InputMaybe<DomainOrganizationConnectOrCreateFieldInput>;
};

export type DomainConnectOrCreateWhere = {
  node: DomainUniqueWhere;
};

export type DomainConnectWhere = {
  node: DomainWhere;
};

export type DomainCreateInput = {
  name: Scalars['String']['input'];
  organization?: InputMaybe<DomainOrganizationFieldInput>;
  systems?: InputMaybe<DomainSystemsFieldInput>;
};

export type DomainDeleteInput = {
  organization?: InputMaybe<DomainOrganizationDeleteFieldInput>;
  systems?: InputMaybe<Array<DomainSystemsDeleteFieldInput>>;
};

export type DomainDisconnectInput = {
  organization?: InputMaybe<DomainOrganizationDisconnectFieldInput>;
  systems?: InputMaybe<Array<DomainSystemsDisconnectFieldInput>>;
};

export type DomainEdge = {
  __typename?: 'DomainEdge';
  cursor: Scalars['String']['output'];
  node: Domain;
};

export type DomainOnCreateInput = {
  name: Scalars['String']['input'];
};

export type DomainOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DomainSort objects to sort Domains by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DomainSort>>;
};

export type DomainOrganizationAggregateInput = {
  AND?: InputMaybe<Array<DomainOrganizationAggregateInput>>;
  NOT?: InputMaybe<DomainOrganizationAggregateInput>;
  OR?: InputMaybe<Array<DomainOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DomainOrganizationNodeAggregationWhereInput>;
};

export type DomainOrganizationConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type DomainOrganizationConnectOrCreateFieldInput = {
  onCreate: DomainOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type DomainOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type DomainOrganizationConnection = {
  __typename?: 'DomainOrganizationConnection';
  edges: Array<DomainOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DomainOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type DomainOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<DomainOrganizationConnectionWhere>>;
  NOT?: InputMaybe<DomainOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<DomainOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type DomainOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type DomainOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<DomainOrganizationConnectionWhere>;
};

export type DomainOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<DomainOrganizationConnectionWhere>;
};

export type DomainOrganizationFieldInput = {
  connect?: InputMaybe<DomainOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<DomainOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<DomainOrganizationCreateFieldInput>;
};

export type DomainOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DomainOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DomainOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DomainOrganizationNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DomainOrganizationOrganizationAggregationSelection = {
  __typename?: 'DomainOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DomainOrganizationOrganizationNodeAggregateSelection>;
};

export type DomainOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'DomainOrganizationOrganizationNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type DomainOrganizationRelationship = {
  __typename?: 'DomainOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type DomainOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type DomainOrganizationUpdateFieldInput = {
  connect?: InputMaybe<DomainOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<DomainOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<DomainOrganizationCreateFieldInput>;
  delete?: InputMaybe<DomainOrganizationDeleteFieldInput>;
  disconnect?: InputMaybe<DomainOrganizationDisconnectFieldInput>;
  update?: InputMaybe<DomainOrganizationUpdateConnectionInput>;
  where?: InputMaybe<DomainOrganizationConnectionWhere>;
};

export type DomainRelationInput = {
  organization?: InputMaybe<DomainOrganizationCreateFieldInput>;
  systems?: InputMaybe<Array<DomainSystemsCreateFieldInput>>;
};

/** Fields to sort Domains by. The order in which sorts are applied is not guaranteed when specifying many fields in one DomainSort object. */
export type DomainSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DomainSystemSystemsAggregationSelection = {
  __typename?: 'DomainSystemSystemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DomainSystemSystemsNodeAggregateSelection>;
};

export type DomainSystemSystemsNodeAggregateSelection = {
  __typename?: 'DomainSystemSystemsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DomainSystemsAggregateInput = {
  AND?: InputMaybe<Array<DomainSystemsAggregateInput>>;
  NOT?: InputMaybe<DomainSystemsAggregateInput>;
  OR?: InputMaybe<Array<DomainSystemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DomainSystemsNodeAggregationWhereInput>;
};

export type DomainSystemsConnectFieldInput = {
  connect?: InputMaybe<Array<SystemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SystemConnectWhere>;
};

export type DomainSystemsConnection = {
  __typename?: 'DomainSystemsConnection';
  edges: Array<DomainSystemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DomainSystemsConnectionSort = {
  node?: InputMaybe<SystemSort>;
};

export type DomainSystemsConnectionWhere = {
  AND?: InputMaybe<Array<DomainSystemsConnectionWhere>>;
  NOT?: InputMaybe<DomainSystemsConnectionWhere>;
  OR?: InputMaybe<Array<DomainSystemsConnectionWhere>>;
  node?: InputMaybe<SystemWhere>;
};

export type DomainSystemsCreateFieldInput = {
  node: SystemCreateInput;
};

export type DomainSystemsDeleteFieldInput = {
  delete?: InputMaybe<SystemDeleteInput>;
  where?: InputMaybe<DomainSystemsConnectionWhere>;
};

export type DomainSystemsDisconnectFieldInput = {
  disconnect?: InputMaybe<SystemDisconnectInput>;
  where?: InputMaybe<DomainSystemsConnectionWhere>;
};

export type DomainSystemsFieldInput = {
  connect?: InputMaybe<Array<DomainSystemsConnectFieldInput>>;
  create?: InputMaybe<Array<DomainSystemsCreateFieldInput>>;
};

export type DomainSystemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DomainSystemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DomainSystemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DomainSystemsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DomainSystemsRelationship = {
  __typename?: 'DomainSystemsRelationship';
  cursor: Scalars['String']['output'];
  node: System;
};

export type DomainSystemsUpdateConnectionInput = {
  node?: InputMaybe<SystemUpdateInput>;
};

export type DomainSystemsUpdateFieldInput = {
  connect?: InputMaybe<Array<DomainSystemsConnectFieldInput>>;
  create?: InputMaybe<Array<DomainSystemsCreateFieldInput>>;
  delete?: InputMaybe<Array<DomainSystemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DomainSystemsDisconnectFieldInput>>;
  update?: InputMaybe<DomainSystemsUpdateConnectionInput>;
  where?: InputMaybe<DomainSystemsConnectionWhere>;
};

export type DomainUniqueWhere = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DomainUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<DomainOrganizationUpdateFieldInput>;
  systems?: InputMaybe<Array<DomainSystemsUpdateFieldInput>>;
};

export type DomainWhere = {
  AND?: InputMaybe<Array<DomainWhere>>;
  NOT?: InputMaybe<DomainWhere>;
  OR?: InputMaybe<Array<DomainWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationWhere>;
  organizationAggregate?: InputMaybe<DomainOrganizationAggregateInput>;
  organizationConnection?: InputMaybe<DomainOrganizationConnectionWhere>;
  organizationConnection_NOT?: InputMaybe<DomainOrganizationConnectionWhere>;
  organization_NOT?: InputMaybe<OrganizationWhere>;
  systemsAggregate?: InputMaybe<DomainSystemsAggregateInput>;
  /** Return Domains where all of the related DomainSystemsConnections match this filter */
  systemsConnection_ALL?: InputMaybe<DomainSystemsConnectionWhere>;
  /** Return Domains where none of the related DomainSystemsConnections match this filter */
  systemsConnection_NONE?: InputMaybe<DomainSystemsConnectionWhere>;
  /** Return Domains where one of the related DomainSystemsConnections match this filter */
  systemsConnection_SINGLE?: InputMaybe<DomainSystemsConnectionWhere>;
  /** Return Domains where some of the related DomainSystemsConnections match this filter */
  systemsConnection_SOME?: InputMaybe<DomainSystemsConnectionWhere>;
  /** Return Domains where all of the related Systems match this filter */
  systems_ALL?: InputMaybe<SystemWhere>;
  /** Return Domains where none of the related Systems match this filter */
  systems_NONE?: InputMaybe<SystemWhere>;
  /** Return Domains where one of the related Systems match this filter */
  systems_SINGLE?: InputMaybe<SystemWhere>;
  /** Return Domains where some of the related Systems match this filter */
  systems_SOME?: InputMaybe<SystemWhere>;
};

export type DomainsConnection = {
  __typename?: 'DomainsConnection';
  edges: Array<DomainEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['ID']['output'];
  type: LinkType;
  uri?: Maybe<Scalars['String']['output']>;
};

export type LinkAggregateSelection = {
  __typename?: 'LinkAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  uri: StringAggregateSelectionNullable;
};

export type LinkConnectWhere = {
  node: LinkWhere;
};

export type LinkCreateInput = {
  type: LinkType;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type LinkEdge = {
  __typename?: 'LinkEdge';
  cursor: Scalars['String']['output'];
  node: Link;
};

export type LinkOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more LinkSort objects to sort Links by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LinkSort>>;
};

/** Fields to sort Links by. The order in which sorts are applied is not guaranteed when specifying many fields in one LinkSort object. */
export type LinkSort = {
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  uri?: InputMaybe<SortDirection>;
};

export enum LinkType {
  Typeform = 'TYPEFORM'
}

export type LinkUpdateInput = {
  type?: InputMaybe<LinkType>;
  uri?: InputMaybe<Scalars['String']['input']>;
};

export type LinkWhere = {
  AND?: InputMaybe<Array<LinkWhere>>;
  NOT?: InputMaybe<LinkWhere>;
  OR?: InputMaybe<Array<LinkWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<LinkType>;
  type_IN?: InputMaybe<Array<LinkType>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  uri_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  uri_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uri_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type LinksConnection = {
  __typename?: 'LinksConnection';
  edges: Array<LinkEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDomains: CreateDomainsMutationResponse;
  createLinks: CreateLinksMutationResponse;
  createOrganizations: CreateOrganizationsMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  createSystems: CreateSystemsMutationResponse;
  createTypeformAnswerChoices: CreateTypeformAnswerChoicesMutationResponse;
  createTypeformAnswers: CreateTypeformAnswersMutationResponse;
  createTypeformQuestionAttachments: CreateTypeformQuestionAttachmentsMutationResponse;
  createTypeformQuestionChoices: CreateTypeformQuestionChoicesMutationResponse;
  createTypeformQuestionProperties: CreateTypeformQuestionPropertiesMutationResponse;
  createTypeformQuestionValidations: CreateTypeformQuestionValidationsMutationResponse;
  createTypeformQuestions: CreateTypeformQuestionsMutationResponse;
  createTypeformResponses: CreateTypeformResponsesMutationResponse;
  createTypeformSurveys: CreateTypeformSurveysMutationResponse;
  createUsers: CreateUsersMutationResponse;
  createWorkItems: CreateWorkItemsMutationResponse;
  deleteDomains: DeleteInfo;
  deleteLinks: DeleteInfo;
  deleteOrganizations: DeleteInfo;
  deleteProjects: DeleteInfo;
  deleteSystems: DeleteInfo;
  deleteTypeformAnswerChoices: DeleteInfo;
  deleteTypeformAnswers: DeleteInfo;
  deleteTypeformQuestionAttachments: DeleteInfo;
  deleteTypeformQuestionChoices: DeleteInfo;
  deleteTypeformQuestionProperties: DeleteInfo;
  deleteTypeformQuestionValidations: DeleteInfo;
  deleteTypeformQuestions: DeleteInfo;
  deleteTypeformResponses: DeleteInfo;
  deleteTypeformSurveys: DeleteInfo;
  deleteUsers: DeleteInfo;
  deleteWorkItems: DeleteInfo;
  updateDomains: UpdateDomainsMutationResponse;
  updateLinks: UpdateLinksMutationResponse;
  updateOrganizations: UpdateOrganizationsMutationResponse;
  updateProjects: UpdateProjectsMutationResponse;
  updateSystems: UpdateSystemsMutationResponse;
  updateTypeformAnswerChoices: UpdateTypeformAnswerChoicesMutationResponse;
  updateTypeformAnswers: UpdateTypeformAnswersMutationResponse;
  updateTypeformQuestionAttachments: UpdateTypeformQuestionAttachmentsMutationResponse;
  updateTypeformQuestionChoices: UpdateTypeformQuestionChoicesMutationResponse;
  updateTypeformQuestionProperties: UpdateTypeformQuestionPropertiesMutationResponse;
  updateTypeformQuestionValidations: UpdateTypeformQuestionValidationsMutationResponse;
  updateTypeformQuestions: UpdateTypeformQuestionsMutationResponse;
  updateTypeformResponses: UpdateTypeformResponsesMutationResponse;
  updateTypeformSurveys: UpdateTypeformSurveysMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
  updateWorkItems: UpdateWorkItemsMutationResponse;
};


export type MutationCreateDomainsArgs = {
  input: Array<DomainCreateInput>;
};


export type MutationCreateLinksArgs = {
  input: Array<LinkCreateInput>;
};


export type MutationCreateOrganizationsArgs = {
  input: Array<OrganizationCreateInput>;
};


export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};


export type MutationCreateSystemsArgs = {
  input: Array<SystemCreateInput>;
};


export type MutationCreateTypeformAnswerChoicesArgs = {
  input: Array<TypeformAnswerChoiceCreateInput>;
};


export type MutationCreateTypeformAnswersArgs = {
  input: Array<TypeformAnswerCreateInput>;
};


export type MutationCreateTypeformQuestionAttachmentsArgs = {
  input: Array<TypeformQuestionAttachmentCreateInput>;
};


export type MutationCreateTypeformQuestionChoicesArgs = {
  input: Array<TypeformQuestionChoiceCreateInput>;
};


export type MutationCreateTypeformQuestionPropertiesArgs = {
  input: Array<TypeformQuestionPropertiesCreateInput>;
};


export type MutationCreateTypeformQuestionValidationsArgs = {
  input: Array<TypeformQuestionValidationsCreateInput>;
};


export type MutationCreateTypeformQuestionsArgs = {
  input: Array<TypeformQuestionCreateInput>;
};


export type MutationCreateTypeformResponsesArgs = {
  input: Array<TypeformResponseCreateInput>;
};


export type MutationCreateTypeformSurveysArgs = {
  input: Array<TypeformSurveyCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationCreateWorkItemsArgs = {
  input: Array<WorkItemCreateInput>;
};


export type MutationDeleteDomainsArgs = {
  delete?: InputMaybe<DomainDeleteInput>;
  where?: InputMaybe<DomainWhere>;
};


export type MutationDeleteLinksArgs = {
  where?: InputMaybe<LinkWhere>;
};


export type MutationDeleteOrganizationsArgs = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationDeleteProjectsArgs = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationDeleteSystemsArgs = {
  delete?: InputMaybe<SystemDeleteInput>;
  where?: InputMaybe<SystemWhere>;
};


export type MutationDeleteTypeformAnswerChoicesArgs = {
  delete?: InputMaybe<TypeformAnswerChoiceDeleteInput>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type MutationDeleteTypeformAnswersArgs = {
  delete?: InputMaybe<TypeformAnswerDeleteInput>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type MutationDeleteTypeformQuestionAttachmentsArgs = {
  delete?: InputMaybe<TypeformQuestionAttachmentDeleteInput>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type MutationDeleteTypeformQuestionChoicesArgs = {
  delete?: InputMaybe<TypeformQuestionChoiceDeleteInput>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type MutationDeleteTypeformQuestionPropertiesArgs = {
  delete?: InputMaybe<TypeformQuestionPropertiesDeleteInput>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type MutationDeleteTypeformQuestionValidationsArgs = {
  delete?: InputMaybe<TypeformQuestionValidationsDeleteInput>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type MutationDeleteTypeformQuestionsArgs = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type MutationDeleteTypeformResponsesArgs = {
  delete?: InputMaybe<TypeformResponseDeleteInput>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type MutationDeleteTypeformSurveysArgs = {
  delete?: InputMaybe<TypeformSurveyDeleteInput>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationDeleteWorkItemsArgs = {
  delete?: InputMaybe<WorkItemDeleteInput>;
  where?: InputMaybe<WorkItemWhere>;
};


export type MutationUpdateDomainsArgs = {
  connect?: InputMaybe<DomainConnectInput>;
  connectOrCreate?: InputMaybe<DomainConnectOrCreateInput>;
  create?: InputMaybe<DomainRelationInput>;
  delete?: InputMaybe<DomainDeleteInput>;
  disconnect?: InputMaybe<DomainDisconnectInput>;
  update?: InputMaybe<DomainUpdateInput>;
  where?: InputMaybe<DomainWhere>;
};


export type MutationUpdateLinksArgs = {
  update?: InputMaybe<LinkUpdateInput>;
  where?: InputMaybe<LinkWhere>;
};


export type MutationUpdateOrganizationsArgs = {
  connect?: InputMaybe<OrganizationConnectInput>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
  create?: InputMaybe<OrganizationRelationInput>;
  delete?: InputMaybe<OrganizationDeleteInput>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  update?: InputMaybe<OrganizationUpdateInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationUpdateProjectsArgs = {
  connect?: InputMaybe<ProjectConnectInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  update?: InputMaybe<ProjectUpdateInput>;
  where?: InputMaybe<ProjectWhere>;
};


export type MutationUpdateSystemsArgs = {
  connect?: InputMaybe<SystemConnectInput>;
  connectOrCreate?: InputMaybe<SystemConnectOrCreateInput>;
  create?: InputMaybe<SystemRelationInput>;
  delete?: InputMaybe<SystemDeleteInput>;
  disconnect?: InputMaybe<SystemDisconnectInput>;
  update?: InputMaybe<SystemUpdateInput>;
  where?: InputMaybe<SystemWhere>;
};


export type MutationUpdateTypeformAnswerChoicesArgs = {
  connect?: InputMaybe<TypeformAnswerChoiceConnectInput>;
  create?: InputMaybe<TypeformAnswerChoiceRelationInput>;
  delete?: InputMaybe<TypeformAnswerChoiceDeleteInput>;
  disconnect?: InputMaybe<TypeformAnswerChoiceDisconnectInput>;
  update?: InputMaybe<TypeformAnswerChoiceUpdateInput>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type MutationUpdateTypeformAnswersArgs = {
  connect?: InputMaybe<TypeformAnswerConnectInput>;
  connectOrCreate?: InputMaybe<TypeformAnswerConnectOrCreateInput>;
  create?: InputMaybe<TypeformAnswerRelationInput>;
  delete?: InputMaybe<TypeformAnswerDeleteInput>;
  disconnect?: InputMaybe<TypeformAnswerDisconnectInput>;
  update?: InputMaybe<TypeformAnswerUpdateInput>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type MutationUpdateTypeformQuestionAttachmentsArgs = {
  connect?: InputMaybe<TypeformQuestionAttachmentConnectInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionAttachmentConnectOrCreateInput>;
  create?: InputMaybe<TypeformQuestionAttachmentRelationInput>;
  delete?: InputMaybe<TypeformQuestionAttachmentDeleteInput>;
  disconnect?: InputMaybe<TypeformQuestionAttachmentDisconnectInput>;
  update?: InputMaybe<TypeformQuestionAttachmentUpdateInput>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type MutationUpdateTypeformQuestionChoicesArgs = {
  connect?: InputMaybe<TypeformQuestionChoiceConnectInput>;
  create?: InputMaybe<TypeformQuestionChoiceRelationInput>;
  delete?: InputMaybe<TypeformQuestionChoiceDeleteInput>;
  disconnect?: InputMaybe<TypeformQuestionChoiceDisconnectInput>;
  update?: InputMaybe<TypeformQuestionChoiceUpdateInput>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type MutationUpdateTypeformQuestionPropertiesArgs = {
  connect?: InputMaybe<TypeformQuestionPropertiesConnectInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionPropertiesConnectOrCreateInput>;
  create?: InputMaybe<TypeformQuestionPropertiesRelationInput>;
  delete?: InputMaybe<TypeformQuestionPropertiesDeleteInput>;
  disconnect?: InputMaybe<TypeformQuestionPropertiesDisconnectInput>;
  update?: InputMaybe<TypeformQuestionPropertiesUpdateInput>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type MutationUpdateTypeformQuestionValidationsArgs = {
  connect?: InputMaybe<TypeformQuestionValidationsConnectInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionValidationsConnectOrCreateInput>;
  create?: InputMaybe<TypeformQuestionValidationsRelationInput>;
  delete?: InputMaybe<TypeformQuestionValidationsDeleteInput>;
  disconnect?: InputMaybe<TypeformQuestionValidationsDisconnectInput>;
  update?: InputMaybe<TypeformQuestionValidationsUpdateInput>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type MutationUpdateTypeformQuestionsArgs = {
  connect?: InputMaybe<TypeformQuestionConnectInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionConnectOrCreateInput>;
  create?: InputMaybe<TypeformQuestionRelationInput>;
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  update?: InputMaybe<TypeformQuestionUpdateInput>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type MutationUpdateTypeformResponsesArgs = {
  connect?: InputMaybe<TypeformResponseConnectInput>;
  connectOrCreate?: InputMaybe<TypeformResponseConnectOrCreateInput>;
  create?: InputMaybe<TypeformResponseRelationInput>;
  delete?: InputMaybe<TypeformResponseDeleteInput>;
  disconnect?: InputMaybe<TypeformResponseDisconnectInput>;
  update?: InputMaybe<TypeformResponseUpdateInput>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type MutationUpdateTypeformSurveysArgs = {
  connect?: InputMaybe<TypeformSurveyConnectInput>;
  connectOrCreate?: InputMaybe<TypeformSurveyConnectOrCreateInput>;
  create?: InputMaybe<TypeformSurveyRelationInput>;
  delete?: InputMaybe<TypeformSurveyDeleteInput>;
  disconnect?: InputMaybe<TypeformSurveyDisconnectInput>;
  update?: InputMaybe<TypeformSurveyUpdateInput>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateWorkItemsArgs = {
  connect?: InputMaybe<WorkItemConnectInput>;
  create?: InputMaybe<WorkItemRelationInput>;
  delete?: InputMaybe<WorkItemDeleteInput>;
  disconnect?: InputMaybe<WorkItemDisconnectInput>;
  update?: InputMaybe<WorkItemUpdateInput>;
  where?: InputMaybe<WorkItemWhere>;
};

export type Organization = {
  __typename?: 'Organization';
  employees: Array<User>;
  employeesAggregate?: Maybe<OrganizationUserEmployeesAggregationSelection>;
  employeesConnection: OrganizationEmployeesConnection;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  project: Array<Project>;
  projectAggregate?: Maybe<OrganizationProjectProjectAggregationSelection>;
  projectConnection: OrganizationProjectConnection;
  systems: Array<System>;
  systemsAggregate?: Maybe<OrganizationSystemSystemsAggregationSelection>;
  systemsConnection: OrganizationSystemsConnection;
};


export type OrganizationEmployeesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type OrganizationEmployeesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type OrganizationEmployeesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationEmployeesConnectionSort>>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};


export type OrganizationProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type OrganizationProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type OrganizationProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationProjectConnectionSort>>;
  where?: InputMaybe<OrganizationProjectConnectionWhere>;
};


export type OrganizationSystemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SystemOptions>;
  where?: InputMaybe<SystemWhere>;
};


export type OrganizationSystemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SystemWhere>;
};


export type OrganizationSystemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationSystemsConnectionSort>>;
  where?: InputMaybe<OrganizationSystemsConnectionWhere>;
};

export type OrganizationAggregateSelection = {
  __typename?: 'OrganizationAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type OrganizationConnectInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  project?: InputMaybe<Array<OrganizationProjectConnectFieldInput>>;
  systems?: InputMaybe<Array<OrganizationSystemsConnectFieldInput>>;
};

export type OrganizationConnectOrCreateInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
};

export type OrganizationConnectOrCreateWhere = {
  node: OrganizationUniqueWhere;
};

export type OrganizationConnectWhere = {
  node: OrganizationWhere;
};

export type OrganizationCreateInput = {
  employees?: InputMaybe<OrganizationEmployeesFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<OrganizationProjectFieldInput>;
  systems?: InputMaybe<OrganizationSystemsFieldInput>;
};

export type OrganizationDeleteInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
  project?: InputMaybe<Array<OrganizationProjectDeleteFieldInput>>;
  systems?: InputMaybe<Array<OrganizationSystemsDeleteFieldInput>>;
};

export type OrganizationDisconnectInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  project?: InputMaybe<Array<OrganizationProjectDisconnectFieldInput>>;
  systems?: InputMaybe<Array<OrganizationSystemsDisconnectFieldInput>>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationEmployeesAggregateInput = {
  AND?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  NOT?: InputMaybe<OrganizationEmployeesAggregateInput>;
  OR?: InputMaybe<Array<OrganizationEmployeesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrganizationEmployeesNodeAggregationWhereInput>;
};

export type OrganizationEmployeesConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type OrganizationEmployeesConnectOrCreateFieldInput = {
  onCreate: OrganizationEmployeesConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type OrganizationEmployeesConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type OrganizationEmployeesConnection = {
  __typename?: 'OrganizationEmployeesConnection';
  edges: Array<OrganizationEmployeesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationEmployeesConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type OrganizationEmployeesConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  NOT?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationEmployeesConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type OrganizationEmployeesCreateFieldInput = {
  node: UserCreateInput;
};

export type OrganizationEmployeesDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationEmployeesDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationEmployeesFieldInput = {
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
};

export type OrganizationEmployeesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationEmployeesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationEmployeesNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  role_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationEmployeesRelationship = {
  __typename?: 'OrganizationEmployeesRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type OrganizationEmployeesUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type OrganizationEmployeesUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationEmployeesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationEmployeesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationEmployeesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationEmployeesDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationEmployeesUpdateConnectionInput>;
  where?: InputMaybe<OrganizationEmployeesConnectionWhere>;
};

export type OrganizationOnCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrganizationSort objects to sort Organizations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationSort>>;
};

export type OrganizationProjectAggregateInput = {
  AND?: InputMaybe<Array<OrganizationProjectAggregateInput>>;
  NOT?: InputMaybe<OrganizationProjectAggregateInput>;
  OR?: InputMaybe<Array<OrganizationProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrganizationProjectNodeAggregationWhereInput>;
};

export type OrganizationProjectConnectFieldInput = {
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type OrganizationProjectConnection = {
  __typename?: 'OrganizationProjectConnection';
  edges: Array<OrganizationProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type OrganizationProjectConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationProjectConnectionWhere>>;
  NOT?: InputMaybe<OrganizationProjectConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type OrganizationProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type OrganizationProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<OrganizationProjectConnectionWhere>;
};

export type OrganizationProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<OrganizationProjectConnectionWhere>;
};

export type OrganizationProjectFieldInput = {
  connect?: InputMaybe<Array<OrganizationProjectConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationProjectCreateFieldInput>>;
};

export type OrganizationProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationProjectNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationProjectProjectAggregationSelection = {
  __typename?: 'OrganizationProjectProjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrganizationProjectProjectNodeAggregateSelection>;
};

export type OrganizationProjectProjectNodeAggregateSelection = {
  __typename?: 'OrganizationProjectProjectNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type OrganizationProjectRelationship = {
  __typename?: 'OrganizationProjectRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type OrganizationProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type OrganizationProjectUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationProjectConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationProjectCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationProjectDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationProjectDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationProjectUpdateConnectionInput>;
  where?: InputMaybe<OrganizationProjectConnectionWhere>;
};

export type OrganizationRelationInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesCreateFieldInput>>;
  project?: InputMaybe<Array<OrganizationProjectCreateFieldInput>>;
  systems?: InputMaybe<Array<OrganizationSystemsCreateFieldInput>>;
};

/** Fields to sort Organizations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationSort object. */
export type OrganizationSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type OrganizationSystemSystemsAggregationSelection = {
  __typename?: 'OrganizationSystemSystemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrganizationSystemSystemsNodeAggregateSelection>;
};

export type OrganizationSystemSystemsNodeAggregateSelection = {
  __typename?: 'OrganizationSystemSystemsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type OrganizationSystemsAggregateInput = {
  AND?: InputMaybe<Array<OrganizationSystemsAggregateInput>>;
  NOT?: InputMaybe<OrganizationSystemsAggregateInput>;
  OR?: InputMaybe<Array<OrganizationSystemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrganizationSystemsNodeAggregationWhereInput>;
};

export type OrganizationSystemsConnectFieldInput = {
  connect?: InputMaybe<Array<SystemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SystemConnectWhere>;
};

export type OrganizationSystemsConnection = {
  __typename?: 'OrganizationSystemsConnection';
  edges: Array<OrganizationSystemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationSystemsConnectionSort = {
  node?: InputMaybe<SystemSort>;
};

export type OrganizationSystemsConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationSystemsConnectionWhere>>;
  NOT?: InputMaybe<OrganizationSystemsConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationSystemsConnectionWhere>>;
  node?: InputMaybe<SystemWhere>;
};

export type OrganizationSystemsCreateFieldInput = {
  node: SystemCreateInput;
};

export type OrganizationSystemsDeleteFieldInput = {
  delete?: InputMaybe<SystemDeleteInput>;
  where?: InputMaybe<OrganizationSystemsConnectionWhere>;
};

export type OrganizationSystemsDisconnectFieldInput = {
  disconnect?: InputMaybe<SystemDisconnectInput>;
  where?: InputMaybe<OrganizationSystemsConnectionWhere>;
};

export type OrganizationSystemsFieldInput = {
  connect?: InputMaybe<Array<OrganizationSystemsConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationSystemsCreateFieldInput>>;
};

export type OrganizationSystemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationSystemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationSystemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationSystemsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationSystemsRelationship = {
  __typename?: 'OrganizationSystemsRelationship';
  cursor: Scalars['String']['output'];
  node: System;
};

export type OrganizationSystemsUpdateConnectionInput = {
  node?: InputMaybe<SystemUpdateInput>;
};

export type OrganizationSystemsUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationSystemsConnectFieldInput>>;
  create?: InputMaybe<Array<OrganizationSystemsCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationSystemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationSystemsDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationSystemsUpdateConnectionInput>;
  where?: InputMaybe<OrganizationSystemsConnectionWhere>;
};

export type OrganizationUniqueWhere = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUpdateInput = {
  employees?: InputMaybe<Array<OrganizationEmployeesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Array<OrganizationProjectUpdateFieldInput>>;
  systems?: InputMaybe<Array<OrganizationSystemsUpdateFieldInput>>;
};

export type OrganizationUserEmployeesAggregationSelection = {
  __typename?: 'OrganizationUserEmployeesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrganizationUserEmployeesNodeAggregateSelection>;
};

export type OrganizationUserEmployeesNodeAggregateSelection = {
  __typename?: 'OrganizationUserEmployeesNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  role: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type OrganizationWhere = {
  AND?: InputMaybe<Array<OrganizationWhere>>;
  NOT?: InputMaybe<OrganizationWhere>;
  OR?: InputMaybe<Array<OrganizationWhere>>;
  employeesAggregate?: InputMaybe<OrganizationEmployeesAggregateInput>;
  /** Return Organizations where all of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_ALL?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where none of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_NONE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where one of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_SINGLE?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where some of the related OrganizationEmployeesConnections match this filter */
  employeesConnection_SOME?: InputMaybe<OrganizationEmployeesConnectionWhere>;
  /** Return Organizations where all of the related Users match this filter */
  employees_ALL?: InputMaybe<UserWhere>;
  /** Return Organizations where none of the related Users match this filter */
  employees_NONE?: InputMaybe<UserWhere>;
  /** Return Organizations where one of the related Users match this filter */
  employees_SINGLE?: InputMaybe<UserWhere>;
  /** Return Organizations where some of the related Users match this filter */
  employees_SOME?: InputMaybe<UserWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  projectAggregate?: InputMaybe<OrganizationProjectAggregateInput>;
  /** Return Organizations where all of the related OrganizationProjectConnections match this filter */
  projectConnection_ALL?: InputMaybe<OrganizationProjectConnectionWhere>;
  /** Return Organizations where none of the related OrganizationProjectConnections match this filter */
  projectConnection_NONE?: InputMaybe<OrganizationProjectConnectionWhere>;
  /** Return Organizations where one of the related OrganizationProjectConnections match this filter */
  projectConnection_SINGLE?: InputMaybe<OrganizationProjectConnectionWhere>;
  /** Return Organizations where some of the related OrganizationProjectConnections match this filter */
  projectConnection_SOME?: InputMaybe<OrganizationProjectConnectionWhere>;
  /** Return Organizations where all of the related Projects match this filter */
  project_ALL?: InputMaybe<ProjectWhere>;
  /** Return Organizations where none of the related Projects match this filter */
  project_NONE?: InputMaybe<ProjectWhere>;
  /** Return Organizations where one of the related Projects match this filter */
  project_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Organizations where some of the related Projects match this filter */
  project_SOME?: InputMaybe<ProjectWhere>;
  systemsAggregate?: InputMaybe<OrganizationSystemsAggregateInput>;
  /** Return Organizations where all of the related OrganizationSystemsConnections match this filter */
  systemsConnection_ALL?: InputMaybe<OrganizationSystemsConnectionWhere>;
  /** Return Organizations where none of the related OrganizationSystemsConnections match this filter */
  systemsConnection_NONE?: InputMaybe<OrganizationSystemsConnectionWhere>;
  /** Return Organizations where one of the related OrganizationSystemsConnections match this filter */
  systemsConnection_SINGLE?: InputMaybe<OrganizationSystemsConnectionWhere>;
  /** Return Organizations where some of the related OrganizationSystemsConnections match this filter */
  systemsConnection_SOME?: InputMaybe<OrganizationSystemsConnectionWhere>;
  /** Return Organizations where all of the related Systems match this filter */
  systems_ALL?: InputMaybe<SystemWhere>;
  /** Return Organizations where none of the related Systems match this filter */
  systems_NONE?: InputMaybe<SystemWhere>;
  /** Return Organizations where one of the related Systems match this filter */
  systems_SINGLE?: InputMaybe<SystemWhere>;
  /** Return Organizations where some of the related Systems match this filter */
  systems_SOME?: InputMaybe<SystemWhere>;
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organizationAggregate?: Maybe<ProjectOrganizationOrganizationAggregationSelection>;
  organizationConnection: ProjectOrganizationConnection;
  state: ProjectState;
  workItems: Array<WorkItem>;
  workItemsAggregate?: Maybe<ProjectWorkItemWorkItemsAggregationSelection>;
  workItemsConnection: ProjectWorkItemsConnection;
};


export type ProjectOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type ProjectOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type ProjectOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectOrganizationConnectionSort>>;
  where?: InputMaybe<ProjectOrganizationConnectionWhere>;
};


export type ProjectWorkItemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<WorkItemOptions>;
  where?: InputMaybe<WorkItemWhere>;
};


export type ProjectWorkItemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkItemWhere>;
};


export type ProjectWorkItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProjectWorkItemsConnectionSort>>;
  where?: InputMaybe<ProjectWorkItemsConnectionWhere>;
};

export type ProjectAggregateSelection = {
  __typename?: 'ProjectAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectConnectInput = {
  organization?: InputMaybe<ProjectOrganizationConnectFieldInput>;
  workItems?: InputMaybe<Array<ProjectWorkItemsConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  organization?: InputMaybe<ProjectOrganizationConnectOrCreateFieldInput>;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectCreateInput = {
  name: Scalars['String']['input'];
  organization?: InputMaybe<ProjectOrganizationFieldInput>;
  state: ProjectState;
  workItems?: InputMaybe<ProjectWorkItemsFieldInput>;
};

export type ProjectDeleteInput = {
  organization?: InputMaybe<ProjectOrganizationDeleteFieldInput>;
  workItems?: InputMaybe<Array<ProjectWorkItemsDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  organization?: InputMaybe<ProjectOrganizationDisconnectFieldInput>;
  workItems?: InputMaybe<Array<ProjectWorkItemsDisconnectFieldInput>>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type ProjectOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
};

export type ProjectOrganizationAggregateInput = {
  AND?: InputMaybe<Array<ProjectOrganizationAggregateInput>>;
  NOT?: InputMaybe<ProjectOrganizationAggregateInput>;
  OR?: InputMaybe<Array<ProjectOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectOrganizationNodeAggregationWhereInput>;
};

export type ProjectOrganizationConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type ProjectOrganizationConnectOrCreateFieldInput = {
  onCreate: ProjectOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type ProjectOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type ProjectOrganizationConnection = {
  __typename?: 'ProjectOrganizationConnection';
  edges: Array<ProjectOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type ProjectOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<ProjectOrganizationConnectionWhere>>;
  NOT?: InputMaybe<ProjectOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<ProjectOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type ProjectOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type ProjectOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<ProjectOrganizationConnectionWhere>;
};

export type ProjectOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<ProjectOrganizationConnectionWhere>;
};

export type ProjectOrganizationFieldInput = {
  connect?: InputMaybe<ProjectOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectOrganizationCreateFieldInput>;
};

export type ProjectOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectOrganizationNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectOrganizationOrganizationAggregationSelection = {
  __typename?: 'ProjectOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectOrganizationOrganizationNodeAggregateSelection>;
};

export type ProjectOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'ProjectOrganizationOrganizationNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type ProjectOrganizationRelationship = {
  __typename?: 'ProjectOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type ProjectOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type ProjectOrganizationUpdateFieldInput = {
  connect?: InputMaybe<ProjectOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<ProjectOrganizationCreateFieldInput>;
  delete?: InputMaybe<ProjectOrganizationDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectOrganizationDisconnectFieldInput>;
  update?: InputMaybe<ProjectOrganizationUpdateConnectionInput>;
  where?: InputMaybe<ProjectOrganizationConnectionWhere>;
};

export type ProjectRelationInput = {
  organization?: InputMaybe<ProjectOrganizationCreateFieldInput>;
  workItems?: InputMaybe<Array<ProjectWorkItemsCreateFieldInput>>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
};

export enum ProjectState {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Complete = 'COMPLETE',
  Inactive = 'INACTIVE'
}

export type ProjectUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<ProjectOrganizationUpdateFieldInput>;
  state?: InputMaybe<ProjectState>;
  workItems?: InputMaybe<Array<ProjectWorkItemsUpdateFieldInput>>;
};

export type ProjectWhere = {
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  OR?: InputMaybe<Array<ProjectWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationWhere>;
  organizationAggregate?: InputMaybe<ProjectOrganizationAggregateInput>;
  organizationConnection?: InputMaybe<ProjectOrganizationConnectionWhere>;
  organizationConnection_NOT?: InputMaybe<ProjectOrganizationConnectionWhere>;
  organization_NOT?: InputMaybe<OrganizationWhere>;
  state?: InputMaybe<ProjectState>;
  state_IN?: InputMaybe<Array<ProjectState>>;
  workItemsAggregate?: InputMaybe<ProjectWorkItemsAggregateInput>;
  /** Return Projects where all of the related ProjectWorkItemsConnections match this filter */
  workItemsConnection_ALL?: InputMaybe<ProjectWorkItemsConnectionWhere>;
  /** Return Projects where none of the related ProjectWorkItemsConnections match this filter */
  workItemsConnection_NONE?: InputMaybe<ProjectWorkItemsConnectionWhere>;
  /** Return Projects where one of the related ProjectWorkItemsConnections match this filter */
  workItemsConnection_SINGLE?: InputMaybe<ProjectWorkItemsConnectionWhere>;
  /** Return Projects where some of the related ProjectWorkItemsConnections match this filter */
  workItemsConnection_SOME?: InputMaybe<ProjectWorkItemsConnectionWhere>;
  /** Return Projects where all of the related WorkItems match this filter */
  workItems_ALL?: InputMaybe<WorkItemWhere>;
  /** Return Projects where none of the related WorkItems match this filter */
  workItems_NONE?: InputMaybe<WorkItemWhere>;
  /** Return Projects where one of the related WorkItems match this filter */
  workItems_SINGLE?: InputMaybe<WorkItemWhere>;
  /** Return Projects where some of the related WorkItems match this filter */
  workItems_SOME?: InputMaybe<WorkItemWhere>;
};

export type ProjectWorkItemWorkItemsAggregationSelection = {
  __typename?: 'ProjectWorkItemWorkItemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProjectWorkItemWorkItemsNodeAggregateSelection>;
};

export type ProjectWorkItemWorkItemsNodeAggregateSelection = {
  __typename?: 'ProjectWorkItemWorkItemsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type ProjectWorkItemsAggregateInput = {
  AND?: InputMaybe<Array<ProjectWorkItemsAggregateInput>>;
  NOT?: InputMaybe<ProjectWorkItemsAggregateInput>;
  OR?: InputMaybe<Array<ProjectWorkItemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProjectWorkItemsNodeAggregationWhereInput>;
};

export type ProjectWorkItemsConnectFieldInput = {
  connect?: InputMaybe<Array<WorkItemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<WorkItemConnectWhere>;
};

export type ProjectWorkItemsConnection = {
  __typename?: 'ProjectWorkItemsConnection';
  edges: Array<ProjectWorkItemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectWorkItemsConnectionSort = {
  node?: InputMaybe<WorkItemSort>;
};

export type ProjectWorkItemsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectWorkItemsConnectionWhere>>;
  NOT?: InputMaybe<ProjectWorkItemsConnectionWhere>;
  OR?: InputMaybe<Array<ProjectWorkItemsConnectionWhere>>;
  node?: InputMaybe<WorkItemWhere>;
};

export type ProjectWorkItemsCreateFieldInput = {
  node: WorkItemCreateInput;
};

export type ProjectWorkItemsDeleteFieldInput = {
  delete?: InputMaybe<WorkItemDeleteInput>;
  where?: InputMaybe<ProjectWorkItemsConnectionWhere>;
};

export type ProjectWorkItemsDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkItemDisconnectInput>;
  where?: InputMaybe<ProjectWorkItemsConnectionWhere>;
};

export type ProjectWorkItemsFieldInput = {
  connect?: InputMaybe<Array<ProjectWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectWorkItemsCreateFieldInput>>;
};

export type ProjectWorkItemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectWorkItemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectWorkItemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProjectWorkItemsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectWorkItemsRelationship = {
  __typename?: 'ProjectWorkItemsRelationship';
  cursor: Scalars['String']['output'];
  node: WorkItem;
};

export type ProjectWorkItemsUpdateConnectionInput = {
  node?: InputMaybe<WorkItemUpdateInput>;
};

export type ProjectWorkItemsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProjectWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<ProjectWorkItemsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProjectWorkItemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectWorkItemsDisconnectFieldInput>>;
  update?: InputMaybe<ProjectWorkItemsUpdateConnectionInput>;
  where?: InputMaybe<ProjectWorkItemsConnectionWhere>;
};

export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  domainCount: Scalars['Int']['output'];
  domains: Array<Domain>;
  domainsAggregate: DomainAggregateSelection;
  domainsConnection: DomainsConnection;
  links: Array<Link>;
  linksAggregate: LinkAggregateSelection;
  linksConnection: LinksConnection;
  organizations: Array<Organization>;
  organizationsAggregate: OrganizationAggregateSelection;
  organizationsConnection: OrganizationsConnection;
  projectCount: Scalars['Int']['output'];
  projects: Array<Project>;
  projectsAggregate: ProjectAggregateSelection;
  projectsConnection: ProjectsConnection;
  systemCount: Scalars['Int']['output'];
  systems: Array<System>;
  systemsAggregate: SystemAggregateSelection;
  systemsConnection: SystemsConnection;
  typeformAnswerChoices: Array<TypeformAnswerChoice>;
  typeformAnswerChoicesAggregate: TypeformAnswerChoiceAggregateSelection;
  typeformAnswerChoicesConnection: TypeformAnswerChoicesConnection;
  typeformAnswers: Array<TypeformAnswer>;
  typeformAnswersAggregate: TypeformAnswerAggregateSelection;
  typeformAnswersConnection: TypeformAnswersConnection;
  typeformQuestionAttachments: Array<TypeformQuestionAttachment>;
  typeformQuestionAttachmentsAggregate: TypeformQuestionAttachmentAggregateSelection;
  typeformQuestionAttachmentsConnection: TypeformQuestionAttachmentsConnection;
  typeformQuestionChoices: Array<TypeformQuestionChoice>;
  typeformQuestionChoicesAggregate: TypeformQuestionChoiceAggregateSelection;
  typeformQuestionChoicesConnection: TypeformQuestionChoicesConnection;
  typeformQuestionProperties: Array<TypeformQuestionProperties>;
  typeformQuestionPropertiesAggregate: TypeformQuestionPropertiesAggregateSelection;
  typeformQuestionPropertiesConnection: TypeformQuestionPropertiesConnection;
  typeformQuestionValidations: Array<TypeformQuestionValidations>;
  typeformQuestionValidationsAggregate: TypeformQuestionValidationsAggregateSelection;
  typeformQuestionValidationsConnection: TypeformQuestionValidationsConnection;
  typeformQuestions: Array<TypeformQuestion>;
  typeformQuestionsAggregate: TypeformQuestionAggregateSelection;
  typeformQuestionsConnection: TypeformQuestionsConnection;
  typeformResponses: Array<TypeformResponse>;
  typeformResponsesAggregate: TypeformResponseAggregateSelection;
  typeformResponsesConnection: TypeformResponsesConnection;
  typeformSurveys: Array<TypeformSurvey>;
  typeformSurveysAggregate: TypeformSurveyAggregateSelection;
  typeformSurveysConnection: TypeformSurveysConnection;
  userCount: Scalars['Int']['output'];
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
  workItems: Array<WorkItem>;
  workItemsAggregate: WorkItemAggregateSelection;
  workItemsConnection: WorkItemsConnection;
};


export type QueryDomainCountArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDomainsArgs = {
  options?: InputMaybe<DomainOptions>;
  where?: InputMaybe<DomainWhere>;
};


export type QueryDomainsAggregateArgs = {
  where?: InputMaybe<DomainWhere>;
};


export type QueryDomainsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DomainSort>>>;
  where?: InputMaybe<DomainWhere>;
};


export type QueryLinksArgs = {
  options?: InputMaybe<LinkOptions>;
  where?: InputMaybe<LinkWhere>;
};


export type QueryLinksAggregateArgs = {
  where?: InputMaybe<LinkWhere>;
};


export type QueryLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<LinkSort>>>;
  where?: InputMaybe<LinkWhere>;
};


export type QueryOrganizationsArgs = {
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationSort>>>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryProjectCountArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};


export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
  where?: InputMaybe<ProjectWhere>;
};


export type QuerySystemCountArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySystemsArgs = {
  options?: InputMaybe<SystemOptions>;
  where?: InputMaybe<SystemWhere>;
};


export type QuerySystemsAggregateArgs = {
  where?: InputMaybe<SystemWhere>;
};


export type QuerySystemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SystemSort>>>;
  where?: InputMaybe<SystemWhere>;
};


export type QueryTypeformAnswerChoicesArgs = {
  options?: InputMaybe<TypeformAnswerChoiceOptions>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type QueryTypeformAnswerChoicesAggregateArgs = {
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type QueryTypeformAnswerChoicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformAnswerChoiceSort>>>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type QueryTypeformAnswersArgs = {
  options?: InputMaybe<TypeformAnswerOptions>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type QueryTypeformAnswersAggregateArgs = {
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type QueryTypeformAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformAnswerSort>>>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type QueryTypeformQuestionAttachmentsArgs = {
  options?: InputMaybe<TypeformQuestionAttachmentOptions>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type QueryTypeformQuestionAttachmentsAggregateArgs = {
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type QueryTypeformQuestionAttachmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformQuestionAttachmentSort>>>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type QueryTypeformQuestionChoicesArgs = {
  options?: InputMaybe<TypeformQuestionChoiceOptions>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type QueryTypeformQuestionChoicesAggregateArgs = {
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type QueryTypeformQuestionChoicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformQuestionChoiceSort>>>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type QueryTypeformQuestionPropertiesArgs = {
  options?: InputMaybe<TypeformQuestionPropertiesOptions>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type QueryTypeformQuestionPropertiesAggregateArgs = {
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type QueryTypeformQuestionPropertiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformQuestionPropertiesSort>>>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type QueryTypeformQuestionValidationsArgs = {
  options?: InputMaybe<TypeformQuestionValidationsOptions>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type QueryTypeformQuestionValidationsAggregateArgs = {
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type QueryTypeformQuestionValidationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformQuestionValidationsSort>>>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type QueryTypeformQuestionsArgs = {
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type QueryTypeformQuestionsAggregateArgs = {
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type QueryTypeformQuestionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformQuestionSort>>>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type QueryTypeformResponsesArgs = {
  options?: InputMaybe<TypeformResponseOptions>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type QueryTypeformResponsesAggregateArgs = {
  where?: InputMaybe<TypeformResponseWhere>;
};


export type QueryTypeformResponsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformResponseSort>>>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type QueryTypeformSurveysArgs = {
  options?: InputMaybe<TypeformSurveyOptions>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type QueryTypeformSurveysAggregateArgs = {
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type QueryTypeformSurveysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TypeformSurveySort>>>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type QueryUserCountArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};


export type QueryWorkItemsArgs = {
  options?: InputMaybe<WorkItemOptions>;
  where?: InputMaybe<WorkItemWhere>;
};


export type QueryWorkItemsAggregateArgs = {
  where?: InputMaybe<WorkItemWhere>;
};


export type QueryWorkItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<WorkItemSort>>>;
  where?: InputMaybe<WorkItemWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type System = {
  __typename?: 'System';
  domain: Array<Domain>;
  domainAggregate?: Maybe<SystemDomainDomainAggregationSelection>;
  domainConnection: SystemDomainConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organizationAggregate?: Maybe<SystemOrganizationOrganizationAggregationSelection>;
  organizationConnection: SystemOrganizationConnection;
  owners: Array<User>;
  ownersAggregate?: Maybe<SystemUserOwnersAggregationSelection>;
  ownersConnection: SystemOwnersConnection;
  relatedWorkItems: Array<WorkItem>;
  relatedWorkItemsAggregate?: Maybe<SystemWorkItemRelatedWorkItemsAggregationSelection>;
  relatedWorkItemsConnection: SystemRelatedWorkItemsConnection;
};


export type SystemDomainArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DomainOptions>;
  where?: InputMaybe<DomainWhere>;
};


export type SystemDomainAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DomainWhere>;
};


export type SystemDomainConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemDomainConnectionSort>>;
  where?: InputMaybe<SystemDomainConnectionWhere>;
};


export type SystemOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type SystemOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type SystemOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemOrganizationConnectionSort>>;
  where?: InputMaybe<SystemOrganizationConnectionWhere>;
};


export type SystemOwnersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type SystemOwnersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type SystemOwnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemOwnersConnectionSort>>;
  where?: InputMaybe<SystemOwnersConnectionWhere>;
};


export type SystemRelatedWorkItemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<WorkItemOptions>;
  where?: InputMaybe<WorkItemWhere>;
};


export type SystemRelatedWorkItemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkItemWhere>;
};


export type SystemRelatedWorkItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemRelatedWorkItemsConnectionSort>>;
  where?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
};

export type SystemAggregateSelection = {
  __typename?: 'SystemAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type SystemConnectInput = {
  domain?: InputMaybe<Array<SystemDomainConnectFieldInput>>;
  organization?: InputMaybe<SystemOrganizationConnectFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersConnectFieldInput>>;
  relatedWorkItems?: InputMaybe<Array<SystemRelatedWorkItemsConnectFieldInput>>;
};

export type SystemConnectOrCreateInput = {
  domain?: InputMaybe<Array<SystemDomainConnectOrCreateFieldInput>>;
  organization?: InputMaybe<SystemOrganizationConnectOrCreateFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersConnectOrCreateFieldInput>>;
};

export type SystemConnectWhere = {
  node: SystemWhere;
};

export type SystemCreateInput = {
  domain?: InputMaybe<SystemDomainFieldInput>;
  name: Scalars['String']['input'];
  organization?: InputMaybe<SystemOrganizationFieldInput>;
  owners?: InputMaybe<SystemOwnersFieldInput>;
  relatedWorkItems?: InputMaybe<SystemRelatedWorkItemsFieldInput>;
};

export type SystemDeleteInput = {
  domain?: InputMaybe<Array<SystemDomainDeleteFieldInput>>;
  organization?: InputMaybe<SystemOrganizationDeleteFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersDeleteFieldInput>>;
  relatedWorkItems?: InputMaybe<Array<SystemRelatedWorkItemsDeleteFieldInput>>;
};

export type SystemDisconnectInput = {
  domain?: InputMaybe<Array<SystemDomainDisconnectFieldInput>>;
  organization?: InputMaybe<SystemOrganizationDisconnectFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersDisconnectFieldInput>>;
  relatedWorkItems?: InputMaybe<Array<SystemRelatedWorkItemsDisconnectFieldInput>>;
};

export type SystemDomainAggregateInput = {
  AND?: InputMaybe<Array<SystemDomainAggregateInput>>;
  NOT?: InputMaybe<SystemDomainAggregateInput>;
  OR?: InputMaybe<Array<SystemDomainAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SystemDomainNodeAggregationWhereInput>;
};

export type SystemDomainConnectFieldInput = {
  connect?: InputMaybe<Array<DomainConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DomainConnectWhere>;
};

export type SystemDomainConnectOrCreateFieldInput = {
  onCreate: SystemDomainConnectOrCreateFieldInputOnCreate;
  where: DomainConnectOrCreateWhere;
};

export type SystemDomainConnectOrCreateFieldInputOnCreate = {
  node: DomainOnCreateInput;
};

export type SystemDomainConnection = {
  __typename?: 'SystemDomainConnection';
  edges: Array<SystemDomainRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SystemDomainConnectionSort = {
  node?: InputMaybe<DomainSort>;
};

export type SystemDomainConnectionWhere = {
  AND?: InputMaybe<Array<SystemDomainConnectionWhere>>;
  NOT?: InputMaybe<SystemDomainConnectionWhere>;
  OR?: InputMaybe<Array<SystemDomainConnectionWhere>>;
  node?: InputMaybe<DomainWhere>;
};

export type SystemDomainCreateFieldInput = {
  node: DomainCreateInput;
};

export type SystemDomainDeleteFieldInput = {
  delete?: InputMaybe<DomainDeleteInput>;
  where?: InputMaybe<SystemDomainConnectionWhere>;
};

export type SystemDomainDisconnectFieldInput = {
  disconnect?: InputMaybe<DomainDisconnectInput>;
  where?: InputMaybe<SystemDomainConnectionWhere>;
};

export type SystemDomainDomainAggregationSelection = {
  __typename?: 'SystemDomainDomainAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SystemDomainDomainNodeAggregateSelection>;
};

export type SystemDomainDomainNodeAggregateSelection = {
  __typename?: 'SystemDomainDomainNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type SystemDomainFieldInput = {
  connect?: InputMaybe<Array<SystemDomainConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SystemDomainConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SystemDomainCreateFieldInput>>;
};

export type SystemDomainNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SystemDomainNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SystemDomainNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SystemDomainNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemDomainRelationship = {
  __typename?: 'SystemDomainRelationship';
  cursor: Scalars['String']['output'];
  node: Domain;
};

export type SystemDomainUpdateConnectionInput = {
  node?: InputMaybe<DomainUpdateInput>;
};

export type SystemDomainUpdateFieldInput = {
  connect?: InputMaybe<Array<SystemDomainConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SystemDomainConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SystemDomainCreateFieldInput>>;
  delete?: InputMaybe<Array<SystemDomainDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SystemDomainDisconnectFieldInput>>;
  update?: InputMaybe<SystemDomainUpdateConnectionInput>;
  where?: InputMaybe<SystemDomainConnectionWhere>;
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor: Scalars['String']['output'];
  node: System;
};

export type SystemOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SystemSort objects to sort Systems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SystemSort>>;
};

export type SystemOrganizationAggregateInput = {
  AND?: InputMaybe<Array<SystemOrganizationAggregateInput>>;
  NOT?: InputMaybe<SystemOrganizationAggregateInput>;
  OR?: InputMaybe<Array<SystemOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SystemOrganizationNodeAggregationWhereInput>;
};

export type SystemOrganizationConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type SystemOrganizationConnectOrCreateFieldInput = {
  onCreate: SystemOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type SystemOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type SystemOrganizationConnection = {
  __typename?: 'SystemOrganizationConnection';
  edges: Array<SystemOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SystemOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type SystemOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<SystemOrganizationConnectionWhere>>;
  NOT?: InputMaybe<SystemOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<SystemOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type SystemOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type SystemOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<SystemOrganizationConnectionWhere>;
};

export type SystemOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<SystemOrganizationConnectionWhere>;
};

export type SystemOrganizationFieldInput = {
  connect?: InputMaybe<SystemOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<SystemOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<SystemOrganizationCreateFieldInput>;
};

export type SystemOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SystemOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SystemOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SystemOrganizationNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemOrganizationOrganizationAggregationSelection = {
  __typename?: 'SystemOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SystemOrganizationOrganizationNodeAggregateSelection>;
};

export type SystemOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'SystemOrganizationOrganizationNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type SystemOrganizationRelationship = {
  __typename?: 'SystemOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type SystemOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type SystemOrganizationUpdateFieldInput = {
  connect?: InputMaybe<SystemOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<SystemOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<SystemOrganizationCreateFieldInput>;
  delete?: InputMaybe<SystemOrganizationDeleteFieldInput>;
  disconnect?: InputMaybe<SystemOrganizationDisconnectFieldInput>;
  update?: InputMaybe<SystemOrganizationUpdateConnectionInput>;
  where?: InputMaybe<SystemOrganizationConnectionWhere>;
};

export type SystemOwnersAggregateInput = {
  AND?: InputMaybe<Array<SystemOwnersAggregateInput>>;
  NOT?: InputMaybe<SystemOwnersAggregateInput>;
  OR?: InputMaybe<Array<SystemOwnersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SystemOwnersNodeAggregationWhereInput>;
};

export type SystemOwnersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type SystemOwnersConnectOrCreateFieldInput = {
  onCreate: SystemOwnersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type SystemOwnersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type SystemOwnersConnection = {
  __typename?: 'SystemOwnersConnection';
  edges: Array<SystemOwnersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SystemOwnersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type SystemOwnersConnectionWhere = {
  AND?: InputMaybe<Array<SystemOwnersConnectionWhere>>;
  NOT?: InputMaybe<SystemOwnersConnectionWhere>;
  OR?: InputMaybe<Array<SystemOwnersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type SystemOwnersCreateFieldInput = {
  node: UserCreateInput;
};

export type SystemOwnersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<SystemOwnersConnectionWhere>;
};

export type SystemOwnersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<SystemOwnersConnectionWhere>;
};

export type SystemOwnersFieldInput = {
  connect?: InputMaybe<Array<SystemOwnersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SystemOwnersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SystemOwnersCreateFieldInput>>;
};

export type SystemOwnersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SystemOwnersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SystemOwnersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SystemOwnersNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  role_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemOwnersRelationship = {
  __typename?: 'SystemOwnersRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type SystemOwnersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type SystemOwnersUpdateFieldInput = {
  connect?: InputMaybe<Array<SystemOwnersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SystemOwnersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SystemOwnersCreateFieldInput>>;
  delete?: InputMaybe<Array<SystemOwnersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SystemOwnersDisconnectFieldInput>>;
  update?: InputMaybe<SystemOwnersUpdateConnectionInput>;
  where?: InputMaybe<SystemOwnersConnectionWhere>;
};

export type SystemRelatedWorkItemsAggregateInput = {
  AND?: InputMaybe<Array<SystemRelatedWorkItemsAggregateInput>>;
  NOT?: InputMaybe<SystemRelatedWorkItemsAggregateInput>;
  OR?: InputMaybe<Array<SystemRelatedWorkItemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SystemRelatedWorkItemsNodeAggregationWhereInput>;
};

export type SystemRelatedWorkItemsConnectFieldInput = {
  connect?: InputMaybe<Array<WorkItemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<WorkItemConnectWhere>;
};

export type SystemRelatedWorkItemsConnection = {
  __typename?: 'SystemRelatedWorkItemsConnection';
  edges: Array<SystemRelatedWorkItemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SystemRelatedWorkItemsConnectionSort = {
  node?: InputMaybe<WorkItemSort>;
};

export type SystemRelatedWorkItemsConnectionWhere = {
  AND?: InputMaybe<Array<SystemRelatedWorkItemsConnectionWhere>>;
  NOT?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
  OR?: InputMaybe<Array<SystemRelatedWorkItemsConnectionWhere>>;
  node?: InputMaybe<WorkItemWhere>;
};

export type SystemRelatedWorkItemsCreateFieldInput = {
  node: WorkItemCreateInput;
};

export type SystemRelatedWorkItemsDeleteFieldInput = {
  delete?: InputMaybe<WorkItemDeleteInput>;
  where?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
};

export type SystemRelatedWorkItemsDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkItemDisconnectInput>;
  where?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
};

export type SystemRelatedWorkItemsFieldInput = {
  connect?: InputMaybe<Array<SystemRelatedWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<SystemRelatedWorkItemsCreateFieldInput>>;
};

export type SystemRelatedWorkItemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SystemRelatedWorkItemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SystemRelatedWorkItemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SystemRelatedWorkItemsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemRelatedWorkItemsRelationship = {
  __typename?: 'SystemRelatedWorkItemsRelationship';
  cursor: Scalars['String']['output'];
  node: WorkItem;
};

export type SystemRelatedWorkItemsUpdateConnectionInput = {
  node?: InputMaybe<WorkItemUpdateInput>;
};

export type SystemRelatedWorkItemsUpdateFieldInput = {
  connect?: InputMaybe<Array<SystemRelatedWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<SystemRelatedWorkItemsCreateFieldInput>>;
  delete?: InputMaybe<Array<SystemRelatedWorkItemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SystemRelatedWorkItemsDisconnectFieldInput>>;
  update?: InputMaybe<SystemRelatedWorkItemsUpdateConnectionInput>;
  where?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
};

export type SystemRelationInput = {
  domain?: InputMaybe<Array<SystemDomainCreateFieldInput>>;
  organization?: InputMaybe<SystemOrganizationCreateFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersCreateFieldInput>>;
  relatedWorkItems?: InputMaybe<Array<SystemRelatedWorkItemsCreateFieldInput>>;
};

/** Fields to sort Systems by. The order in which sorts are applied is not guaranteed when specifying many fields in one SystemSort object. */
export type SystemSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type SystemUpdateInput = {
  domain?: InputMaybe<Array<SystemDomainUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<SystemOrganizationUpdateFieldInput>;
  owners?: InputMaybe<Array<SystemOwnersUpdateFieldInput>>;
  relatedWorkItems?: InputMaybe<Array<SystemRelatedWorkItemsUpdateFieldInput>>;
};

export type SystemUserOwnersAggregationSelection = {
  __typename?: 'SystemUserOwnersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SystemUserOwnersNodeAggregateSelection>;
};

export type SystemUserOwnersNodeAggregateSelection = {
  __typename?: 'SystemUserOwnersNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  role: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type SystemWhere = {
  AND?: InputMaybe<Array<SystemWhere>>;
  NOT?: InputMaybe<SystemWhere>;
  OR?: InputMaybe<Array<SystemWhere>>;
  domainAggregate?: InputMaybe<SystemDomainAggregateInput>;
  /** Return Systems where all of the related SystemDomainConnections match this filter */
  domainConnection_ALL?: InputMaybe<SystemDomainConnectionWhere>;
  /** Return Systems where none of the related SystemDomainConnections match this filter */
  domainConnection_NONE?: InputMaybe<SystemDomainConnectionWhere>;
  /** Return Systems where one of the related SystemDomainConnections match this filter */
  domainConnection_SINGLE?: InputMaybe<SystemDomainConnectionWhere>;
  /** Return Systems where some of the related SystemDomainConnections match this filter */
  domainConnection_SOME?: InputMaybe<SystemDomainConnectionWhere>;
  /** Return Systems where all of the related Domains match this filter */
  domain_ALL?: InputMaybe<DomainWhere>;
  /** Return Systems where none of the related Domains match this filter */
  domain_NONE?: InputMaybe<DomainWhere>;
  /** Return Systems where one of the related Domains match this filter */
  domain_SINGLE?: InputMaybe<DomainWhere>;
  /** Return Systems where some of the related Domains match this filter */
  domain_SOME?: InputMaybe<DomainWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationWhere>;
  organizationAggregate?: InputMaybe<SystemOrganizationAggregateInput>;
  organizationConnection?: InputMaybe<SystemOrganizationConnectionWhere>;
  organizationConnection_NOT?: InputMaybe<SystemOrganizationConnectionWhere>;
  organization_NOT?: InputMaybe<OrganizationWhere>;
  ownersAggregate?: InputMaybe<SystemOwnersAggregateInput>;
  /** Return Systems where all of the related SystemOwnersConnections match this filter */
  ownersConnection_ALL?: InputMaybe<SystemOwnersConnectionWhere>;
  /** Return Systems where none of the related SystemOwnersConnections match this filter */
  ownersConnection_NONE?: InputMaybe<SystemOwnersConnectionWhere>;
  /** Return Systems where one of the related SystemOwnersConnections match this filter */
  ownersConnection_SINGLE?: InputMaybe<SystemOwnersConnectionWhere>;
  /** Return Systems where some of the related SystemOwnersConnections match this filter */
  ownersConnection_SOME?: InputMaybe<SystemOwnersConnectionWhere>;
  /** Return Systems where all of the related Users match this filter */
  owners_ALL?: InputMaybe<UserWhere>;
  /** Return Systems where none of the related Users match this filter */
  owners_NONE?: InputMaybe<UserWhere>;
  /** Return Systems where one of the related Users match this filter */
  owners_SINGLE?: InputMaybe<UserWhere>;
  /** Return Systems where some of the related Users match this filter */
  owners_SOME?: InputMaybe<UserWhere>;
  relatedWorkItemsAggregate?: InputMaybe<SystemRelatedWorkItemsAggregateInput>;
  /** Return Systems where all of the related SystemRelatedWorkItemsConnections match this filter */
  relatedWorkItemsConnection_ALL?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
  /** Return Systems where none of the related SystemRelatedWorkItemsConnections match this filter */
  relatedWorkItemsConnection_NONE?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
  /** Return Systems where one of the related SystemRelatedWorkItemsConnections match this filter */
  relatedWorkItemsConnection_SINGLE?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
  /** Return Systems where some of the related SystemRelatedWorkItemsConnections match this filter */
  relatedWorkItemsConnection_SOME?: InputMaybe<SystemRelatedWorkItemsConnectionWhere>;
  /** Return Systems where all of the related WorkItems match this filter */
  relatedWorkItems_ALL?: InputMaybe<WorkItemWhere>;
  /** Return Systems where none of the related WorkItems match this filter */
  relatedWorkItems_NONE?: InputMaybe<WorkItemWhere>;
  /** Return Systems where one of the related WorkItems match this filter */
  relatedWorkItems_SINGLE?: InputMaybe<WorkItemWhere>;
  /** Return Systems where some of the related WorkItems match this filter */
  relatedWorkItems_SOME?: InputMaybe<WorkItemWhere>;
};

export type SystemWorkItemRelatedWorkItemsAggregationSelection = {
  __typename?: 'SystemWorkItemRelatedWorkItemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<SystemWorkItemRelatedWorkItemsNodeAggregateSelection>;
};

export type SystemWorkItemRelatedWorkItemsNodeAggregateSelection = {
  __typename?: 'SystemWorkItemRelatedWorkItemsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type SystemsConnection = {
  __typename?: 'SystemsConnection';
  edges: Array<SystemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswer = {
  __typename?: 'TypeformAnswer';
  boolean?: Maybe<Scalars['Boolean']['output']>;
  choices: Array<TypeformAnswerChoice>;
  choicesAggregate?: Maybe<TypeformAnswerTypeformAnswerChoiceChoicesAggregationSelection>;
  choicesConnection: TypeformAnswerChoicesConnection;
  date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  number?: Maybe<Scalars['String']['output']>;
  question: TypeformQuestion;
  questionAggregate?: Maybe<TypeformAnswerTypeformQuestionQuestionAggregationSelection>;
  questionConnection: TypeformAnswerQuestionConnection;
  response?: Maybe<TypeformResponse>;
  responseAggregate?: Maybe<TypeformAnswerTypeformResponseResponseAggregationSelection>;
  responseConnection: TypeformAnswerResponseConnection;
  text?: Maybe<Scalars['String']['output']>;
  type: TypeformAnswerType;
  url?: Maybe<Scalars['String']['output']>;
};


export type TypeformAnswerChoicesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformAnswerChoiceOptions>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type TypeformAnswerChoicesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformAnswerChoiceWhere>;
};


export type TypeformAnswerChoicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformAnswerChoicesConnectionSort>>;
  where?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
};


export type TypeformAnswerQuestionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformAnswerQuestionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformAnswerQuestionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformAnswerQuestionConnectionSort>>;
  where?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
};


export type TypeformAnswerResponseArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformResponseOptions>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type TypeformAnswerResponseAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type TypeformAnswerResponseConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformAnswerResponseConnectionSort>>;
  where?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
};

export type TypeformAnswerAggregateSelection = {
  __typename?: 'TypeformAnswerAggregateSelection';
  count: Scalars['Int']['output'];
  date: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  fileUrl: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: StringAggregateSelectionNullable;
  text: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNullable;
};

export type TypeformAnswerChoice = {
  __typename?: 'TypeformAnswerChoice';
  answer?: Maybe<TypeformAnswer>;
  answerAggregate?: Maybe<TypeformAnswerChoiceTypeformAnswerAnswerAggregationSelection>;
  answerConnection: TypeformAnswerChoiceAnswerConnection;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  questionChoice?: Maybe<TypeformQuestionChoice>;
  questionChoiceAggregate?: Maybe<TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceAggregationSelection>;
  questionChoiceConnection: TypeformAnswerChoiceQuestionChoiceConnection;
  ref?: Maybe<Scalars['String']['output']>;
  typeformId: Scalars['ID']['output'];
};


export type TypeformAnswerChoiceAnswerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformAnswerOptions>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformAnswerChoiceAnswerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformAnswerChoiceAnswerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformAnswerChoiceAnswerConnectionSort>>;
  where?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
};


export type TypeformAnswerChoiceQuestionChoiceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionChoiceOptions>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformAnswerChoiceQuestionChoiceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformAnswerChoiceQuestionChoiceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceConnectionSort>>;
  where?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
};

export type TypeformAnswerChoiceAggregateSelection = {
  __typename?: 'TypeformAnswerChoiceAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformAnswerChoiceAnswerAggregateInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceAnswerAggregateInput>>;
  NOT?: InputMaybe<TypeformAnswerChoiceAnswerAggregateInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceAnswerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformAnswerChoiceAnswerNodeAggregationWhereInput>;
};

export type TypeformAnswerChoiceAnswerConnectFieldInput = {
  connect?: InputMaybe<TypeformAnswerConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformAnswerConnectWhere>;
};

export type TypeformAnswerChoiceAnswerConnection = {
  __typename?: 'TypeformAnswerChoiceAnswerConnection';
  edges: Array<TypeformAnswerChoiceAnswerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswerChoiceAnswerConnectionSort = {
  node?: InputMaybe<TypeformAnswerSort>;
};

export type TypeformAnswerChoiceAnswerConnectionWhere = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceAnswerConnectionWhere>>;
  NOT?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceAnswerConnectionWhere>>;
  node?: InputMaybe<TypeformAnswerWhere>;
};

export type TypeformAnswerChoiceAnswerCreateFieldInput = {
  node: TypeformAnswerCreateInput;
};

export type TypeformAnswerChoiceAnswerDeleteFieldInput = {
  delete?: InputMaybe<TypeformAnswerDeleteInput>;
  where?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
};

export type TypeformAnswerChoiceAnswerDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformAnswerDisconnectInput>;
  where?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
};

export type TypeformAnswerChoiceAnswerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceAnswerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformAnswerChoiceAnswerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceAnswerNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  number_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformAnswerChoiceAnswerRelationship = {
  __typename?: 'TypeformAnswerChoiceAnswerRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformAnswer;
};

export type TypeformAnswerChoiceConnectInput = {
  answer?: InputMaybe<TypeformAnswerChoiceAnswerConnectFieldInput>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectFieldInput>;
};

export type TypeformAnswerChoiceConnectWhere = {
  node: TypeformAnswerChoiceWhere;
};

export type TypeformAnswerChoiceCreateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceFieldInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  typeformId: Scalars['ID']['input'];
};

export type TypeformAnswerChoiceDeleteInput = {
  answer?: InputMaybe<TypeformAnswerChoiceAnswerDeleteFieldInput>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceDeleteFieldInput>;
};

export type TypeformAnswerChoiceDisconnectInput = {
  answer?: InputMaybe<TypeformAnswerChoiceAnswerDisconnectFieldInput>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceDisconnectFieldInput>;
};

export type TypeformAnswerChoiceEdge = {
  __typename?: 'TypeformAnswerChoiceEdge';
  cursor: Scalars['String']['output'];
  node: TypeformAnswerChoice;
};

export type TypeformAnswerChoiceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformAnswerChoiceSort objects to sort TypeformAnswerChoices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformAnswerChoiceSort>>;
};

export type TypeformAnswerChoiceQuestionChoiceAggregateInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceAggregateInput>>;
  NOT?: InputMaybe<TypeformAnswerChoiceQuestionChoiceAggregateInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformAnswerChoiceQuestionChoiceNodeAggregationWhereInput>;
};

export type TypeformAnswerChoiceQuestionChoiceConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionChoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionChoiceConnectWhere>;
};

export type TypeformAnswerChoiceQuestionChoiceConnection = {
  __typename?: 'TypeformAnswerChoiceQuestionChoiceConnection';
  edges: Array<TypeformAnswerChoiceQuestionChoiceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswerChoiceQuestionChoiceConnectionSort = {
  node?: InputMaybe<TypeformQuestionChoiceSort>;
};

export type TypeformAnswerChoiceQuestionChoiceConnectionWhere = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceConnectionWhere>>;
  NOT?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionChoiceWhere>;
};

export type TypeformAnswerChoiceQuestionChoiceCreateFieldInput = {
  node: TypeformQuestionChoiceCreateInput;
};

export type TypeformAnswerChoiceQuestionChoiceDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionChoiceDeleteInput>;
  where?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
};

export type TypeformAnswerChoiceQuestionChoiceDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionChoiceDisconnectInput>;
  where?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
};

export type TypeformAnswerChoiceQuestionChoiceFieldInput = {
  connect?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectFieldInput>;
  create?: InputMaybe<TypeformAnswerChoiceQuestionChoiceCreateFieldInput>;
};

export type TypeformAnswerChoiceQuestionChoiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformAnswerChoiceQuestionChoiceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceQuestionChoiceNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  label_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformAnswerChoiceQuestionChoiceRelationship = {
  __typename?: 'TypeformAnswerChoiceQuestionChoiceRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionChoice;
};

export type TypeformAnswerChoiceQuestionChoiceUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionChoiceUpdateInput>;
};

export type TypeformAnswerChoiceQuestionChoiceUpdateFieldInput = {
  connect?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectFieldInput>;
  create?: InputMaybe<TypeformAnswerChoiceQuestionChoiceCreateFieldInput>;
  delete?: InputMaybe<TypeformAnswerChoiceQuestionChoiceDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformAnswerChoiceQuestionChoiceDisconnectFieldInput>;
  update?: InputMaybe<TypeformAnswerChoiceQuestionChoiceUpdateConnectionInput>;
  where?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
};

export type TypeformAnswerChoiceRelationInput = {
  answer?: InputMaybe<TypeformAnswerChoiceAnswerCreateFieldInput>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceCreateFieldInput>;
};

/** Fields to sort TypeformAnswerChoices by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformAnswerChoiceSort object. */
export type TypeformAnswerChoiceSort = {
  id?: InputMaybe<SortDirection>;
  label?: InputMaybe<SortDirection>;
  ref?: InputMaybe<SortDirection>;
  typeformId?: InputMaybe<SortDirection>;
};

export type TypeformAnswerChoiceTypeformAnswerAnswerAggregationSelection = {
  __typename?: 'TypeformAnswerChoiceTypeformAnswerAnswerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformAnswerChoiceTypeformAnswerAnswerNodeAggregateSelection>;
};

export type TypeformAnswerChoiceTypeformAnswerAnswerNodeAggregateSelection = {
  __typename?: 'TypeformAnswerChoiceTypeformAnswerAnswerNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  fileUrl: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: StringAggregateSelectionNullable;
  text: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNullable;
};

export type TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceAggregationSelection = {
  __typename?: 'TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceNodeAggregateSelection>;
};

export type TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceNodeAggregateSelection = {
  __typename?: 'TypeformAnswerChoiceTypeformQuestionChoiceQuestionChoiceNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformAnswerChoiceUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  questionChoice?: InputMaybe<TypeformAnswerChoiceQuestionChoiceUpdateFieldInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformAnswerChoiceWhere = {
  AND?: InputMaybe<Array<TypeformAnswerChoiceWhere>>;
  NOT?: InputMaybe<TypeformAnswerChoiceWhere>;
  OR?: InputMaybe<Array<TypeformAnswerChoiceWhere>>;
  answer?: InputMaybe<TypeformAnswerWhere>;
  answerAggregate?: InputMaybe<TypeformAnswerChoiceAnswerAggregateInput>;
  answerConnection?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
  answerConnection_NOT?: InputMaybe<TypeformAnswerChoiceAnswerConnectionWhere>;
  answer_NOT?: InputMaybe<TypeformAnswerWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  label_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  label_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  questionChoice?: InputMaybe<TypeformQuestionChoiceWhere>;
  questionChoiceAggregate?: InputMaybe<TypeformAnswerChoiceQuestionChoiceAggregateInput>;
  questionChoiceConnection?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
  questionChoiceConnection_NOT?: InputMaybe<TypeformAnswerChoiceQuestionChoiceConnectionWhere>;
  questionChoice_NOT?: InputMaybe<TypeformQuestionChoiceWhere>;
  ref?: InputMaybe<Scalars['String']['input']>;
  ref_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  ref_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  ref_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ref_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  typeformId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  typeformId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformAnswerChoicesAggregateInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoicesAggregateInput>>;
  NOT?: InputMaybe<TypeformAnswerChoicesAggregateInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoicesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformAnswerChoicesNodeAggregationWhereInput>;
};

export type TypeformAnswerChoicesConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformAnswerChoiceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformAnswerChoiceConnectWhere>;
};

export type TypeformAnswerChoicesConnection = {
  __typename?: 'TypeformAnswerChoicesConnection';
  edges: Array<TypeformAnswerChoicesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswerChoicesConnectionSort = {
  node?: InputMaybe<TypeformAnswerChoiceSort>;
};

export type TypeformAnswerChoicesConnectionWhere = {
  AND?: InputMaybe<Array<TypeformAnswerChoicesConnectionWhere>>;
  NOT?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
  OR?: InputMaybe<Array<TypeformAnswerChoicesConnectionWhere>>;
  node?: InputMaybe<TypeformAnswerChoiceWhere>;
};

export type TypeformAnswerChoicesCreateFieldInput = {
  node: TypeformAnswerChoiceCreateInput;
};

export type TypeformAnswerChoicesDeleteFieldInput = {
  delete?: InputMaybe<TypeformAnswerChoiceDeleteInput>;
  where?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
};

export type TypeformAnswerChoicesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformAnswerChoiceDisconnectInput>;
  where?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
};

export type TypeformAnswerChoicesFieldInput = {
  connect?: InputMaybe<Array<TypeformAnswerChoicesConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformAnswerChoicesCreateFieldInput>>;
};

export type TypeformAnswerChoicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformAnswerChoicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformAnswerChoicesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformAnswerChoicesNodeAggregationWhereInput>>;
  label_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  label_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformAnswerChoicesRelationship = {
  __typename?: 'TypeformAnswerChoicesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformAnswerChoice;
};

export type TypeformAnswerChoicesUpdateConnectionInput = {
  node?: InputMaybe<TypeformAnswerChoiceUpdateInput>;
};

export type TypeformAnswerChoicesUpdateFieldInput = {
  connect?: InputMaybe<Array<TypeformAnswerChoicesConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformAnswerChoicesCreateFieldInput>>;
  delete?: InputMaybe<Array<TypeformAnswerChoicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypeformAnswerChoicesDisconnectFieldInput>>;
  update?: InputMaybe<TypeformAnswerChoicesUpdateConnectionInput>;
  where?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
};

export type TypeformAnswerConnectInput = {
  choices?: InputMaybe<Array<TypeformAnswerChoicesConnectFieldInput>>;
  question?: InputMaybe<TypeformAnswerQuestionConnectFieldInput>;
  response?: InputMaybe<TypeformAnswerResponseConnectFieldInput>;
};

export type TypeformAnswerConnectOrCreateInput = {
  question?: InputMaybe<TypeformAnswerQuestionConnectOrCreateFieldInput>;
  response?: InputMaybe<TypeformAnswerResponseConnectOrCreateFieldInput>;
};

export type TypeformAnswerConnectWhere = {
  node: TypeformAnswerWhere;
};

export type TypeformAnswerCreateInput = {
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<TypeformAnswerChoicesFieldInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<TypeformAnswerQuestionFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  type: TypeformAnswerType;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TypeformAnswerDeleteInput = {
  choices?: InputMaybe<Array<TypeformAnswerChoicesDeleteFieldInput>>;
  question?: InputMaybe<TypeformAnswerQuestionDeleteFieldInput>;
  response?: InputMaybe<TypeformAnswerResponseDeleteFieldInput>;
};

export type TypeformAnswerDisconnectInput = {
  choices?: InputMaybe<Array<TypeformAnswerChoicesDisconnectFieldInput>>;
  question?: InputMaybe<TypeformAnswerQuestionDisconnectFieldInput>;
  response?: InputMaybe<TypeformAnswerResponseDisconnectFieldInput>;
};

export type TypeformAnswerEdge = {
  __typename?: 'TypeformAnswerEdge';
  cursor: Scalars['String']['output'];
  node: TypeformAnswer;
};

export type TypeformAnswerOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformAnswerSort objects to sort TypeformAnswers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformAnswerSort>>;
};

export type TypeformAnswerQuestionAggregateInput = {
  AND?: InputMaybe<Array<TypeformAnswerQuestionAggregateInput>>;
  NOT?: InputMaybe<TypeformAnswerQuestionAggregateInput>;
  OR?: InputMaybe<Array<TypeformAnswerQuestionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformAnswerQuestionNodeAggregationWhereInput>;
};

export type TypeformAnswerQuestionConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformAnswerQuestionConnectOrCreateFieldInput = {
  onCreate: TypeformAnswerQuestionConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformAnswerQuestionConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformAnswerQuestionConnection = {
  __typename?: 'TypeformAnswerQuestionConnection';
  edges: Array<TypeformAnswerQuestionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswerQuestionConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformAnswerQuestionConnectionWhere = {
  AND?: InputMaybe<Array<TypeformAnswerQuestionConnectionWhere>>;
  NOT?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
  OR?: InputMaybe<Array<TypeformAnswerQuestionConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformAnswerQuestionCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformAnswerQuestionDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
};

export type TypeformAnswerQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
};

export type TypeformAnswerQuestionFieldInput = {
  connect?: InputMaybe<TypeformAnswerQuestionConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformAnswerQuestionConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformAnswerQuestionCreateFieldInput>;
};

export type TypeformAnswerQuestionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformAnswerQuestionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformAnswerQuestionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformAnswerQuestionNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformAnswerQuestionRelationship = {
  __typename?: 'TypeformAnswerQuestionRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformAnswerQuestionUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionUpdateInput>;
};

export type TypeformAnswerQuestionUpdateFieldInput = {
  connect?: InputMaybe<TypeformAnswerQuestionConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformAnswerQuestionConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformAnswerQuestionCreateFieldInput>;
  delete?: InputMaybe<TypeformAnswerQuestionDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformAnswerQuestionDisconnectFieldInput>;
  update?: InputMaybe<TypeformAnswerQuestionUpdateConnectionInput>;
  where?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
};

export type TypeformAnswerRelationInput = {
  choices?: InputMaybe<Array<TypeformAnswerChoicesCreateFieldInput>>;
  question?: InputMaybe<TypeformAnswerQuestionCreateFieldInput>;
  response?: InputMaybe<TypeformAnswerResponseCreateFieldInput>;
};

export type TypeformAnswerResponseAggregateInput = {
  AND?: InputMaybe<Array<TypeformAnswerResponseAggregateInput>>;
  NOT?: InputMaybe<TypeformAnswerResponseAggregateInput>;
  OR?: InputMaybe<Array<TypeformAnswerResponseAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformAnswerResponseNodeAggregationWhereInput>;
};

export type TypeformAnswerResponseConnectFieldInput = {
  connect?: InputMaybe<TypeformResponseConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformResponseConnectWhere>;
};

export type TypeformAnswerResponseConnectOrCreateFieldInput = {
  onCreate: TypeformAnswerResponseConnectOrCreateFieldInputOnCreate;
  where: TypeformResponseConnectOrCreateWhere;
};

export type TypeformAnswerResponseConnectOrCreateFieldInputOnCreate = {
  node: TypeformResponseOnCreateInput;
};

export type TypeformAnswerResponseConnection = {
  __typename?: 'TypeformAnswerResponseConnection';
  edges: Array<TypeformAnswerResponseRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformAnswerResponseConnectionSort = {
  node?: InputMaybe<TypeformResponseSort>;
};

export type TypeformAnswerResponseConnectionWhere = {
  AND?: InputMaybe<Array<TypeformAnswerResponseConnectionWhere>>;
  NOT?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
  OR?: InputMaybe<Array<TypeformAnswerResponseConnectionWhere>>;
  node?: InputMaybe<TypeformResponseWhere>;
};

export type TypeformAnswerResponseCreateFieldInput = {
  node: TypeformResponseCreateInput;
};

export type TypeformAnswerResponseDeleteFieldInput = {
  delete?: InputMaybe<TypeformResponseDeleteInput>;
  where?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
};

export type TypeformAnswerResponseDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformResponseDisconnectInput>;
  where?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
};

export type TypeformAnswerResponseNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformAnswerResponseNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformAnswerResponseNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformAnswerResponseNodeAggregationWhereInput>>;
  formmodifiedAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  landedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TypeformAnswerResponseRelationship = {
  __typename?: 'TypeformAnswerResponseRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformResponse;
};

/** Fields to sort TypeformAnswers by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformAnswerSort object. */
export type TypeformAnswerSort = {
  boolean?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  fileUrl?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  number?: InputMaybe<SortDirection>;
  text?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
};

export enum TypeformAnswerType {
  Boolean = 'boolean',
  Choice = 'choice',
  Choices = 'choices',
  Date = 'date',
  Email = 'email',
  FileUrl = 'file_url',
  Number = 'number',
  Payment = 'payment',
  PhoneNumber = 'phone_number',
  Text = 'text',
  Url = 'url'
}

export type TypeformAnswerTypeformAnswerChoiceChoicesAggregationSelection = {
  __typename?: 'TypeformAnswerTypeformAnswerChoiceChoicesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformAnswerTypeformAnswerChoiceChoicesNodeAggregateSelection>;
};

export type TypeformAnswerTypeformAnswerChoiceChoicesNodeAggregateSelection = {
  __typename?: 'TypeformAnswerTypeformAnswerChoiceChoicesNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformAnswerTypeformQuestionQuestionAggregationSelection = {
  __typename?: 'TypeformAnswerTypeformQuestionQuestionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformAnswerTypeformQuestionQuestionNodeAggregateSelection>;
};

export type TypeformAnswerTypeformQuestionQuestionNodeAggregateSelection = {
  __typename?: 'TypeformAnswerTypeformQuestionQuestionNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformAnswerTypeformResponseResponseAggregationSelection = {
  __typename?: 'TypeformAnswerTypeformResponseResponseAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformAnswerTypeformResponseResponseNodeAggregateSelection>;
};

export type TypeformAnswerTypeformResponseResponseNodeAggregateSelection = {
  __typename?: 'TypeformAnswerTypeformResponseResponseNodeAggregateSelection';
  formmodifiedAt: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  landedAt: DateTimeAggregateSelectionNonNullable;
  submittedAt: DateTimeAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformAnswerUpdateInput = {
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<Array<TypeformAnswerChoicesUpdateFieldInput>>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<TypeformAnswerQuestionUpdateFieldInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeformAnswerType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TypeformAnswerWhere = {
  AND?: InputMaybe<Array<TypeformAnswerWhere>>;
  NOT?: InputMaybe<TypeformAnswerWhere>;
  OR?: InputMaybe<Array<TypeformAnswerWhere>>;
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  choicesAggregate?: InputMaybe<TypeformAnswerChoicesAggregateInput>;
  /** Return TypeformAnswers where all of the related TypeformAnswerChoicesConnections match this filter */
  choicesConnection_ALL?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
  /** Return TypeformAnswers where none of the related TypeformAnswerChoicesConnections match this filter */
  choicesConnection_NONE?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
  /** Return TypeformAnswers where one of the related TypeformAnswerChoicesConnections match this filter */
  choicesConnection_SINGLE?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
  /** Return TypeformAnswers where some of the related TypeformAnswerChoicesConnections match this filter */
  choicesConnection_SOME?: InputMaybe<TypeformAnswerChoicesConnectionWhere>;
  /** Return TypeformAnswers where all of the related TypeformAnswerChoices match this filter */
  choices_ALL?: InputMaybe<TypeformAnswerChoiceWhere>;
  /** Return TypeformAnswers where none of the related TypeformAnswerChoices match this filter */
  choices_NONE?: InputMaybe<TypeformAnswerChoiceWhere>;
  /** Return TypeformAnswers where one of the related TypeformAnswerChoices match this filter */
  choices_SINGLE?: InputMaybe<TypeformAnswerChoiceWhere>;
  /** Return TypeformAnswers where some of the related TypeformAnswerChoices match this filter */
  choices_SOME?: InputMaybe<TypeformAnswerChoiceWhere>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  fileUrl_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  fileUrl_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  fileUrl_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileUrl_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  number_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  number_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  number_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  number_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<TypeformQuestionWhere>;
  questionAggregate?: InputMaybe<TypeformAnswerQuestionAggregateInput>;
  questionConnection?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
  questionConnection_NOT?: InputMaybe<TypeformAnswerQuestionConnectionWhere>;
  question_NOT?: InputMaybe<TypeformQuestionWhere>;
  response?: InputMaybe<TypeformResponseWhere>;
  responseAggregate?: InputMaybe<TypeformAnswerResponseAggregateInput>;
  responseConnection?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
  responseConnection_NOT?: InputMaybe<TypeformAnswerResponseConnectionWhere>;
  response_NOT?: InputMaybe<TypeformResponseWhere>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  text_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  text_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeformAnswerType>;
  type_IN?: InputMaybe<Array<TypeformAnswerType>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type TypeformAnswersConnection = {
  __typename?: 'TypeformAnswersConnection';
  edges: Array<TypeformAnswerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestion = {
  __typename?: 'TypeformQuestion';
  answers: Array<TypeformAnswer>;
  answersAggregate?: Maybe<TypeformQuestionTypeformAnswerAnswersAggregationSelection>;
  answersConnection: TypeformQuestionAnswersConnection;
  attachment?: Maybe<TypeformQuestionAttachment>;
  attachmentAggregate?: Maybe<TypeformQuestionTypeformQuestionAttachmentAttachmentAggregationSelection>;
  attachmentConnection: TypeformQuestionAttachmentConnection;
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  properties?: Maybe<TypeformQuestionProperties>;
  propertiesAggregate?: Maybe<TypeformQuestionTypeformQuestionPropertiesPropertiesAggregationSelection>;
  propertiesConnection: TypeformQuestionPropertiesConnection;
  ref?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: TypeformQuestionType;
  typeformId: Scalars['ID']['output'];
  typeformSurvey?: Maybe<TypeformSurvey>;
  typeformSurveyAggregate?: Maybe<TypeformQuestionTypeformSurveyTypeformSurveyAggregationSelection>;
  typeformSurveyConnection: TypeformQuestionTypeformSurveyConnection;
  validations?: Maybe<TypeformQuestionValidations>;
  validationsAggregate?: Maybe<TypeformQuestionTypeformQuestionValidationsValidationsAggregationSelection>;
  validationsConnection: TypeformQuestionValidationsConnection;
};


export type TypeformQuestionAnswersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformAnswerOptions>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformQuestionAnswersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformQuestionAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionAnswersConnectionSort>>;
  where?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
};


export type TypeformQuestionAttachmentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionAttachmentOptions>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type TypeformQuestionAttachmentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type TypeformQuestionAttachmentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionAttachmentConnectionSort>>;
  where?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
};


export type TypeformQuestionPropertiesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionPropertiesOptions>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type TypeformQuestionPropertiesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type TypeformQuestionPropertiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionPropertiesConnectionSort>>;
  where?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
};


export type TypeformQuestionTypeformSurveyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformSurveyOptions>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type TypeformQuestionTypeformSurveyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type TypeformQuestionTypeformSurveyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionTypeformSurveyConnectionSort>>;
  where?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
};


export type TypeformQuestionValidationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionValidationsOptions>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type TypeformQuestionValidationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionValidationsWhere>;
};


export type TypeformQuestionValidationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionValidationsConnectionSort>>;
  where?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
};

export type TypeformQuestionAggregateSelection = {
  __typename?: 'TypeformQuestionAggregateSelection';
  count: Scalars['Int']['output'];
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionAnswersAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionAnswersAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionAnswersAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionAnswersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionAnswersNodeAggregationWhereInput>;
};

export type TypeformQuestionAnswersConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformAnswerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformAnswerConnectWhere>;
};

export type TypeformQuestionAnswersConnection = {
  __typename?: 'TypeformQuestionAnswersConnection';
  edges: Array<TypeformQuestionAnswersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionAnswersConnectionSort = {
  node?: InputMaybe<TypeformAnswerSort>;
};

export type TypeformQuestionAnswersConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionAnswersConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionAnswersConnectionWhere>>;
  node?: InputMaybe<TypeformAnswerWhere>;
};

export type TypeformQuestionAnswersCreateFieldInput = {
  node: TypeformAnswerCreateInput;
};

export type TypeformQuestionAnswersDeleteFieldInput = {
  delete?: InputMaybe<TypeformAnswerDeleteInput>;
  where?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
};

export type TypeformQuestionAnswersDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformAnswerDisconnectInput>;
  where?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
};

export type TypeformQuestionAnswersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionAnswersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionAnswersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionAnswersNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  number_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionAnswersRelationship = {
  __typename?: 'TypeformQuestionAnswersRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformAnswer;
};

export type TypeformQuestionAttachment = {
  __typename?: 'TypeformQuestionAttachment';
  choice?: Maybe<TypeformQuestionChoice>;
  choiceAggregate?: Maybe<TypeformQuestionAttachmentTypeformQuestionChoiceChoiceAggregationSelection>;
  choiceConnection: TypeformQuestionAttachmentChoiceConnection;
  formversion?: Maybe<Scalars['Int']['output']>;
  href: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  question?: Maybe<TypeformQuestion>;
  questionAggregate?: Maybe<TypeformQuestionAttachmentTypeformQuestionQuestionAggregationSelection>;
  questionConnection: TypeformQuestionAttachmentQuestionConnection;
  type: TypeformQuestionAttachmentType;
};


export type TypeformQuestionAttachmentChoiceArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionChoiceOptions>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformQuestionAttachmentChoiceAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformQuestionAttachmentChoiceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionAttachmentChoiceConnectionSort>>;
  where?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
};


export type TypeformQuestionAttachmentQuestionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionAttachmentQuestionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionAttachmentQuestionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionAttachmentQuestionConnectionSort>>;
  where?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
};

export type TypeformQuestionAttachmentAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionAttachmentNodeAggregationWhereInput>;
};

export type TypeformQuestionAttachmentAggregateSelection = {
  __typename?: 'TypeformQuestionAttachmentAggregateSelection';
  count: Scalars['Int']['output'];
  formversion: IntAggregateSelectionNullable;
  href: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionAttachmentChoiceAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentChoiceAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentChoiceAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentChoiceAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionAttachmentChoiceNodeAggregationWhereInput>;
};

export type TypeformQuestionAttachmentChoiceConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionChoiceConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionChoiceConnectWhere>;
};

export type TypeformQuestionAttachmentChoiceConnection = {
  __typename?: 'TypeformQuestionAttachmentChoiceConnection';
  edges: Array<TypeformQuestionAttachmentChoiceRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionAttachmentChoiceConnectionSort = {
  node?: InputMaybe<TypeformQuestionChoiceSort>;
};

export type TypeformQuestionAttachmentChoiceConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentChoiceConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentChoiceConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionChoiceWhere>;
};

export type TypeformQuestionAttachmentChoiceCreateFieldInput = {
  node: TypeformQuestionChoiceCreateInput;
};

export type TypeformQuestionAttachmentChoiceDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionChoiceDeleteInput>;
  where?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
};

export type TypeformQuestionAttachmentChoiceDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionChoiceDisconnectInput>;
  where?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
};

export type TypeformQuestionAttachmentChoiceNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentChoiceNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentChoiceNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentChoiceNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  label_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionAttachmentChoiceRelationship = {
  __typename?: 'TypeformQuestionAttachmentChoiceRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionChoice;
};

export type TypeformQuestionAttachmentConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionAttachmentConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionAttachmentConnectWhere>;
};

export type TypeformQuestionAttachmentConnectInput = {
  choice?: InputMaybe<TypeformQuestionAttachmentChoiceConnectFieldInput>;
  question?: InputMaybe<TypeformQuestionAttachmentQuestionConnectFieldInput>;
};

export type TypeformQuestionAttachmentConnectOrCreateInput = {
  question?: InputMaybe<TypeformQuestionAttachmentQuestionConnectOrCreateFieldInput>;
};

export type TypeformQuestionAttachmentConnectWhere = {
  node: TypeformQuestionAttachmentWhere;
};

export type TypeformQuestionAttachmentConnection = {
  __typename?: 'TypeformQuestionAttachmentConnection';
  edges: Array<TypeformQuestionAttachmentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionAttachmentConnectionSort = {
  node?: InputMaybe<TypeformQuestionAttachmentSort>;
};

export type TypeformQuestionAttachmentConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionAttachmentWhere>;
};

export type TypeformQuestionAttachmentCreateFieldInput = {
  node: TypeformQuestionAttachmentCreateInput;
};

export type TypeformQuestionAttachmentCreateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  href: Scalars['String']['input'];
  type: TypeformQuestionAttachmentType;
};

export type TypeformQuestionAttachmentDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionAttachmentDeleteInput>;
  where?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
};

export type TypeformQuestionAttachmentDeleteInput = {
  choice?: InputMaybe<TypeformQuestionAttachmentChoiceDeleteFieldInput>;
  question?: InputMaybe<TypeformQuestionAttachmentQuestionDeleteFieldInput>;
};

export type TypeformQuestionAttachmentDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionAttachmentDisconnectInput>;
  where?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
};

export type TypeformQuestionAttachmentDisconnectInput = {
  choice?: InputMaybe<TypeformQuestionAttachmentChoiceDisconnectFieldInput>;
  question?: InputMaybe<TypeformQuestionAttachmentQuestionDisconnectFieldInput>;
};

export type TypeformQuestionAttachmentEdge = {
  __typename?: 'TypeformQuestionAttachmentEdge';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionAttachment;
};

export type TypeformQuestionAttachmentFieldInput = {
  connect?: InputMaybe<TypeformQuestionAttachmentConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionAttachmentCreateFieldInput>;
};

export type TypeformQuestionAttachmentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  href_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  href_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionAttachmentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformQuestionAttachmentSort objects to sort TypeformQuestionAttachments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformQuestionAttachmentSort>>;
};

export type TypeformQuestionAttachmentQuestionAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentQuestionAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentQuestionAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentQuestionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionAttachmentQuestionNodeAggregationWhereInput>;
};

export type TypeformQuestionAttachmentQuestionConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformQuestionAttachmentQuestionConnectOrCreateFieldInput = {
  onCreate: TypeformQuestionAttachmentQuestionConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformQuestionAttachmentQuestionConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformQuestionAttachmentQuestionConnection = {
  __typename?: 'TypeformQuestionAttachmentQuestionConnection';
  edges: Array<TypeformQuestionAttachmentQuestionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionAttachmentQuestionConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformQuestionAttachmentQuestionConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentQuestionConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentQuestionConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformQuestionAttachmentQuestionCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformQuestionAttachmentQuestionDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
};

export type TypeformQuestionAttachmentQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
};

export type TypeformQuestionAttachmentQuestionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentQuestionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentQuestionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentQuestionNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionAttachmentQuestionRelationship = {
  __typename?: 'TypeformQuestionAttachmentQuestionRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformQuestionAttachmentRelationInput = {
  choice?: InputMaybe<TypeformQuestionAttachmentChoiceCreateFieldInput>;
  question?: InputMaybe<TypeformQuestionAttachmentQuestionCreateFieldInput>;
};

export type TypeformQuestionAttachmentRelationship = {
  __typename?: 'TypeformQuestionAttachmentRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionAttachment;
};

/** Fields to sort TypeformQuestionAttachments by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformQuestionAttachmentSort object. */
export type TypeformQuestionAttachmentSort = {
  formversion?: InputMaybe<SortDirection>;
  href?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export enum TypeformQuestionAttachmentType {
  Image = 'image',
  Video = 'video'
}

export type TypeformQuestionAttachmentTypeformQuestionChoiceChoiceAggregationSelection = {
  __typename?: 'TypeformQuestionAttachmentTypeformQuestionChoiceChoiceAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionAttachmentTypeformQuestionChoiceChoiceNodeAggregateSelection>;
};

export type TypeformQuestionAttachmentTypeformQuestionChoiceChoiceNodeAggregateSelection = {
  __typename?: 'TypeformQuestionAttachmentTypeformQuestionChoiceChoiceNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionAttachmentTypeformQuestionQuestionAggregationSelection = {
  __typename?: 'TypeformQuestionAttachmentTypeformQuestionQuestionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionAttachmentTypeformQuestionQuestionNodeAggregateSelection>;
};

export type TypeformQuestionAttachmentTypeformQuestionQuestionNodeAggregateSelection = {
  __typename?: 'TypeformQuestionAttachmentTypeformQuestionQuestionNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionAttachmentUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionAttachmentUpdateInput>;
};

export type TypeformQuestionAttachmentUpdateFieldInput = {
  connect?: InputMaybe<TypeformQuestionAttachmentConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionAttachmentCreateFieldInput>;
  delete?: InputMaybe<TypeformQuestionAttachmentDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformQuestionAttachmentDisconnectFieldInput>;
  update?: InputMaybe<TypeformQuestionAttachmentUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
};

export type TypeformQuestionAttachmentUpdateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeformQuestionAttachmentType>;
};

export type TypeformQuestionAttachmentWhere = {
  AND?: InputMaybe<Array<TypeformQuestionAttachmentWhere>>;
  NOT?: InputMaybe<TypeformQuestionAttachmentWhere>;
  OR?: InputMaybe<Array<TypeformQuestionAttachmentWhere>>;
  choice?: InputMaybe<TypeformQuestionChoiceWhere>;
  choiceAggregate?: InputMaybe<TypeformQuestionAttachmentChoiceAggregateInput>;
  choiceConnection?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
  choiceConnection_NOT?: InputMaybe<TypeformQuestionAttachmentChoiceConnectionWhere>;
  choice_NOT?: InputMaybe<TypeformQuestionChoiceWhere>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  href_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  href_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  href_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<TypeformQuestionWhere>;
  questionAggregate?: InputMaybe<TypeformQuestionAttachmentQuestionAggregateInput>;
  questionConnection?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
  questionConnection_NOT?: InputMaybe<TypeformQuestionAttachmentQuestionConnectionWhere>;
  question_NOT?: InputMaybe<TypeformQuestionWhere>;
  type?: InputMaybe<TypeformQuestionAttachmentType>;
  type_IN?: InputMaybe<Array<TypeformQuestionAttachmentType>>;
};

export type TypeformQuestionAttachmentsConnection = {
  __typename?: 'TypeformQuestionAttachmentsConnection';
  edges: Array<TypeformQuestionAttachmentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionChoice = {
  __typename?: 'TypeformQuestionChoice';
  attachment?: Maybe<TypeformQuestionAttachment>;
  attachmentAggregate?: Maybe<TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentAggregationSelection>;
  attachmentConnection: TypeformQuestionChoiceAttachmentConnection;
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<TypeformQuestionProperties>;
  propertiesAggregate?: Maybe<TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesAggregationSelection>;
  propertiesConnection: TypeformQuestionChoicePropertiesConnection;
  ref?: Maybe<Scalars['String']['output']>;
  typeformId: Scalars['ID']['output'];
};


export type TypeformQuestionChoiceAttachmentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionAttachmentOptions>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type TypeformQuestionChoiceAttachmentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionAttachmentWhere>;
};


export type TypeformQuestionChoiceAttachmentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionChoiceAttachmentConnectionSort>>;
  where?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
};


export type TypeformQuestionChoicePropertiesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionPropertiesOptions>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type TypeformQuestionChoicePropertiesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionPropertiesWhere>;
};


export type TypeformQuestionChoicePropertiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionChoicePropertiesConnectionSort>>;
  where?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
};

export type TypeformQuestionChoiceAggregateSelection = {
  __typename?: 'TypeformQuestionChoiceAggregateSelection';
  count: Scalars['Int']['output'];
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionChoiceAttachmentAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionChoiceAttachmentAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionChoiceAttachmentAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionChoiceAttachmentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionChoiceAttachmentNodeAggregationWhereInput>;
};

export type TypeformQuestionChoiceAttachmentConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionAttachmentConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionAttachmentConnectWhere>;
};

export type TypeformQuestionChoiceAttachmentConnection = {
  __typename?: 'TypeformQuestionChoiceAttachmentConnection';
  edges: Array<TypeformQuestionChoiceAttachmentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionChoiceAttachmentConnectionSort = {
  node?: InputMaybe<TypeformQuestionAttachmentSort>;
};

export type TypeformQuestionChoiceAttachmentConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionChoiceAttachmentConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionChoiceAttachmentConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionAttachmentWhere>;
};

export type TypeformQuestionChoiceAttachmentCreateFieldInput = {
  node: TypeformQuestionAttachmentCreateInput;
};

export type TypeformQuestionChoiceAttachmentDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionAttachmentDeleteInput>;
  where?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
};

export type TypeformQuestionChoiceAttachmentDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionAttachmentDisconnectInput>;
  where?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
};

export type TypeformQuestionChoiceAttachmentFieldInput = {
  connect?: InputMaybe<TypeformQuestionChoiceAttachmentConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionChoiceAttachmentCreateFieldInput>;
};

export type TypeformQuestionChoiceAttachmentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionChoiceAttachmentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionChoiceAttachmentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionChoiceAttachmentNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  href_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  href_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  href_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  href_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  href_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionChoiceAttachmentRelationship = {
  __typename?: 'TypeformQuestionChoiceAttachmentRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionAttachment;
};

export type TypeformQuestionChoiceAttachmentUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionAttachmentUpdateInput>;
};

export type TypeformQuestionChoiceAttachmentUpdateFieldInput = {
  connect?: InputMaybe<TypeformQuestionChoiceAttachmentConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionChoiceAttachmentCreateFieldInput>;
  delete?: InputMaybe<TypeformQuestionChoiceAttachmentDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformQuestionChoiceAttachmentDisconnectFieldInput>;
  update?: InputMaybe<TypeformQuestionChoiceAttachmentUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
};

export type TypeformQuestionChoiceConnectInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentConnectFieldInput>;
  properties?: InputMaybe<TypeformQuestionChoicePropertiesConnectFieldInput>;
};

export type TypeformQuestionChoiceConnectWhere = {
  node: TypeformQuestionChoiceWhere;
};

export type TypeformQuestionChoiceCreateInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentFieldInput>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  typeformId: Scalars['ID']['input'];
};

export type TypeformQuestionChoiceDeleteInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentDeleteFieldInput>;
  properties?: InputMaybe<TypeformQuestionChoicePropertiesDeleteFieldInput>;
};

export type TypeformQuestionChoiceDisconnectInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentDisconnectFieldInput>;
  properties?: InputMaybe<TypeformQuestionChoicePropertiesDisconnectFieldInput>;
};

export type TypeformQuestionChoiceEdge = {
  __typename?: 'TypeformQuestionChoiceEdge';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionChoice;
};

export type TypeformQuestionChoiceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformQuestionChoiceSort objects to sort TypeformQuestionChoices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformQuestionChoiceSort>>;
};

export type TypeformQuestionChoicePropertiesAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionChoicePropertiesAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionChoicePropertiesAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionChoicePropertiesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionChoicePropertiesNodeAggregationWhereInput>;
};

export type TypeformQuestionChoicePropertiesConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionPropertiesConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionPropertiesConnectWhere>;
};

export type TypeformQuestionChoicePropertiesConnection = {
  __typename?: 'TypeformQuestionChoicePropertiesConnection';
  edges: Array<TypeformQuestionChoicePropertiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionChoicePropertiesConnectionSort = {
  node?: InputMaybe<TypeformQuestionPropertiesSort>;
};

export type TypeformQuestionChoicePropertiesConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionChoicePropertiesConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionChoicePropertiesConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionPropertiesWhere>;
};

export type TypeformQuestionChoicePropertiesCreateFieldInput = {
  node: TypeformQuestionPropertiesCreateInput;
};

export type TypeformQuestionChoicePropertiesDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionPropertiesDeleteInput>;
  where?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
};

export type TypeformQuestionChoicePropertiesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionPropertiesDisconnectInput>;
  where?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
};

export type TypeformQuestionChoicePropertiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionChoicePropertiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionChoicePropertiesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionChoicePropertiesNodeAggregationWhereInput>>;
  dateFormat_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionChoicePropertiesRelationship = {
  __typename?: 'TypeformQuestionChoicePropertiesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionProperties;
};

export type TypeformQuestionChoiceRelationInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentCreateFieldInput>;
  properties?: InputMaybe<TypeformQuestionChoicePropertiesCreateFieldInput>;
};

/** Fields to sort TypeformQuestionChoices by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformQuestionChoiceSort object. */
export type TypeformQuestionChoiceSort = {
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  label?: InputMaybe<SortDirection>;
  ref?: InputMaybe<SortDirection>;
  typeformId?: InputMaybe<SortDirection>;
};

export type TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentAggregationSelection = {
  __typename?: 'TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentNodeAggregateSelection>;
};

export type TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentNodeAggregateSelection = {
  __typename?: 'TypeformQuestionChoiceTypeformQuestionAttachmentAttachmentNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  href: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesAggregationSelection = {
  __typename?: 'TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesNodeAggregateSelection>;
};

export type TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesNodeAggregateSelection = {
  __typename?: 'TypeformQuestionChoiceTypeformQuestionPropertiesPropertiesNodeAggregateSelection';
  dateFormat: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  scaleCenterLabel: StringAggregateSelectionNullable;
  scaleLeftLabel: StringAggregateSelectionNullable;
  scaleRightLabel: StringAggregateSelectionNullable;
  scaleSteps: IntAggregateSelectionNullable;
};

export type TypeformQuestionChoiceUpdateInput = {
  attachment?: InputMaybe<TypeformQuestionChoiceAttachmentUpdateFieldInput>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformQuestionChoiceWhere = {
  AND?: InputMaybe<Array<TypeformQuestionChoiceWhere>>;
  NOT?: InputMaybe<TypeformQuestionChoiceWhere>;
  OR?: InputMaybe<Array<TypeformQuestionChoiceWhere>>;
  attachment?: InputMaybe<TypeformQuestionAttachmentWhere>;
  attachmentAggregate?: InputMaybe<TypeformQuestionChoiceAttachmentAggregateInput>;
  attachmentConnection?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
  attachmentConnection_NOT?: InputMaybe<TypeformQuestionChoiceAttachmentConnectionWhere>;
  attachment_NOT?: InputMaybe<TypeformQuestionAttachmentWhere>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  label_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  label_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<TypeformQuestionPropertiesWhere>;
  propertiesAggregate?: InputMaybe<TypeformQuestionChoicePropertiesAggregateInput>;
  propertiesConnection?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
  propertiesConnection_NOT?: InputMaybe<TypeformQuestionChoicePropertiesConnectionWhere>;
  properties_NOT?: InputMaybe<TypeformQuestionPropertiesWhere>;
  ref?: InputMaybe<Scalars['String']['input']>;
  ref_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  ref_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  ref_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ref_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  typeformId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  typeformId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformQuestionChoicesConnection = {
  __typename?: 'TypeformQuestionChoicesConnection';
  edges: Array<TypeformQuestionChoiceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionConnectInput = {
  answers?: InputMaybe<Array<TypeformQuestionAnswersConnectFieldInput>>;
  attachment?: InputMaybe<TypeformQuestionAttachmentConnectFieldInput>;
  properties?: InputMaybe<TypeformQuestionPropertiesConnectFieldInput>;
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyConnectFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsConnectFieldInput>;
};

export type TypeformQuestionConnectOrCreateInput = {
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyConnectOrCreateFieldInput>;
};

export type TypeformQuestionConnectOrCreateWhere = {
  node: TypeformQuestionUniqueWhere;
};

export type TypeformQuestionConnectWhere = {
  node: TypeformQuestionWhere;
};

export type TypeformQuestionCreateInput = {
  attachment?: InputMaybe<TypeformQuestionAttachmentFieldInput>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<TypeformQuestionPropertiesFieldInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: TypeformQuestionType;
  typeformId: Scalars['ID']['input'];
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsFieldInput>;
};

export type TypeformQuestionDeleteInput = {
  answers?: InputMaybe<Array<TypeformQuestionAnswersDeleteFieldInput>>;
  attachment?: InputMaybe<TypeformQuestionAttachmentDeleteFieldInput>;
  properties?: InputMaybe<TypeformQuestionPropertiesDeleteFieldInput>;
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyDeleteFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsDeleteFieldInput>;
};

export type TypeformQuestionDisconnectInput = {
  answers?: InputMaybe<Array<TypeformQuestionAnswersDisconnectFieldInput>>;
  attachment?: InputMaybe<TypeformQuestionAttachmentDisconnectFieldInput>;
  properties?: InputMaybe<TypeformQuestionPropertiesDisconnectFieldInput>;
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyDisconnectFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsDisconnectFieldInput>;
};

export type TypeformQuestionEdge = {
  __typename?: 'TypeformQuestionEdge';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformQuestionOnCreateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: TypeformQuestionType;
  typeformId: Scalars['ID']['input'];
};

export type TypeformQuestionOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformQuestionSort objects to sort TypeformQuestions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformQuestionSort>>;
};

export type TypeformQuestionProperties = {
  __typename?: 'TypeformQuestionProperties';
  allowMultipleSelection?: Maybe<Scalars['Boolean']['output']>;
  allowOtherChoice?: Maybe<Scalars['Boolean']['output']>;
  choices: Array<TypeformQuestionChoice>;
  choicesAggregate?: Maybe<TypeformQuestionPropertiesTypeformQuestionChoiceChoicesAggregationSelection>;
  choicesConnection: TypeformQuestionPropertiesChoicesConnection;
  dateFormat?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<TypeformQuestion>;
  fieldsAggregate?: Maybe<TypeformQuestionPropertiesTypeformQuestionFieldsAggregationSelection>;
  fieldsConnection: TypeformQuestionPropertiesFieldsConnection;
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  question?: Maybe<TypeformQuestion>;
  questionAggregate?: Maybe<TypeformQuestionPropertiesTypeformQuestionQuestionAggregationSelection>;
  questionConnection: TypeformQuestionPropertiesQuestionConnection;
  scaleCenterLabel?: Maybe<Scalars['String']['output']>;
  scaleLeftLabel?: Maybe<Scalars['String']['output']>;
  scaleRightLabel?: Maybe<Scalars['String']['output']>;
  scaleStartAtOne?: Maybe<Scalars['Boolean']['output']>;
  scaleSteps?: Maybe<Scalars['Int']['output']>;
};


export type TypeformQuestionPropertiesChoicesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionChoiceOptions>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformQuestionPropertiesChoicesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionChoiceWhere>;
};


export type TypeformQuestionPropertiesChoicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectionSort>>;
  where?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
};


export type TypeformQuestionPropertiesFieldsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionPropertiesFieldsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionPropertiesFieldsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectionSort>>;
  where?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
};


export type TypeformQuestionPropertiesQuestionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionPropertiesQuestionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionPropertiesQuestionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionPropertiesQuestionConnectionSort>>;
  where?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
};

export type TypeformQuestionPropertiesAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionPropertiesNodeAggregationWhereInput>;
};

export type TypeformQuestionPropertiesAggregateSelection = {
  __typename?: 'TypeformQuestionPropertiesAggregateSelection';
  count: Scalars['Int']['output'];
  dateFormat: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  scaleCenterLabel: StringAggregateSelectionNullable;
  scaleLeftLabel: StringAggregateSelectionNullable;
  scaleRightLabel: StringAggregateSelectionNullable;
  scaleSteps: IntAggregateSelectionNullable;
};

export type TypeformQuestionPropertiesChoicesAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesChoicesAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesChoicesAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesChoicesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionPropertiesChoicesNodeAggregationWhereInput>;
};

export type TypeformQuestionPropertiesChoicesConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionChoiceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionChoiceConnectWhere>;
};

export type TypeformQuestionPropertiesChoicesConnection = {
  __typename?: 'TypeformQuestionPropertiesChoicesConnection';
  edges: Array<TypeformQuestionPropertiesChoicesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionPropertiesChoicesConnectionSort = {
  node?: InputMaybe<TypeformQuestionChoiceSort>;
};

export type TypeformQuestionPropertiesChoicesConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionChoiceWhere>;
};

export type TypeformQuestionPropertiesChoicesCreateFieldInput = {
  node: TypeformQuestionChoiceCreateInput;
};

export type TypeformQuestionPropertiesChoicesDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionChoiceDeleteInput>;
  where?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
};

export type TypeformQuestionPropertiesChoicesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionChoiceDisconnectInput>;
  where?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
};

export type TypeformQuestionPropertiesChoicesFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformQuestionPropertiesChoicesCreateFieldInput>>;
};

export type TypeformQuestionPropertiesChoicesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesChoicesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesChoicesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesChoicesNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  label_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  label_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  label_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesChoicesRelationship = {
  __typename?: 'TypeformQuestionPropertiesChoicesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionChoice;
};

export type TypeformQuestionPropertiesChoicesUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionChoiceUpdateInput>;
};

export type TypeformQuestionPropertiesChoicesUpdateFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformQuestionPropertiesChoicesCreateFieldInput>>;
  delete?: InputMaybe<Array<TypeformQuestionPropertiesChoicesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypeformQuestionPropertiesChoicesDisconnectFieldInput>>;
  update?: InputMaybe<TypeformQuestionPropertiesChoicesUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
};

export type TypeformQuestionPropertiesConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionPropertiesConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionPropertiesConnectWhere>;
};

export type TypeformQuestionPropertiesConnectInput = {
  choices?: InputMaybe<Array<TypeformQuestionPropertiesChoicesConnectFieldInput>>;
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectFieldInput>>;
  question?: InputMaybe<TypeformQuestionPropertiesQuestionConnectFieldInput>;
};

export type TypeformQuestionPropertiesConnectOrCreateInput = {
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectOrCreateFieldInput>>;
  question?: InputMaybe<TypeformQuestionPropertiesQuestionConnectOrCreateFieldInput>;
};

export type TypeformQuestionPropertiesConnectWhere = {
  node: TypeformQuestionPropertiesWhere;
};

export type TypeformQuestionPropertiesConnection = {
  __typename?: 'TypeformQuestionPropertiesConnection';
  edges: Array<TypeformQuestionPropertiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionPropertiesConnectionSort = {
  node?: InputMaybe<TypeformQuestionPropertiesSort>;
};

export type TypeformQuestionPropertiesConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionPropertiesWhere>;
};

export type TypeformQuestionPropertiesCreateFieldInput = {
  node: TypeformQuestionPropertiesCreateInput;
};

export type TypeformQuestionPropertiesCreateInput = {
  allowMultipleSelection?: InputMaybe<Scalars['Boolean']['input']>;
  allowOtherChoice?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<TypeformQuestionPropertiesChoicesFieldInput>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<TypeformQuestionPropertiesFieldsFieldInput>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel?: InputMaybe<Scalars['String']['input']>;
  scaleStartAtOne?: InputMaybe<Scalars['Boolean']['input']>;
  scaleSteps?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionPropertiesDeleteInput>;
  where?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
};

export type TypeformQuestionPropertiesDeleteInput = {
  choices?: InputMaybe<Array<TypeformQuestionPropertiesChoicesDeleteFieldInput>>;
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsDeleteFieldInput>>;
  question?: InputMaybe<TypeformQuestionPropertiesQuestionDeleteFieldInput>;
};

export type TypeformQuestionPropertiesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionPropertiesDisconnectInput>;
  where?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
};

export type TypeformQuestionPropertiesDisconnectInput = {
  choices?: InputMaybe<Array<TypeformQuestionPropertiesChoicesDisconnectFieldInput>>;
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsDisconnectFieldInput>>;
  question?: InputMaybe<TypeformQuestionPropertiesQuestionDisconnectFieldInput>;
};

export type TypeformQuestionPropertiesEdge = {
  __typename?: 'TypeformQuestionPropertiesEdge';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionProperties;
};

export type TypeformQuestionPropertiesFieldInput = {
  connect?: InputMaybe<TypeformQuestionPropertiesConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionPropertiesCreateFieldInput>;
};

export type TypeformQuestionPropertiesFieldsAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesFieldsAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesFieldsAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesFieldsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionPropertiesFieldsNodeAggregationWhereInput>;
};

export type TypeformQuestionPropertiesFieldsConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformQuestionPropertiesFieldsConnectOrCreateFieldInput = {
  onCreate: TypeformQuestionPropertiesFieldsConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformQuestionPropertiesFieldsConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformQuestionPropertiesFieldsConnection = {
  __typename?: 'TypeformQuestionPropertiesFieldsConnection';
  edges: Array<TypeformQuestionPropertiesFieldsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionPropertiesFieldsConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformQuestionPropertiesFieldsConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformQuestionPropertiesFieldsCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformQuestionPropertiesFieldsDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
};

export type TypeformQuestionPropertiesFieldsDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
};

export type TypeformQuestionPropertiesFieldsFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TypeformQuestionPropertiesFieldsCreateFieldInput>>;
};

export type TypeformQuestionPropertiesFieldsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesFieldsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesFieldsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesFieldsNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesFieldsRelationship = {
  __typename?: 'TypeformQuestionPropertiesFieldsRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformQuestionPropertiesFieldsUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionUpdateInput>;
};

export type TypeformQuestionPropertiesFieldsUpdateFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TypeformQuestionPropertiesFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TypeformQuestionPropertiesFieldsCreateFieldInput>>;
  delete?: InputMaybe<Array<TypeformQuestionPropertiesFieldsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypeformQuestionPropertiesFieldsDisconnectFieldInput>>;
  update?: InputMaybe<TypeformQuestionPropertiesFieldsUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
};

export type TypeformQuestionPropertiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesNodeAggregationWhereInput>>;
  dateFormat_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateFormat_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateFormat_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleLeftLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleRightLabel_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleRightLabel_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  scaleSteps_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformQuestionPropertiesSort objects to sort TypeformQuestionProperties by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformQuestionPropertiesSort>>;
};

export type TypeformQuestionPropertiesQuestionAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesQuestionAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesQuestionAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesQuestionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionPropertiesQuestionNodeAggregationWhereInput>;
};

export type TypeformQuestionPropertiesQuestionConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformQuestionPropertiesQuestionConnectOrCreateFieldInput = {
  onCreate: TypeformQuestionPropertiesQuestionConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformQuestionPropertiesQuestionConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformQuestionPropertiesQuestionConnection = {
  __typename?: 'TypeformQuestionPropertiesQuestionConnection';
  edges: Array<TypeformQuestionPropertiesQuestionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionPropertiesQuestionConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformQuestionPropertiesQuestionConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesQuestionConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesQuestionConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformQuestionPropertiesQuestionCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformQuestionPropertiesQuestionDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
};

export type TypeformQuestionPropertiesQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
};

export type TypeformQuestionPropertiesQuestionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesQuestionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesQuestionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesQuestionNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesQuestionRelationship = {
  __typename?: 'TypeformQuestionPropertiesQuestionRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformQuestionPropertiesRelationInput = {
  choices?: InputMaybe<Array<TypeformQuestionPropertiesChoicesCreateFieldInput>>;
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsCreateFieldInput>>;
  question?: InputMaybe<TypeformQuestionPropertiesQuestionCreateFieldInput>;
};

export type TypeformQuestionPropertiesRelationship = {
  __typename?: 'TypeformQuestionPropertiesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionProperties;
};

/** Fields to sort TypeformQuestionProperties by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformQuestionPropertiesSort object. */
export type TypeformQuestionPropertiesSort = {
  allowMultipleSelection?: InputMaybe<SortDirection>;
  allowOtherChoice?: InputMaybe<SortDirection>;
  dateFormat?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  scaleCenterLabel?: InputMaybe<SortDirection>;
  scaleLeftLabel?: InputMaybe<SortDirection>;
  scaleRightLabel?: InputMaybe<SortDirection>;
  scaleStartAtOne?: InputMaybe<SortDirection>;
  scaleSteps?: InputMaybe<SortDirection>;
};

export type TypeformQuestionPropertiesTypeformQuestionChoiceChoicesAggregationSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionChoiceChoicesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionPropertiesTypeformQuestionChoiceChoicesNodeAggregateSelection>;
};

export type TypeformQuestionPropertiesTypeformQuestionChoiceChoicesNodeAggregateSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionChoiceChoicesNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNullable;
  ref: StringAggregateSelectionNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionPropertiesTypeformQuestionFieldsAggregationSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionFieldsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionPropertiesTypeformQuestionFieldsNodeAggregateSelection>;
};

export type TypeformQuestionPropertiesTypeformQuestionFieldsNodeAggregateSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionFieldsNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionPropertiesTypeformQuestionQuestionAggregationSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionQuestionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionPropertiesTypeformQuestionQuestionNodeAggregateSelection>;
};

export type TypeformQuestionPropertiesTypeformQuestionQuestionNodeAggregateSelection = {
  __typename?: 'TypeformQuestionPropertiesTypeformQuestionQuestionNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionPropertiesUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionPropertiesUpdateInput>;
};

export type TypeformQuestionPropertiesUpdateFieldInput = {
  connect?: InputMaybe<TypeformQuestionPropertiesConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionPropertiesCreateFieldInput>;
  delete?: InputMaybe<TypeformQuestionPropertiesDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformQuestionPropertiesDisconnectFieldInput>;
  update?: InputMaybe<TypeformQuestionPropertiesUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
};

export type TypeformQuestionPropertiesUpdateInput = {
  allowMultipleSelection?: InputMaybe<Scalars['Boolean']['input']>;
  allowOtherChoice?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<Array<TypeformQuestionPropertiesChoicesUpdateFieldInput>>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TypeformQuestionPropertiesFieldsUpdateFieldInput>>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  scaleCenterLabel?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel?: InputMaybe<Scalars['String']['input']>;
  scaleStartAtOne?: InputMaybe<Scalars['Boolean']['input']>;
  scaleSteps?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionPropertiesWhere = {
  AND?: InputMaybe<Array<TypeformQuestionPropertiesWhere>>;
  NOT?: InputMaybe<TypeformQuestionPropertiesWhere>;
  OR?: InputMaybe<Array<TypeformQuestionPropertiesWhere>>;
  allowMultipleSelection?: InputMaybe<Scalars['Boolean']['input']>;
  allowOtherChoice?: InputMaybe<Scalars['Boolean']['input']>;
  choicesAggregate?: InputMaybe<TypeformQuestionPropertiesChoicesAggregateInput>;
  /** Return TypeformQuestionProperties where all of the related TypeformQuestionPropertiesChoicesConnections match this filter */
  choicesConnection_ALL?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
  /** Return TypeformQuestionProperties where none of the related TypeformQuestionPropertiesChoicesConnections match this filter */
  choicesConnection_NONE?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
  /** Return TypeformQuestionProperties where one of the related TypeformQuestionPropertiesChoicesConnections match this filter */
  choicesConnection_SINGLE?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
  /** Return TypeformQuestionProperties where some of the related TypeformQuestionPropertiesChoicesConnections match this filter */
  choicesConnection_SOME?: InputMaybe<TypeformQuestionPropertiesChoicesConnectionWhere>;
  /** Return TypeformQuestionProperties where all of the related TypeformQuestionChoices match this filter */
  choices_ALL?: InputMaybe<TypeformQuestionChoiceWhere>;
  /** Return TypeformQuestionProperties where none of the related TypeformQuestionChoices match this filter */
  choices_NONE?: InputMaybe<TypeformQuestionChoiceWhere>;
  /** Return TypeformQuestionProperties where one of the related TypeformQuestionChoices match this filter */
  choices_SINGLE?: InputMaybe<TypeformQuestionChoiceWhere>;
  /** Return TypeformQuestionProperties where some of the related TypeformQuestionChoices match this filter */
  choices_SOME?: InputMaybe<TypeformQuestionChoiceWhere>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  dateFormat_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dateFormat_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dateFormat_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateFormat_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  fieldsAggregate?: InputMaybe<TypeformQuestionPropertiesFieldsAggregateInput>;
  /** Return TypeformQuestionProperties where all of the related TypeformQuestionPropertiesFieldsConnections match this filter */
  fieldsConnection_ALL?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
  /** Return TypeformQuestionProperties where none of the related TypeformQuestionPropertiesFieldsConnections match this filter */
  fieldsConnection_NONE?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
  /** Return TypeformQuestionProperties where one of the related TypeformQuestionPropertiesFieldsConnections match this filter */
  fieldsConnection_SINGLE?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
  /** Return TypeformQuestionProperties where some of the related TypeformQuestionPropertiesFieldsConnections match this filter */
  fieldsConnection_SOME?: InputMaybe<TypeformQuestionPropertiesFieldsConnectionWhere>;
  /** Return TypeformQuestionProperties where all of the related TypeformQuestions match this filter */
  fields_ALL?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformQuestionProperties where none of the related TypeformQuestions match this filter */
  fields_NONE?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformQuestionProperties where one of the related TypeformQuestions match this filter */
  fields_SINGLE?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformQuestionProperties where some of the related TypeformQuestions match this filter */
  fields_SOME?: InputMaybe<TypeformQuestionWhere>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<TypeformQuestionWhere>;
  questionAggregate?: InputMaybe<TypeformQuestionPropertiesQuestionAggregateInput>;
  questionConnection?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
  questionConnection_NOT?: InputMaybe<TypeformQuestionPropertiesQuestionConnectionWhere>;
  question_NOT?: InputMaybe<TypeformQuestionWhere>;
  scaleCenterLabel?: InputMaybe<Scalars['String']['input']>;
  scaleCenterLabel_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  scaleCenterLabel_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleCenterLabel_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scaleCenterLabel_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleLeftLabel_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scaleLeftLabel_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleRightLabel_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scaleRightLabel_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  scaleStartAtOne?: InputMaybe<Scalars['Boolean']['input']>;
  scaleSteps?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_GT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_GTE?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scaleSteps_LT?: InputMaybe<Scalars['Int']['input']>;
  scaleSteps_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionRelationInput = {
  answers?: InputMaybe<Array<TypeformQuestionAnswersCreateFieldInput>>;
  attachment?: InputMaybe<TypeformQuestionAttachmentCreateFieldInput>;
  properties?: InputMaybe<TypeformQuestionPropertiesCreateFieldInput>;
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyCreateFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsCreateFieldInput>;
};

/** Fields to sort TypeformQuestions by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformQuestionSort object. */
export type TypeformQuestionSort = {
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  ref?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  typeformId?: InputMaybe<SortDirection>;
};

export enum TypeformQuestionType {
  Address = 'address',
  Calendly = 'calendly',
  ContactInfo = 'contact_info',
  Date = 'date',
  Dropdown = 'dropdown',
  Email = 'email',
  FileUpload = 'file_upload',
  Group = 'group',
  Legal = 'legal',
  LongText = 'long_text',
  Matrix = 'matrix',
  MultipleChoice = 'multiple_choice',
  Nps = 'nps',
  Number = 'number',
  OpinionScale = 'opinion_scale',
  Payment = 'payment',
  PhoneNumber = 'phone_number',
  PictureChoice = 'picture_choice',
  Ranking = 'ranking',
  Rating = 'rating',
  ShortText = 'short_text',
  Statement = 'statement',
  Website = 'website',
  YesNo = 'yes_no'
}

export type TypeformQuestionTypeformAnswerAnswersAggregationSelection = {
  __typename?: 'TypeformQuestionTypeformAnswerAnswersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionTypeformAnswerAnswersNodeAggregateSelection>;
};

export type TypeformQuestionTypeformAnswerAnswersNodeAggregateSelection = {
  __typename?: 'TypeformQuestionTypeformAnswerAnswersNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  fileUrl: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: StringAggregateSelectionNullable;
  text: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNullable;
};

export type TypeformQuestionTypeformQuestionAttachmentAttachmentAggregationSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionAttachmentAttachmentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionTypeformQuestionAttachmentAttachmentNodeAggregateSelection>;
};

export type TypeformQuestionTypeformQuestionAttachmentAttachmentNodeAggregateSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionAttachmentAttachmentNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  href: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionTypeformQuestionPropertiesPropertiesAggregationSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionPropertiesPropertiesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionTypeformQuestionPropertiesPropertiesNodeAggregateSelection>;
};

export type TypeformQuestionTypeformQuestionPropertiesPropertiesNodeAggregateSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionPropertiesPropertiesNodeAggregateSelection';
  dateFormat: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  scaleCenterLabel: StringAggregateSelectionNullable;
  scaleLeftLabel: StringAggregateSelectionNullable;
  scaleRightLabel: StringAggregateSelectionNullable;
  scaleSteps: IntAggregateSelectionNullable;
};

export type TypeformQuestionTypeformQuestionValidationsValidationsAggregationSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionValidationsValidationsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionTypeformQuestionValidationsValidationsNodeAggregateSelection>;
};

export type TypeformQuestionTypeformQuestionValidationsValidationsNodeAggregateSelection = {
  __typename?: 'TypeformQuestionTypeformQuestionValidationsValidationsNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  maxLength: IntAggregateSelectionNullable;
  maxValue: IntAggregateSelectionNullable;
  minValue: IntAggregateSelectionNullable;
};

export type TypeformQuestionTypeformSurveyAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionTypeformSurveyAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionTypeformSurveyAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionTypeformSurveyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionTypeformSurveyNodeAggregationWhereInput>;
};

export type TypeformQuestionTypeformSurveyConnectFieldInput = {
  connect?: InputMaybe<TypeformSurveyConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformSurveyConnectWhere>;
};

export type TypeformQuestionTypeformSurveyConnectOrCreateFieldInput = {
  onCreate: TypeformQuestionTypeformSurveyConnectOrCreateFieldInputOnCreate;
  where: TypeformSurveyConnectOrCreateWhere;
};

export type TypeformQuestionTypeformSurveyConnectOrCreateFieldInputOnCreate = {
  node: TypeformSurveyOnCreateInput;
};

export type TypeformQuestionTypeformSurveyConnection = {
  __typename?: 'TypeformQuestionTypeformSurveyConnection';
  edges: Array<TypeformQuestionTypeformSurveyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionTypeformSurveyConnectionSort = {
  node?: InputMaybe<TypeformSurveySort>;
};

export type TypeformQuestionTypeformSurveyConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionTypeformSurveyConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionTypeformSurveyConnectionWhere>>;
  node?: InputMaybe<TypeformSurveyWhere>;
};

export type TypeformQuestionTypeformSurveyCreateFieldInput = {
  node: TypeformSurveyCreateInput;
};

export type TypeformQuestionTypeformSurveyDeleteFieldInput = {
  delete?: InputMaybe<TypeformSurveyDeleteInput>;
  where?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
};

export type TypeformQuestionTypeformSurveyDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformSurveyDisconnectInput>;
  where?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
};

export type TypeformQuestionTypeformSurveyFieldInput = {
  connect?: InputMaybe<TypeformQuestionTypeformSurveyConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionTypeformSurveyConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformQuestionTypeformSurveyCreateFieldInput>;
};

export type TypeformQuestionTypeformSurveyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionTypeformSurveyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionTypeformSurveyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionTypeformSurveyNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionTypeformSurveyRelationship = {
  __typename?: 'TypeformQuestionTypeformSurveyRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformSurvey;
};

export type TypeformQuestionTypeformSurveyTypeformSurveyAggregationSelection = {
  __typename?: 'TypeformQuestionTypeformSurveyTypeformSurveyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionTypeformSurveyTypeformSurveyNodeAggregateSelection>;
};

export type TypeformQuestionTypeformSurveyTypeformSurveyNodeAggregateSelection = {
  __typename?: 'TypeformQuestionTypeformSurveyTypeformSurveyNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  modifiedAt: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionTypeformSurveyUpdateConnectionInput = {
  node?: InputMaybe<TypeformSurveyUpdateInput>;
};

export type TypeformQuestionTypeformSurveyUpdateFieldInput = {
  connect?: InputMaybe<TypeformQuestionTypeformSurveyConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformQuestionTypeformSurveyConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformQuestionTypeformSurveyCreateFieldInput>;
  delete?: InputMaybe<TypeformQuestionTypeformSurveyDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformQuestionTypeformSurveyDisconnectFieldInput>;
  update?: InputMaybe<TypeformQuestionTypeformSurveyUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
};

export type TypeformQuestionUniqueWhere = {
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformQuestionUpdateInput = {
  attachment?: InputMaybe<TypeformQuestionAttachmentUpdateFieldInput>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<TypeformQuestionPropertiesUpdateFieldInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeformQuestionType>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformSurvey?: InputMaybe<TypeformQuestionTypeformSurveyUpdateFieldInput>;
  validations?: InputMaybe<TypeformQuestionValidationsUpdateFieldInput>;
};

export type TypeformQuestionValidations = {
  __typename?: 'TypeformQuestionValidations';
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxLength?: Maybe<Scalars['Int']['output']>;
  maxValue?: Maybe<Scalars['Int']['output']>;
  minValue?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<TypeformQuestion>;
  questionAggregate?: Maybe<TypeformQuestionValidationsTypeformQuestionQuestionAggregationSelection>;
  questionConnection: TypeformQuestionValidationsQuestionConnection;
  required?: Maybe<Scalars['Boolean']['output']>;
};


export type TypeformQuestionValidationsQuestionArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionValidationsQuestionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformQuestionValidationsQuestionConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformQuestionValidationsQuestionConnectionSort>>;
  where?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
};

export type TypeformQuestionValidationsAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionValidationsAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionValidationsNodeAggregationWhereInput>;
};

export type TypeformQuestionValidationsAggregateSelection = {
  __typename?: 'TypeformQuestionValidationsAggregateSelection';
  count: Scalars['Int']['output'];
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  maxLength: IntAggregateSelectionNullable;
  maxValue: IntAggregateSelectionNullable;
  minValue: IntAggregateSelectionNullable;
};

export type TypeformQuestionValidationsConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionValidationsConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionValidationsConnectWhere>;
};

export type TypeformQuestionValidationsConnectInput = {
  question?: InputMaybe<TypeformQuestionValidationsQuestionConnectFieldInput>;
};

export type TypeformQuestionValidationsConnectOrCreateInput = {
  question?: InputMaybe<TypeformQuestionValidationsQuestionConnectOrCreateFieldInput>;
};

export type TypeformQuestionValidationsConnectWhere = {
  node: TypeformQuestionValidationsWhere;
};

export type TypeformQuestionValidationsConnection = {
  __typename?: 'TypeformQuestionValidationsConnection';
  edges: Array<TypeformQuestionValidationsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionValidationsConnectionSort = {
  node?: InputMaybe<TypeformQuestionValidationsSort>;
};

export type TypeformQuestionValidationsConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionValidationsWhere>;
};

export type TypeformQuestionValidationsCreateFieldInput = {
  node: TypeformQuestionValidationsCreateInput;
};

export type TypeformQuestionValidationsCreateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Int']['input']>;
  minValue?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TypeformQuestionValidationsDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionValidationsDeleteInput>;
  where?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
};

export type TypeformQuestionValidationsDeleteInput = {
  question?: InputMaybe<TypeformQuestionValidationsQuestionDeleteFieldInput>;
};

export type TypeformQuestionValidationsDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionValidationsDisconnectInput>;
  where?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
};

export type TypeformQuestionValidationsDisconnectInput = {
  question?: InputMaybe<TypeformQuestionValidationsQuestionDisconnectFieldInput>;
};

export type TypeformQuestionValidationsEdge = {
  __typename?: 'TypeformQuestionValidationsEdge';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionValidations;
};

export type TypeformQuestionValidationsFieldInput = {
  connect?: InputMaybe<TypeformQuestionValidationsConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionValidationsCreateFieldInput>;
};

export type TypeformQuestionValidationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionValidationsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  maxLength_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  maxLength_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  maxLength_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  maxLength_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  maxLength_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxLength_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  maxValue_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  maxValue_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  maxValue_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  maxValue_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  maxValue_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  maxValue_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  minValue_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  minValue_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  minValue_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  minValue_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  minValue_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  minValue_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  minValue_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  minValue_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  minValue_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  minValue_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  minValue_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  minValue_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  minValue_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  minValue_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionValidationsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformQuestionValidationsSort objects to sort TypeformQuestionValidations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformQuestionValidationsSort>>;
};

export type TypeformQuestionValidationsQuestionAggregateInput = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsQuestionAggregateInput>>;
  NOT?: InputMaybe<TypeformQuestionValidationsQuestionAggregateInput>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsQuestionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformQuestionValidationsQuestionNodeAggregationWhereInput>;
};

export type TypeformQuestionValidationsQuestionConnectFieldInput = {
  connect?: InputMaybe<TypeformQuestionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformQuestionValidationsQuestionConnectOrCreateFieldInput = {
  onCreate: TypeformQuestionValidationsQuestionConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformQuestionValidationsQuestionConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformQuestionValidationsQuestionConnection = {
  __typename?: 'TypeformQuestionValidationsQuestionConnection';
  edges: Array<TypeformQuestionValidationsQuestionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformQuestionValidationsQuestionConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformQuestionValidationsQuestionConnectionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsQuestionConnectionWhere>>;
  NOT?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsQuestionConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformQuestionValidationsQuestionCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformQuestionValidationsQuestionDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
};

export type TypeformQuestionValidationsQuestionDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
};

export type TypeformQuestionValidationsQuestionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsQuestionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformQuestionValidationsQuestionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsQuestionNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformQuestionValidationsQuestionRelationship = {
  __typename?: 'TypeformQuestionValidationsQuestionRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformQuestionValidationsRelationInput = {
  question?: InputMaybe<TypeformQuestionValidationsQuestionCreateFieldInput>;
};

export type TypeformQuestionValidationsRelationship = {
  __typename?: 'TypeformQuestionValidationsRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestionValidations;
};

/** Fields to sort TypeformQuestionValidations by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformQuestionValidationsSort object. */
export type TypeformQuestionValidationsSort = {
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  maxLength?: InputMaybe<SortDirection>;
  maxValue?: InputMaybe<SortDirection>;
  minValue?: InputMaybe<SortDirection>;
  required?: InputMaybe<SortDirection>;
};

export type TypeformQuestionValidationsTypeformQuestionQuestionAggregationSelection = {
  __typename?: 'TypeformQuestionValidationsTypeformQuestionQuestionAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformQuestionValidationsTypeformQuestionQuestionNodeAggregateSelection>;
};

export type TypeformQuestionValidationsTypeformQuestionQuestionNodeAggregateSelection = {
  __typename?: 'TypeformQuestionValidationsTypeformQuestionQuestionNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformQuestionValidationsUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionValidationsUpdateInput>;
};

export type TypeformQuestionValidationsUpdateFieldInput = {
  connect?: InputMaybe<TypeformQuestionValidationsConnectFieldInput>;
  create?: InputMaybe<TypeformQuestionValidationsCreateFieldInput>;
  delete?: InputMaybe<TypeformQuestionValidationsDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformQuestionValidationsDisconnectFieldInput>;
  update?: InputMaybe<TypeformQuestionValidationsUpdateConnectionInput>;
  where?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
};

export type TypeformQuestionValidationsUpdateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  maxLength_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Int']['input']>;
  maxValue_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  minValue?: InputMaybe<Scalars['Int']['input']>;
  minValue_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  minValue_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TypeformQuestionValidationsWhere = {
  AND?: InputMaybe<Array<TypeformQuestionValidationsWhere>>;
  NOT?: InputMaybe<TypeformQuestionValidationsWhere>;
  OR?: InputMaybe<Array<TypeformQuestionValidationsWhere>>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  maxLength_GT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxLength_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  maxLength_LT?: InputMaybe<Scalars['Int']['input']>;
  maxLength_LTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Int']['input']>;
  maxValue_GT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_GTE?: InputMaybe<Scalars['Int']['input']>;
  maxValue_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  maxValue_LT?: InputMaybe<Scalars['Int']['input']>;
  maxValue_LTE?: InputMaybe<Scalars['Int']['input']>;
  minValue?: InputMaybe<Scalars['Int']['input']>;
  minValue_GT?: InputMaybe<Scalars['Int']['input']>;
  minValue_GTE?: InputMaybe<Scalars['Int']['input']>;
  minValue_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  minValue_LT?: InputMaybe<Scalars['Int']['input']>;
  minValue_LTE?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<TypeformQuestionWhere>;
  questionAggregate?: InputMaybe<TypeformQuestionValidationsQuestionAggregateInput>;
  questionConnection?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
  questionConnection_NOT?: InputMaybe<TypeformQuestionValidationsQuestionConnectionWhere>;
  question_NOT?: InputMaybe<TypeformQuestionWhere>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TypeformQuestionWhere = {
  AND?: InputMaybe<Array<TypeformQuestionWhere>>;
  NOT?: InputMaybe<TypeformQuestionWhere>;
  OR?: InputMaybe<Array<TypeformQuestionWhere>>;
  answersAggregate?: InputMaybe<TypeformQuestionAnswersAggregateInput>;
  /** Return TypeformQuestions where all of the related TypeformQuestionAnswersConnections match this filter */
  answersConnection_ALL?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
  /** Return TypeformQuestions where none of the related TypeformQuestionAnswersConnections match this filter */
  answersConnection_NONE?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
  /** Return TypeformQuestions where one of the related TypeformQuestionAnswersConnections match this filter */
  answersConnection_SINGLE?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
  /** Return TypeformQuestions where some of the related TypeformQuestionAnswersConnections match this filter */
  answersConnection_SOME?: InputMaybe<TypeformQuestionAnswersConnectionWhere>;
  /** Return TypeformQuestions where all of the related TypeformAnswers match this filter */
  answers_ALL?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformQuestions where none of the related TypeformAnswers match this filter */
  answers_NONE?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformQuestions where one of the related TypeformAnswers match this filter */
  answers_SINGLE?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformQuestions where some of the related TypeformAnswers match this filter */
  answers_SOME?: InputMaybe<TypeformAnswerWhere>;
  attachment?: InputMaybe<TypeformQuestionAttachmentWhere>;
  attachmentAggregate?: InputMaybe<TypeformQuestionAttachmentAggregateInput>;
  attachmentConnection?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
  attachmentConnection_NOT?: InputMaybe<TypeformQuestionAttachmentConnectionWhere>;
  attachment_NOT?: InputMaybe<TypeformQuestionAttachmentWhere>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  properties?: InputMaybe<TypeformQuestionPropertiesWhere>;
  propertiesAggregate?: InputMaybe<TypeformQuestionPropertiesAggregateInput>;
  propertiesConnection?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
  propertiesConnection_NOT?: InputMaybe<TypeformQuestionPropertiesConnectionWhere>;
  properties_NOT?: InputMaybe<TypeformQuestionPropertiesWhere>;
  ref?: InputMaybe<Scalars['String']['input']>;
  ref_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  ref_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  ref_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ref_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeformQuestionType>;
  type_IN?: InputMaybe<Array<TypeformQuestionType>>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  typeformId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  typeformId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformSurvey?: InputMaybe<TypeformSurveyWhere>;
  typeformSurveyAggregate?: InputMaybe<TypeformQuestionTypeformSurveyAggregateInput>;
  typeformSurveyConnection?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
  typeformSurveyConnection_NOT?: InputMaybe<TypeformQuestionTypeformSurveyConnectionWhere>;
  typeformSurvey_NOT?: InputMaybe<TypeformSurveyWhere>;
  validations?: InputMaybe<TypeformQuestionValidationsWhere>;
  validationsAggregate?: InputMaybe<TypeformQuestionValidationsAggregateInput>;
  validationsConnection?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
  validationsConnection_NOT?: InputMaybe<TypeformQuestionValidationsConnectionWhere>;
  validations_NOT?: InputMaybe<TypeformQuestionValidationsWhere>;
};

export type TypeformQuestionsConnection = {
  __typename?: 'TypeformQuestionsConnection';
  edges: Array<TypeformQuestionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformResponse = {
  __typename?: 'TypeformResponse';
  answers: Array<TypeformAnswer>;
  answersAggregate?: Maybe<TypeformResponseTypeformAnswerAnswersAggregationSelection>;
  answersConnection: TypeformResponseAnswersConnection;
  formmodifiedAt?: Maybe<Scalars['String']['output']>;
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  landedAt: Scalars['DateTime']['output'];
  submittedAt: Scalars['DateTime']['output'];
  survey: TypeformSurvey;
  surveyAggregate?: Maybe<TypeformResponseTypeformSurveySurveyAggregationSelection>;
  surveyConnection: TypeformResponseSurveyConnection;
  typeformId: Scalars['ID']['output'];
  user: User;
  userAggregate?: Maybe<TypeformResponseUserUserAggregationSelection>;
  userConnection: TypeformResponseUserConnection;
};


export type TypeformResponseAnswersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformAnswerOptions>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformResponseAnswersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformAnswerWhere>;
};


export type TypeformResponseAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformResponseAnswersConnectionSort>>;
  where?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
};


export type TypeformResponseSurveyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformSurveyOptions>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type TypeformResponseSurveyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformSurveyWhere>;
};


export type TypeformResponseSurveyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformResponseSurveyConnectionSort>>;
  where?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
};


export type TypeformResponseUserArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type TypeformResponseUserAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type TypeformResponseUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformResponseUserConnectionSort>>;
  where?: InputMaybe<TypeformResponseUserConnectionWhere>;
};

export type TypeformResponseAggregateSelection = {
  __typename?: 'TypeformResponseAggregateSelection';
  count: Scalars['Int']['output'];
  formmodifiedAt: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  landedAt: DateTimeAggregateSelectionNonNullable;
  submittedAt: DateTimeAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformResponseAnswersAggregateInput = {
  AND?: InputMaybe<Array<TypeformResponseAnswersAggregateInput>>;
  NOT?: InputMaybe<TypeformResponseAnswersAggregateInput>;
  OR?: InputMaybe<Array<TypeformResponseAnswersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformResponseAnswersNodeAggregationWhereInput>;
};

export type TypeformResponseAnswersConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformAnswerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformAnswerConnectWhere>;
};

export type TypeformResponseAnswersConnection = {
  __typename?: 'TypeformResponseAnswersConnection';
  edges: Array<TypeformResponseAnswersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformResponseAnswersConnectionSort = {
  node?: InputMaybe<TypeformAnswerSort>;
};

export type TypeformResponseAnswersConnectionWhere = {
  AND?: InputMaybe<Array<TypeformResponseAnswersConnectionWhere>>;
  NOT?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
  OR?: InputMaybe<Array<TypeformResponseAnswersConnectionWhere>>;
  node?: InputMaybe<TypeformAnswerWhere>;
};

export type TypeformResponseAnswersCreateFieldInput = {
  node: TypeformAnswerCreateInput;
};

export type TypeformResponseAnswersDeleteFieldInput = {
  delete?: InputMaybe<TypeformAnswerDeleteInput>;
  where?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
};

export type TypeformResponseAnswersDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformAnswerDisconnectInput>;
  where?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
};

export type TypeformResponseAnswersFieldInput = {
  connect?: InputMaybe<Array<TypeformResponseAnswersConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformResponseAnswersCreateFieldInput>>;
};

export type TypeformResponseAnswersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformResponseAnswersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformResponseAnswersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformResponseAnswersNodeAggregationWhereInput>>;
  date_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  date_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fileUrl_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fileUrl_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  number_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  number_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  number_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  text_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  text_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  text_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformResponseAnswersRelationship = {
  __typename?: 'TypeformResponseAnswersRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformAnswer;
};

export type TypeformResponseAnswersUpdateConnectionInput = {
  node?: InputMaybe<TypeformAnswerUpdateInput>;
};

export type TypeformResponseAnswersUpdateFieldInput = {
  connect?: InputMaybe<Array<TypeformResponseAnswersConnectFieldInput>>;
  create?: InputMaybe<Array<TypeformResponseAnswersCreateFieldInput>>;
  delete?: InputMaybe<Array<TypeformResponseAnswersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypeformResponseAnswersDisconnectFieldInput>>;
  update?: InputMaybe<TypeformResponseAnswersUpdateConnectionInput>;
  where?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
};

export type TypeformResponseConnectInput = {
  answers?: InputMaybe<Array<TypeformResponseAnswersConnectFieldInput>>;
  survey?: InputMaybe<TypeformResponseSurveyConnectFieldInput>;
  user?: InputMaybe<TypeformResponseUserConnectFieldInput>;
};

export type TypeformResponseConnectOrCreateInput = {
  survey?: InputMaybe<TypeformResponseSurveyConnectOrCreateFieldInput>;
  user?: InputMaybe<TypeformResponseUserConnectOrCreateFieldInput>;
};

export type TypeformResponseConnectOrCreateWhere = {
  node: TypeformResponseUniqueWhere;
};

export type TypeformResponseConnectWhere = {
  node: TypeformResponseWhere;
};

export type TypeformResponseCreateInput = {
  answers?: InputMaybe<TypeformResponseAnswersFieldInput>;
  formmodifiedAt?: InputMaybe<Scalars['String']['input']>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  landedAt: Scalars['DateTime']['input'];
  submittedAt: Scalars['DateTime']['input'];
  survey?: InputMaybe<TypeformResponseSurveyFieldInput>;
  typeformId: Scalars['ID']['input'];
  user?: InputMaybe<TypeformResponseUserFieldInput>;
};

export type TypeformResponseDeleteInput = {
  answers?: InputMaybe<Array<TypeformResponseAnswersDeleteFieldInput>>;
  survey?: InputMaybe<TypeformResponseSurveyDeleteFieldInput>;
  user?: InputMaybe<TypeformResponseUserDeleteFieldInput>;
};

export type TypeformResponseDisconnectInput = {
  answers?: InputMaybe<Array<TypeformResponseAnswersDisconnectFieldInput>>;
  survey?: InputMaybe<TypeformResponseSurveyDisconnectFieldInput>;
  user?: InputMaybe<TypeformResponseUserDisconnectFieldInput>;
};

export type TypeformResponseEdge = {
  __typename?: 'TypeformResponseEdge';
  cursor: Scalars['String']['output'];
  node: TypeformResponse;
};

export type TypeformResponseOnCreateInput = {
  formmodifiedAt?: InputMaybe<Scalars['String']['input']>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  landedAt: Scalars['DateTime']['input'];
  submittedAt: Scalars['DateTime']['input'];
  typeformId: Scalars['ID']['input'];
};

export type TypeformResponseOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformResponseSort objects to sort TypeformResponses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformResponseSort>>;
};

export type TypeformResponseRelationInput = {
  answers?: InputMaybe<Array<TypeformResponseAnswersCreateFieldInput>>;
  survey?: InputMaybe<TypeformResponseSurveyCreateFieldInput>;
  user?: InputMaybe<TypeformResponseUserCreateFieldInput>;
};

/** Fields to sort TypeformResponses by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformResponseSort object. */
export type TypeformResponseSort = {
  formmodifiedAt?: InputMaybe<SortDirection>;
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  landedAt?: InputMaybe<SortDirection>;
  submittedAt?: InputMaybe<SortDirection>;
  typeformId?: InputMaybe<SortDirection>;
};

export type TypeformResponseSurveyAggregateInput = {
  AND?: InputMaybe<Array<TypeformResponseSurveyAggregateInput>>;
  NOT?: InputMaybe<TypeformResponseSurveyAggregateInput>;
  OR?: InputMaybe<Array<TypeformResponseSurveyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformResponseSurveyNodeAggregationWhereInput>;
};

export type TypeformResponseSurveyConnectFieldInput = {
  connect?: InputMaybe<TypeformSurveyConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformSurveyConnectWhere>;
};

export type TypeformResponseSurveyConnectOrCreateFieldInput = {
  onCreate: TypeformResponseSurveyConnectOrCreateFieldInputOnCreate;
  where: TypeformSurveyConnectOrCreateWhere;
};

export type TypeformResponseSurveyConnectOrCreateFieldInputOnCreate = {
  node: TypeformSurveyOnCreateInput;
};

export type TypeformResponseSurveyConnection = {
  __typename?: 'TypeformResponseSurveyConnection';
  edges: Array<TypeformResponseSurveyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformResponseSurveyConnectionSort = {
  node?: InputMaybe<TypeformSurveySort>;
};

export type TypeformResponseSurveyConnectionWhere = {
  AND?: InputMaybe<Array<TypeformResponseSurveyConnectionWhere>>;
  NOT?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
  OR?: InputMaybe<Array<TypeformResponseSurveyConnectionWhere>>;
  node?: InputMaybe<TypeformSurveyWhere>;
};

export type TypeformResponseSurveyCreateFieldInput = {
  node: TypeformSurveyCreateInput;
};

export type TypeformResponseSurveyDeleteFieldInput = {
  delete?: InputMaybe<TypeformSurveyDeleteInput>;
  where?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
};

export type TypeformResponseSurveyDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformSurveyDisconnectInput>;
  where?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
};

export type TypeformResponseSurveyFieldInput = {
  connect?: InputMaybe<TypeformResponseSurveyConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformResponseSurveyConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformResponseSurveyCreateFieldInput>;
};

export type TypeformResponseSurveyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformResponseSurveyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformResponseSurveyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformResponseSurveyNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  modifiedAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformResponseSurveyRelationship = {
  __typename?: 'TypeformResponseSurveyRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformSurvey;
};

export type TypeformResponseSurveyUpdateConnectionInput = {
  node?: InputMaybe<TypeformSurveyUpdateInput>;
};

export type TypeformResponseSurveyUpdateFieldInput = {
  connect?: InputMaybe<TypeformResponseSurveyConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformResponseSurveyConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformResponseSurveyCreateFieldInput>;
  delete?: InputMaybe<TypeformResponseSurveyDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformResponseSurveyDisconnectFieldInput>;
  update?: InputMaybe<TypeformResponseSurveyUpdateConnectionInput>;
  where?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
};

export type TypeformResponseTypeformAnswerAnswersAggregationSelection = {
  __typename?: 'TypeformResponseTypeformAnswerAnswersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformResponseTypeformAnswerAnswersNodeAggregateSelection>;
};

export type TypeformResponseTypeformAnswerAnswersNodeAggregateSelection = {
  __typename?: 'TypeformResponseTypeformAnswerAnswersNodeAggregateSelection';
  date: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
  fileUrl: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  number: StringAggregateSelectionNullable;
  text: StringAggregateSelectionNullable;
  url: StringAggregateSelectionNullable;
};

export type TypeformResponseTypeformSurveySurveyAggregationSelection = {
  __typename?: 'TypeformResponseTypeformSurveySurveyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformResponseTypeformSurveySurveyNodeAggregateSelection>;
};

export type TypeformResponseTypeformSurveySurveyNodeAggregateSelection = {
  __typename?: 'TypeformResponseTypeformSurveySurveyNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  modifiedAt: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformResponseUniqueWhere = {
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformResponseUpdateInput = {
  answers?: InputMaybe<Array<TypeformResponseAnswersUpdateFieldInput>>;
  formmodifiedAt?: InputMaybe<Scalars['String']['input']>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  landedAt?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt?: InputMaybe<Scalars['DateTime']['input']>;
  survey?: InputMaybe<TypeformResponseSurveyUpdateFieldInput>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<TypeformResponseUserUpdateFieldInput>;
};

export type TypeformResponseUserAggregateInput = {
  AND?: InputMaybe<Array<TypeformResponseUserAggregateInput>>;
  NOT?: InputMaybe<TypeformResponseUserAggregateInput>;
  OR?: InputMaybe<Array<TypeformResponseUserAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformResponseUserNodeAggregationWhereInput>;
};

export type TypeformResponseUserConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type TypeformResponseUserConnectOrCreateFieldInput = {
  onCreate: TypeformResponseUserConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type TypeformResponseUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type TypeformResponseUserConnection = {
  __typename?: 'TypeformResponseUserConnection';
  edges: Array<TypeformResponseUserRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformResponseUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type TypeformResponseUserConnectionWhere = {
  AND?: InputMaybe<Array<TypeformResponseUserConnectionWhere>>;
  NOT?: InputMaybe<TypeformResponseUserConnectionWhere>;
  OR?: InputMaybe<Array<TypeformResponseUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type TypeformResponseUserCreateFieldInput = {
  node: UserCreateInput;
};

export type TypeformResponseUserDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<TypeformResponseUserConnectionWhere>;
};

export type TypeformResponseUserDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<TypeformResponseUserConnectionWhere>;
};

export type TypeformResponseUserFieldInput = {
  connect?: InputMaybe<TypeformResponseUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformResponseUserConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformResponseUserCreateFieldInput>;
};

export type TypeformResponseUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformResponseUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformResponseUserNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformResponseUserNodeAggregationWhereInput>>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  role_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  role_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  role_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformResponseUserRelationship = {
  __typename?: 'TypeformResponseUserRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type TypeformResponseUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type TypeformResponseUserUpdateFieldInput = {
  connect?: InputMaybe<TypeformResponseUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<TypeformResponseUserConnectOrCreateFieldInput>;
  create?: InputMaybe<TypeformResponseUserCreateFieldInput>;
  delete?: InputMaybe<TypeformResponseUserDeleteFieldInput>;
  disconnect?: InputMaybe<TypeformResponseUserDisconnectFieldInput>;
  update?: InputMaybe<TypeformResponseUserUpdateConnectionInput>;
  where?: InputMaybe<TypeformResponseUserConnectionWhere>;
};

export type TypeformResponseUserUserAggregationSelection = {
  __typename?: 'TypeformResponseUserUserAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformResponseUserUserNodeAggregateSelection>;
};

export type TypeformResponseUserUserNodeAggregateSelection = {
  __typename?: 'TypeformResponseUserUserNodeAggregateSelection';
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  role: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type TypeformResponseWhere = {
  AND?: InputMaybe<Array<TypeformResponseWhere>>;
  NOT?: InputMaybe<TypeformResponseWhere>;
  OR?: InputMaybe<Array<TypeformResponseWhere>>;
  answersAggregate?: InputMaybe<TypeformResponseAnswersAggregateInput>;
  /** Return TypeformResponses where all of the related TypeformResponseAnswersConnections match this filter */
  answersConnection_ALL?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
  /** Return TypeformResponses where none of the related TypeformResponseAnswersConnections match this filter */
  answersConnection_NONE?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
  /** Return TypeformResponses where one of the related TypeformResponseAnswersConnections match this filter */
  answersConnection_SINGLE?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
  /** Return TypeformResponses where some of the related TypeformResponseAnswersConnections match this filter */
  answersConnection_SOME?: InputMaybe<TypeformResponseAnswersConnectionWhere>;
  /** Return TypeformResponses where all of the related TypeformAnswers match this filter */
  answers_ALL?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformResponses where none of the related TypeformAnswers match this filter */
  answers_NONE?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformResponses where one of the related TypeformAnswers match this filter */
  answers_SINGLE?: InputMaybe<TypeformAnswerWhere>;
  /** Return TypeformResponses where some of the related TypeformAnswers match this filter */
  answers_SOME?: InputMaybe<TypeformAnswerWhere>;
  formmodifiedAt?: InputMaybe<Scalars['String']['input']>;
  formmodifiedAt_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  formmodifiedAt_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  formmodifiedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formmodifiedAt_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  landedAt?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  landedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_IN?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  submittedAt_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  survey?: InputMaybe<TypeformSurveyWhere>;
  surveyAggregate?: InputMaybe<TypeformResponseSurveyAggregateInput>;
  surveyConnection?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
  surveyConnection_NOT?: InputMaybe<TypeformResponseSurveyConnectionWhere>;
  survey_NOT?: InputMaybe<TypeformSurveyWhere>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  typeformId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  typeformId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<UserWhere>;
  userAggregate?: InputMaybe<TypeformResponseUserAggregateInput>;
  userConnection?: InputMaybe<TypeformResponseUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<TypeformResponseUserConnectionWhere>;
  user_NOT?: InputMaybe<UserWhere>;
};

export type TypeformResponsesConnection = {
  __typename?: 'TypeformResponsesConnection';
  edges: Array<TypeformResponseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformSurvey = {
  __typename?: 'TypeformSurvey';
  formversion?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  modifiedAt?: Maybe<Scalars['String']['output']>;
  questions: Array<TypeformQuestion>;
  questionsAggregate?: Maybe<TypeformSurveyTypeformQuestionQuestionsAggregationSelection>;
  questionsConnection: TypeformSurveyQuestionsConnection;
  responses: Array<TypeformResponse>;
  responsesAggregate?: Maybe<TypeformSurveyTypeformResponseResponsesAggregationSelection>;
  responsesConnection: TypeformSurveyResponsesConnection;
  title: Scalars['String']['output'];
  typeformId: Scalars['ID']['output'];
};


export type TypeformSurveyQuestionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformQuestionOptions>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformSurveyQuestionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformQuestionWhere>;
};


export type TypeformSurveyQuestionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformSurveyQuestionsConnectionSort>>;
  where?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
};


export type TypeformSurveyResponsesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformResponseOptions>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type TypeformSurveyResponsesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type TypeformSurveyResponsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TypeformSurveyResponsesConnectionSort>>;
  where?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
};

export type TypeformSurveyAggregateSelection = {
  __typename?: 'TypeformSurveyAggregateSelection';
  count: Scalars['Int']['output'];
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  modifiedAt: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformSurveyConnectInput = {
  questions?: InputMaybe<Array<TypeformSurveyQuestionsConnectFieldInput>>;
  responses?: InputMaybe<Array<TypeformSurveyResponsesConnectFieldInput>>;
};

export type TypeformSurveyConnectOrCreateInput = {
  questions?: InputMaybe<Array<TypeformSurveyQuestionsConnectOrCreateFieldInput>>;
  responses?: InputMaybe<Array<TypeformSurveyResponsesConnectOrCreateFieldInput>>;
};

export type TypeformSurveyConnectOrCreateWhere = {
  node: TypeformSurveyUniqueWhere;
};

export type TypeformSurveyConnectWhere = {
  node: TypeformSurveyWhere;
};

export type TypeformSurveyCreateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<TypeformSurveyQuestionsFieldInput>;
  title: Scalars['String']['input'];
  typeformId: Scalars['ID']['input'];
};

export type TypeformSurveyDeleteInput = {
  questions?: InputMaybe<Array<TypeformSurveyQuestionsDeleteFieldInput>>;
  responses?: InputMaybe<Array<TypeformSurveyResponsesDeleteFieldInput>>;
};

export type TypeformSurveyDisconnectInput = {
  questions?: InputMaybe<Array<TypeformSurveyQuestionsDisconnectFieldInput>>;
  responses?: InputMaybe<Array<TypeformSurveyResponsesDisconnectFieldInput>>;
};

export type TypeformSurveyEdge = {
  __typename?: 'TypeformSurveyEdge';
  cursor: Scalars['String']['output'];
  node: TypeformSurvey;
};

export type TypeformSurveyOnCreateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  typeformId: Scalars['ID']['input'];
};

export type TypeformSurveyOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TypeformSurveySort objects to sort TypeformSurveys by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TypeformSurveySort>>;
};

export type TypeformSurveyQuestionsAggregateInput = {
  AND?: InputMaybe<Array<TypeformSurveyQuestionsAggregateInput>>;
  NOT?: InputMaybe<TypeformSurveyQuestionsAggregateInput>;
  OR?: InputMaybe<Array<TypeformSurveyQuestionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformSurveyQuestionsNodeAggregationWhereInput>;
};

export type TypeformSurveyQuestionsConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformQuestionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformQuestionConnectWhere>;
};

export type TypeformSurveyQuestionsConnectOrCreateFieldInput = {
  onCreate: TypeformSurveyQuestionsConnectOrCreateFieldInputOnCreate;
  where: TypeformQuestionConnectOrCreateWhere;
};

export type TypeformSurveyQuestionsConnectOrCreateFieldInputOnCreate = {
  node: TypeformQuestionOnCreateInput;
};

export type TypeformSurveyQuestionsConnection = {
  __typename?: 'TypeformSurveyQuestionsConnection';
  edges: Array<TypeformSurveyQuestionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformSurveyQuestionsConnectionSort = {
  node?: InputMaybe<TypeformQuestionSort>;
};

export type TypeformSurveyQuestionsConnectionWhere = {
  AND?: InputMaybe<Array<TypeformSurveyQuestionsConnectionWhere>>;
  NOT?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
  OR?: InputMaybe<Array<TypeformSurveyQuestionsConnectionWhere>>;
  node?: InputMaybe<TypeformQuestionWhere>;
};

export type TypeformSurveyQuestionsCreateFieldInput = {
  node: TypeformQuestionCreateInput;
};

export type TypeformSurveyQuestionsDeleteFieldInput = {
  delete?: InputMaybe<TypeformQuestionDeleteInput>;
  where?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
};

export type TypeformSurveyQuestionsDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformQuestionDisconnectInput>;
  where?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
};

export type TypeformSurveyQuestionsFieldInput = {
  connect?: InputMaybe<Array<TypeformSurveyQuestionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TypeformSurveyQuestionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TypeformSurveyQuestionsCreateFieldInput>>;
};

export type TypeformSurveyQuestionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformSurveyQuestionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformSurveyQuestionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformSurveyQuestionsNodeAggregationWhereInput>>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  ref_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  ref_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  ref_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TypeformSurveyQuestionsRelationship = {
  __typename?: 'TypeformSurveyQuestionsRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformQuestion;
};

export type TypeformSurveyQuestionsUpdateConnectionInput = {
  node?: InputMaybe<TypeformQuestionUpdateInput>;
};

export type TypeformSurveyQuestionsUpdateFieldInput = {
  connect?: InputMaybe<Array<TypeformSurveyQuestionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TypeformSurveyQuestionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TypeformSurveyQuestionsCreateFieldInput>>;
  delete?: InputMaybe<Array<TypeformSurveyQuestionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TypeformSurveyQuestionsDisconnectFieldInput>>;
  update?: InputMaybe<TypeformSurveyQuestionsUpdateConnectionInput>;
  where?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
};

export type TypeformSurveyRelationInput = {
  questions?: InputMaybe<Array<TypeformSurveyQuestionsCreateFieldInput>>;
  responses?: InputMaybe<Array<TypeformSurveyResponsesCreateFieldInput>>;
};

export type TypeformSurveyResponsesAggregateInput = {
  AND?: InputMaybe<Array<TypeformSurveyResponsesAggregateInput>>;
  NOT?: InputMaybe<TypeformSurveyResponsesAggregateInput>;
  OR?: InputMaybe<Array<TypeformSurveyResponsesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TypeformSurveyResponsesNodeAggregationWhereInput>;
};

export type TypeformSurveyResponsesConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformResponseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformResponseConnectWhere>;
};

export type TypeformSurveyResponsesConnectOrCreateFieldInput = {
  onCreate: TypeformSurveyResponsesConnectOrCreateFieldInputOnCreate;
  where: TypeformResponseConnectOrCreateWhere;
};

export type TypeformSurveyResponsesConnectOrCreateFieldInputOnCreate = {
  node: TypeformResponseOnCreateInput;
};

export type TypeformSurveyResponsesConnection = {
  __typename?: 'TypeformSurveyResponsesConnection';
  edges: Array<TypeformSurveyResponsesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformSurveyResponsesConnectionSort = {
  node?: InputMaybe<TypeformResponseSort>;
};

export type TypeformSurveyResponsesConnectionWhere = {
  AND?: InputMaybe<Array<TypeformSurveyResponsesConnectionWhere>>;
  NOT?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
  OR?: InputMaybe<Array<TypeformSurveyResponsesConnectionWhere>>;
  node?: InputMaybe<TypeformResponseWhere>;
};

export type TypeformSurveyResponsesCreateFieldInput = {
  node: TypeformResponseCreateInput;
};

export type TypeformSurveyResponsesDeleteFieldInput = {
  delete?: InputMaybe<TypeformResponseDeleteInput>;
  where?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
};

export type TypeformSurveyResponsesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformResponseDisconnectInput>;
  where?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
};

export type TypeformSurveyResponsesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TypeformSurveyResponsesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TypeformSurveyResponsesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TypeformSurveyResponsesNodeAggregationWhereInput>>;
  formmodifiedAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  landedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TypeformSurveyResponsesRelationship = {
  __typename?: 'TypeformSurveyResponsesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformResponse;
};

/** Fields to sort TypeformSurveys by. The order in which sorts are applied is not guaranteed when specifying many fields in one TypeformSurveySort object. */
export type TypeformSurveySort = {
  formversion?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  modifiedAt?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  typeformId?: InputMaybe<SortDirection>;
};

export type TypeformSurveyTypeformQuestionQuestionsAggregationSelection = {
  __typename?: 'TypeformSurveyTypeformQuestionQuestionsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformSurveyTypeformQuestionQuestionsNodeAggregateSelection>;
};

export type TypeformSurveyTypeformQuestionQuestionsNodeAggregateSelection = {
  __typename?: 'TypeformSurveyTypeformQuestionQuestionsNodeAggregateSelection';
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  ref: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformSurveyTypeformResponseResponsesAggregationSelection = {
  __typename?: 'TypeformSurveyTypeformResponseResponsesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TypeformSurveyTypeformResponseResponsesNodeAggregateSelection>;
};

export type TypeformSurveyTypeformResponseResponsesNodeAggregateSelection = {
  __typename?: 'TypeformSurveyTypeformResponseResponsesNodeAggregateSelection';
  formmodifiedAt: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  landedAt: DateTimeAggregateSelectionNonNullable;
  submittedAt: DateTimeAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type TypeformSurveyUniqueWhere = {
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformSurveyUpdateInput = {
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  formversion_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  modifiedAt?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<TypeformSurveyQuestionsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformSurveyWhere = {
  AND?: InputMaybe<Array<TypeformSurveyWhere>>;
  NOT?: InputMaybe<TypeformSurveyWhere>;
  OR?: InputMaybe<Array<TypeformSurveyWhere>>;
  formversion?: InputMaybe<Scalars['Int']['input']>;
  formversion_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  formversion_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_LTE?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  modifiedAt?: InputMaybe<Scalars['String']['input']>;
  modifiedAt_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  modifiedAt_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  modifiedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  modifiedAt_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  questionsAggregate?: InputMaybe<TypeformSurveyQuestionsAggregateInput>;
  /** Return TypeformSurveys where all of the related TypeformSurveyQuestionsConnections match this filter */
  questionsConnection_ALL?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
  /** Return TypeformSurveys where none of the related TypeformSurveyQuestionsConnections match this filter */
  questionsConnection_NONE?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
  /** Return TypeformSurveys where one of the related TypeformSurveyQuestionsConnections match this filter */
  questionsConnection_SINGLE?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
  /** Return TypeformSurveys where some of the related TypeformSurveyQuestionsConnections match this filter */
  questionsConnection_SOME?: InputMaybe<TypeformSurveyQuestionsConnectionWhere>;
  /** Return TypeformSurveys where all of the related TypeformQuestions match this filter */
  questions_ALL?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformSurveys where none of the related TypeformQuestions match this filter */
  questions_NONE?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformSurveys where one of the related TypeformQuestions match this filter */
  questions_SINGLE?: InputMaybe<TypeformQuestionWhere>;
  /** Return TypeformSurveys where some of the related TypeformQuestions match this filter */
  questions_SOME?: InputMaybe<TypeformQuestionWhere>;
  responsesAggregate?: InputMaybe<TypeformSurveyResponsesAggregateInput>;
  /** Return TypeformSurveys where all of the related TypeformSurveyResponsesConnections match this filter */
  responsesConnection_ALL?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
  /** Return TypeformSurveys where none of the related TypeformSurveyResponsesConnections match this filter */
  responsesConnection_NONE?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
  /** Return TypeformSurveys where one of the related TypeformSurveyResponsesConnections match this filter */
  responsesConnection_SINGLE?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
  /** Return TypeformSurveys where some of the related TypeformSurveyResponsesConnections match this filter */
  responsesConnection_SOME?: InputMaybe<TypeformSurveyResponsesConnectionWhere>;
  /** Return TypeformSurveys where all of the related TypeformResponses match this filter */
  responses_ALL?: InputMaybe<TypeformResponseWhere>;
  /** Return TypeformSurveys where none of the related TypeformResponses match this filter */
  responses_NONE?: InputMaybe<TypeformResponseWhere>;
  /** Return TypeformSurveys where one of the related TypeformResponses match this filter */
  responses_SINGLE?: InputMaybe<TypeformResponseWhere>;
  /** Return TypeformSurveys where some of the related TypeformResponses match this filter */
  responses_SOME?: InputMaybe<TypeformResponseWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  typeformId?: InputMaybe<Scalars['ID']['input']>;
  typeformId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  typeformId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  typeformId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  typeformId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
};

export type TypeformSurveysConnection = {
  __typename?: 'TypeformSurveysConnection';
  edges: Array<TypeformSurveyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateDomainsMutationResponse = {
  __typename?: 'UpdateDomainsMutationResponse';
  domains: Array<Domain>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateLinksMutationResponse = {
  __typename?: 'UpdateLinksMutationResponse';
  info: UpdateInfo;
  links: Array<Link>;
};

export type UpdateOrganizationsMutationResponse = {
  __typename?: 'UpdateOrganizationsMutationResponse';
  info: UpdateInfo;
  organizations: Array<Organization>;
};

export type UpdateProjectsMutationResponse = {
  __typename?: 'UpdateProjectsMutationResponse';
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateSystemsMutationResponse = {
  __typename?: 'UpdateSystemsMutationResponse';
  info: UpdateInfo;
  systems: Array<System>;
};

export type UpdateTypeformAnswerChoicesMutationResponse = {
  __typename?: 'UpdateTypeformAnswerChoicesMutationResponse';
  info: UpdateInfo;
  typeformAnswerChoices: Array<TypeformAnswerChoice>;
};

export type UpdateTypeformAnswersMutationResponse = {
  __typename?: 'UpdateTypeformAnswersMutationResponse';
  info: UpdateInfo;
  typeformAnswers: Array<TypeformAnswer>;
};

export type UpdateTypeformQuestionAttachmentsMutationResponse = {
  __typename?: 'UpdateTypeformQuestionAttachmentsMutationResponse';
  info: UpdateInfo;
  typeformQuestionAttachments: Array<TypeformQuestionAttachment>;
};

export type UpdateTypeformQuestionChoicesMutationResponse = {
  __typename?: 'UpdateTypeformQuestionChoicesMutationResponse';
  info: UpdateInfo;
  typeformQuestionChoices: Array<TypeformQuestionChoice>;
};

export type UpdateTypeformQuestionPropertiesMutationResponse = {
  __typename?: 'UpdateTypeformQuestionPropertiesMutationResponse';
  info: UpdateInfo;
  typeformQuestionProperties: Array<TypeformQuestionProperties>;
};

export type UpdateTypeformQuestionValidationsMutationResponse = {
  __typename?: 'UpdateTypeformQuestionValidationsMutationResponse';
  info: UpdateInfo;
  typeformQuestionValidations: Array<TypeformQuestionValidations>;
};

export type UpdateTypeformQuestionsMutationResponse = {
  __typename?: 'UpdateTypeformQuestionsMutationResponse';
  info: UpdateInfo;
  typeformQuestions: Array<TypeformQuestion>;
};

export type UpdateTypeformResponsesMutationResponse = {
  __typename?: 'UpdateTypeformResponsesMutationResponse';
  info: UpdateInfo;
  typeformResponses: Array<TypeformResponse>;
};

export type UpdateTypeformSurveysMutationResponse = {
  __typename?: 'UpdateTypeformSurveysMutationResponse';
  info: UpdateInfo;
  typeformSurveys: Array<TypeformSurvey>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateWorkItemsMutationResponse = {
  __typename?: 'UpdateWorkItemsMutationResponse';
  info: UpdateInfo;
  workItems: Array<WorkItem>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organizationAggregate?: Maybe<UserOrganizationOrganizationAggregationSelection>;
  organizationConnection: UserOrganizationConnection;
  role?: Maybe<Scalars['String']['output']>;
  surveyResponses: Array<TypeformResponse>;
  surveyResponsesAggregate?: Maybe<UserTypeformResponseSurveyResponsesAggregationSelection>;
  surveyResponsesConnection: UserSurveyResponsesConnection;
  systemsOwned: Array<System>;
  systemsOwnedAggregate?: Maybe<UserSystemSystemsOwnedAggregationSelection>;
  systemsOwnedConnection: UserSystemsOwnedConnection;
  title?: Maybe<Scalars['String']['output']>;
};


export type UserOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type UserOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type UserOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrganizationConnectionSort>>;
  where?: InputMaybe<UserOrganizationConnectionWhere>;
};


export type UserSurveyResponsesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<TypeformResponseOptions>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type UserSurveyResponsesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TypeformResponseWhere>;
};


export type UserSurveyResponsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSurveyResponsesConnectionSort>>;
  where?: InputMaybe<UserSurveyResponsesConnectionWhere>;
};


export type UserSystemsOwnedArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SystemOptions>;
  where?: InputMaybe<SystemWhere>;
};


export type UserSystemsOwnedAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SystemWhere>;
};


export type UserSystemsOwnedConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSystemsOwnedConnectionSort>>;
  where?: InputMaybe<UserSystemsOwnedConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  role: StringAggregateSelectionNullable;
  title: StringAggregateSelectionNullable;
};

export type UserConnectInput = {
  organization?: InputMaybe<UserOrganizationConnectFieldInput>;
  surveyResponses?: InputMaybe<Array<UserSurveyResponsesConnectFieldInput>>;
  systemsOwned?: InputMaybe<Array<UserSystemsOwnedConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  organization?: InputMaybe<UserOrganizationConnectOrCreateFieldInput>;
  surveyResponses?: InputMaybe<Array<UserSurveyResponsesConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organization?: InputMaybe<UserOrganizationFieldInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  systemsOwned?: InputMaybe<UserSystemsOwnedFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeleteInput = {
  organization?: InputMaybe<UserOrganizationDeleteFieldInput>;
  surveyResponses?: InputMaybe<Array<UserSurveyResponsesDeleteFieldInput>>;
  systemsOwned?: InputMaybe<Array<UserSystemsOwnedDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  organization?: InputMaybe<UserOrganizationDisconnectFieldInput>;
  surveyResponses?: InputMaybe<Array<UserSurveyResponsesDisconnectFieldInput>>;
  systemsOwned?: InputMaybe<Array<UserSystemsOwnedDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOnCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserOrganizationAggregateInput = {
  AND?: InputMaybe<Array<UserOrganizationAggregateInput>>;
  NOT?: InputMaybe<UserOrganizationAggregateInput>;
  OR?: InputMaybe<Array<UserOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserOrganizationNodeAggregationWhereInput>;
};

export type UserOrganizationConnectFieldInput = {
  connect?: InputMaybe<OrganizationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type UserOrganizationConnectOrCreateFieldInput = {
  onCreate: UserOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type UserOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type UserOrganizationConnection = {
  __typename?: 'UserOrganizationConnection';
  edges: Array<UserOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type UserOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<UserOrganizationConnectionWhere>>;
  NOT?: InputMaybe<UserOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<UserOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type UserOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type UserOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<UserOrganizationConnectionWhere>;
};

export type UserOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<UserOrganizationConnectionWhere>;
};

export type UserOrganizationFieldInput = {
  connect?: InputMaybe<UserOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<UserOrganizationCreateFieldInput>;
};

export type UserOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserOrganizationNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserOrganizationOrganizationAggregationSelection = {
  __typename?: 'UserOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserOrganizationOrganizationNodeAggregateSelection>;
};

export type UserOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'UserOrganizationOrganizationNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNullable;
};

export type UserOrganizationRelationship = {
  __typename?: 'UserOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type UserOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type UserOrganizationUpdateFieldInput = {
  connect?: InputMaybe<UserOrganizationConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserOrganizationConnectOrCreateFieldInput>;
  create?: InputMaybe<UserOrganizationCreateFieldInput>;
  delete?: InputMaybe<UserOrganizationDeleteFieldInput>;
  disconnect?: InputMaybe<UserOrganizationDisconnectFieldInput>;
  update?: InputMaybe<UserOrganizationUpdateConnectionInput>;
  where?: InputMaybe<UserOrganizationConnectionWhere>;
};

export type UserRelationInput = {
  organization?: InputMaybe<UserOrganizationCreateFieldInput>;
  surveyResponses?: InputMaybe<Array<UserSurveyResponsesCreateFieldInput>>;
  systemsOwned?: InputMaybe<Array<UserSystemsOwnedCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  role?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type UserSurveyResponsesAggregateInput = {
  AND?: InputMaybe<Array<UserSurveyResponsesAggregateInput>>;
  NOT?: InputMaybe<UserSurveyResponsesAggregateInput>;
  OR?: InputMaybe<Array<UserSurveyResponsesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserSurveyResponsesNodeAggregationWhereInput>;
};

export type UserSurveyResponsesConnectFieldInput = {
  connect?: InputMaybe<Array<TypeformResponseConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<TypeformResponseConnectWhere>;
};

export type UserSurveyResponsesConnectOrCreateFieldInput = {
  onCreate: UserSurveyResponsesConnectOrCreateFieldInputOnCreate;
  where: TypeformResponseConnectOrCreateWhere;
};

export type UserSurveyResponsesConnectOrCreateFieldInputOnCreate = {
  node: TypeformResponseOnCreateInput;
};

export type UserSurveyResponsesConnection = {
  __typename?: 'UserSurveyResponsesConnection';
  edges: Array<UserSurveyResponsesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserSurveyResponsesConnectionSort = {
  node?: InputMaybe<TypeformResponseSort>;
};

export type UserSurveyResponsesConnectionWhere = {
  AND?: InputMaybe<Array<UserSurveyResponsesConnectionWhere>>;
  NOT?: InputMaybe<UserSurveyResponsesConnectionWhere>;
  OR?: InputMaybe<Array<UserSurveyResponsesConnectionWhere>>;
  node?: InputMaybe<TypeformResponseWhere>;
};

export type UserSurveyResponsesCreateFieldInput = {
  node: TypeformResponseCreateInput;
};

export type UserSurveyResponsesDeleteFieldInput = {
  delete?: InputMaybe<TypeformResponseDeleteInput>;
  where?: InputMaybe<UserSurveyResponsesConnectionWhere>;
};

export type UserSurveyResponsesDisconnectFieldInput = {
  disconnect?: InputMaybe<TypeformResponseDisconnectInput>;
  where?: InputMaybe<UserSurveyResponsesConnectionWhere>;
};

export type UserSurveyResponsesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSurveyResponsesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSurveyResponsesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserSurveyResponsesNodeAggregationWhereInput>>;
  formmodifiedAt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  formmodifiedAt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  formmodifiedAt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  formversion_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  formversion_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  formversion_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
  landedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  landedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LT?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserSurveyResponsesRelationship = {
  __typename?: 'UserSurveyResponsesRelationship';
  cursor: Scalars['String']['output'];
  node: TypeformResponse;
};

export type UserSystemSystemsOwnedAggregationSelection = {
  __typename?: 'UserSystemSystemsOwnedAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserSystemSystemsOwnedNodeAggregateSelection>;
};

export type UserSystemSystemsOwnedNodeAggregateSelection = {
  __typename?: 'UserSystemSystemsOwnedNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type UserSystemsOwnedAggregateInput = {
  AND?: InputMaybe<Array<UserSystemsOwnedAggregateInput>>;
  NOT?: InputMaybe<UserSystemsOwnedAggregateInput>;
  OR?: InputMaybe<Array<UserSystemsOwnedAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserSystemsOwnedNodeAggregationWhereInput>;
};

export type UserSystemsOwnedConnectFieldInput = {
  connect?: InputMaybe<Array<SystemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SystemConnectWhere>;
};

export type UserSystemsOwnedConnection = {
  __typename?: 'UserSystemsOwnedConnection';
  edges: Array<UserSystemsOwnedRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserSystemsOwnedConnectionSort = {
  node?: InputMaybe<SystemSort>;
};

export type UserSystemsOwnedConnectionWhere = {
  AND?: InputMaybe<Array<UserSystemsOwnedConnectionWhere>>;
  NOT?: InputMaybe<UserSystemsOwnedConnectionWhere>;
  OR?: InputMaybe<Array<UserSystemsOwnedConnectionWhere>>;
  node?: InputMaybe<SystemWhere>;
};

export type UserSystemsOwnedCreateFieldInput = {
  node: SystemCreateInput;
};

export type UserSystemsOwnedDeleteFieldInput = {
  delete?: InputMaybe<SystemDeleteInput>;
  where?: InputMaybe<UserSystemsOwnedConnectionWhere>;
};

export type UserSystemsOwnedDisconnectFieldInput = {
  disconnect?: InputMaybe<SystemDisconnectInput>;
  where?: InputMaybe<UserSystemsOwnedConnectionWhere>;
};

export type UserSystemsOwnedFieldInput = {
  connect?: InputMaybe<Array<UserSystemsOwnedConnectFieldInput>>;
  create?: InputMaybe<Array<UserSystemsOwnedCreateFieldInput>>;
};

export type UserSystemsOwnedNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSystemsOwnedNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSystemsOwnedNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserSystemsOwnedNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSystemsOwnedRelationship = {
  __typename?: 'UserSystemsOwnedRelationship';
  cursor: Scalars['String']['output'];
  node: System;
};

export type UserSystemsOwnedUpdateConnectionInput = {
  node?: InputMaybe<SystemUpdateInput>;
};

export type UserSystemsOwnedUpdateFieldInput = {
  connect?: InputMaybe<Array<UserSystemsOwnedConnectFieldInput>>;
  create?: InputMaybe<Array<UserSystemsOwnedCreateFieldInput>>;
  delete?: InputMaybe<Array<UserSystemsOwnedDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserSystemsOwnedDisconnectFieldInput>>;
  update?: InputMaybe<UserSystemsOwnedUpdateConnectionInput>;
  where?: InputMaybe<UserSystemsOwnedConnectionWhere>;
};

export type UserTypeformResponseSurveyResponsesAggregationSelection = {
  __typename?: 'UserTypeformResponseSurveyResponsesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserTypeformResponseSurveyResponsesNodeAggregateSelection>;
};

export type UserTypeformResponseSurveyResponsesNodeAggregateSelection = {
  __typename?: 'UserTypeformResponseSurveyResponsesNodeAggregateSelection';
  formmodifiedAt: StringAggregateSelectionNullable;
  formversion: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  landedAt: DateTimeAggregateSelectionNonNullable;
  submittedAt: DateTimeAggregateSelectionNonNullable;
  typeformId: IdAggregateSelectionNonNullable;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<UserOrganizationUpdateFieldInput>;
  role?: InputMaybe<Scalars['String']['input']>;
  systemsOwned?: InputMaybe<Array<UserSystemsOwnedUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  email_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<OrganizationWhere>;
  organizationAggregate?: InputMaybe<UserOrganizationAggregateInput>;
  organizationConnection?: InputMaybe<UserOrganizationConnectionWhere>;
  organizationConnection_NOT?: InputMaybe<UserOrganizationConnectionWhere>;
  organization_NOT?: InputMaybe<OrganizationWhere>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  role_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  role_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  surveyResponsesAggregate?: InputMaybe<UserSurveyResponsesAggregateInput>;
  /** Return Users where all of the related UserSurveyResponsesConnections match this filter */
  surveyResponsesConnection_ALL?: InputMaybe<UserSurveyResponsesConnectionWhere>;
  /** Return Users where none of the related UserSurveyResponsesConnections match this filter */
  surveyResponsesConnection_NONE?: InputMaybe<UserSurveyResponsesConnectionWhere>;
  /** Return Users where one of the related UserSurveyResponsesConnections match this filter */
  surveyResponsesConnection_SINGLE?: InputMaybe<UserSurveyResponsesConnectionWhere>;
  /** Return Users where some of the related UserSurveyResponsesConnections match this filter */
  surveyResponsesConnection_SOME?: InputMaybe<UserSurveyResponsesConnectionWhere>;
  /** Return Users where all of the related TypeformResponses match this filter */
  surveyResponses_ALL?: InputMaybe<TypeformResponseWhere>;
  /** Return Users where none of the related TypeformResponses match this filter */
  surveyResponses_NONE?: InputMaybe<TypeformResponseWhere>;
  /** Return Users where one of the related TypeformResponses match this filter */
  surveyResponses_SINGLE?: InputMaybe<TypeformResponseWhere>;
  /** Return Users where some of the related TypeformResponses match this filter */
  surveyResponses_SOME?: InputMaybe<TypeformResponseWhere>;
  systemsOwnedAggregate?: InputMaybe<UserSystemsOwnedAggregateInput>;
  /** Return Users where all of the related UserSystemsOwnedConnections match this filter */
  systemsOwnedConnection_ALL?: InputMaybe<UserSystemsOwnedConnectionWhere>;
  /** Return Users where none of the related UserSystemsOwnedConnections match this filter */
  systemsOwnedConnection_NONE?: InputMaybe<UserSystemsOwnedConnectionWhere>;
  /** Return Users where one of the related UserSystemsOwnedConnections match this filter */
  systemsOwnedConnection_SINGLE?: InputMaybe<UserSystemsOwnedConnectionWhere>;
  /** Return Users where some of the related UserSystemsOwnedConnections match this filter */
  systemsOwnedConnection_SOME?: InputMaybe<UserSystemsOwnedConnectionWhere>;
  /** Return Users where all of the related Systems match this filter */
  systemsOwned_ALL?: InputMaybe<SystemWhere>;
  /** Return Users where none of the related Systems match this filter */
  systemsOwned_NONE?: InputMaybe<SystemWhere>;
  /** Return Users where one of the related Systems match this filter */
  systemsOwned_SINGLE?: InputMaybe<SystemWhere>;
  /** Return Users where some of the related Systems match this filter */
  systemsOwned_SOME?: InputMaybe<SystemWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItem = {
  __typename?: 'WorkItem';
  assignedTo: User;
  due?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  links: Array<Link>;
  linksAggregate?: Maybe<WorkItemLinkLinksAggregationSelection>;
  linksConnection: WorkItemLinksConnection;
  name: Scalars['String']['output'];
  parent?: Maybe<WorkItem>;
  parentAggregate?: Maybe<WorkItemWorkItemParentAggregationSelection>;
  parentConnection: WorkItemParentConnection;
  project?: Maybe<Project>;
  projectAggregate?: Maybe<WorkItemProjectProjectAggregationSelection>;
  projectConnection: WorkItemProjectConnection;
  regardingSystem?: Maybe<System>;
  regardingSystemAggregate?: Maybe<WorkItemSystemRegardingSystemAggregationSelection>;
  regardingSystemConnection: WorkItemRegardingSystemConnection;
  state: WorkItemState;
  type: WorkItemType;
  workItems: Array<WorkItem>;
  workItemsAggregate?: Maybe<WorkItemWorkItemWorkItemsAggregationSelection>;
  workItemsConnection: WorkItemWorkItemsConnection;
};


export type WorkItemLinksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LinkOptions>;
  where?: InputMaybe<LinkWhere>;
};


export type WorkItemLinksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkWhere>;
};


export type WorkItemLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkItemLinksConnectionSort>>;
  where?: InputMaybe<WorkItemLinksConnectionWhere>;
};


export type WorkItemParentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<WorkItemOptions>;
  where?: InputMaybe<WorkItemWhere>;
};


export type WorkItemParentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkItemWhere>;
};


export type WorkItemParentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkItemParentConnectionSort>>;
  where?: InputMaybe<WorkItemParentConnectionWhere>;
};


export type WorkItemProjectArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProjectOptions>;
  where?: InputMaybe<ProjectWhere>;
};


export type WorkItemProjectAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProjectWhere>;
};


export type WorkItemProjectConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkItemProjectConnectionSort>>;
  where?: InputMaybe<WorkItemProjectConnectionWhere>;
};


export type WorkItemRegardingSystemArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<SystemOptions>;
  where?: InputMaybe<SystemWhere>;
};


export type WorkItemRegardingSystemAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SystemWhere>;
};


export type WorkItemRegardingSystemConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkItemRegardingSystemConnectionSort>>;
  where?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
};


export type WorkItemWorkItemsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<WorkItemOptions>;
  where?: InputMaybe<WorkItemWhere>;
};


export type WorkItemWorkItemsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkItemWhere>;
};


export type WorkItemWorkItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<WorkItemWorkItemsConnectionSort>>;
  where?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
};

export type WorkItemAggregateSelection = {
  __typename?: 'WorkItemAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkItemConnectInput = {
  links?: InputMaybe<Array<WorkItemLinksConnectFieldInput>>;
  parent?: InputMaybe<WorkItemParentConnectFieldInput>;
  project?: InputMaybe<WorkItemProjectConnectFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemConnectFieldInput>;
  workItems?: InputMaybe<Array<WorkItemWorkItemsConnectFieldInput>>;
};

export type WorkItemConnectWhere = {
  node: WorkItemWhere;
};

export type WorkItemCreateInput = {
  due?: InputMaybe<Scalars['Date']['input']>;
  links?: InputMaybe<WorkItemLinksFieldInput>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<WorkItemParentFieldInput>;
  project?: InputMaybe<WorkItemProjectFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemFieldInput>;
  state: WorkItemState;
  type: WorkItemType;
  workItems?: InputMaybe<WorkItemWorkItemsFieldInput>;
};

export type WorkItemDeleteInput = {
  links?: InputMaybe<Array<WorkItemLinksDeleteFieldInput>>;
  parent?: InputMaybe<WorkItemParentDeleteFieldInput>;
  project?: InputMaybe<WorkItemProjectDeleteFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemDeleteFieldInput>;
  workItems?: InputMaybe<Array<WorkItemWorkItemsDeleteFieldInput>>;
};

export type WorkItemDisconnectInput = {
  links?: InputMaybe<Array<WorkItemLinksDisconnectFieldInput>>;
  parent?: InputMaybe<WorkItemParentDisconnectFieldInput>;
  project?: InputMaybe<WorkItemProjectDisconnectFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemDisconnectFieldInput>;
  workItems?: InputMaybe<Array<WorkItemWorkItemsDisconnectFieldInput>>;
};

export type WorkItemEdge = {
  __typename?: 'WorkItemEdge';
  cursor: Scalars['String']['output'];
  node: WorkItem;
};

export type WorkItemLinkLinksAggregationSelection = {
  __typename?: 'WorkItemLinkLinksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkItemLinkLinksNodeAggregateSelection>;
};

export type WorkItemLinkLinksNodeAggregateSelection = {
  __typename?: 'WorkItemLinkLinksNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  uri: StringAggregateSelectionNullable;
};

export type WorkItemLinksAggregateInput = {
  AND?: InputMaybe<Array<WorkItemLinksAggregateInput>>;
  NOT?: InputMaybe<WorkItemLinksAggregateInput>;
  OR?: InputMaybe<Array<WorkItemLinksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkItemLinksNodeAggregationWhereInput>;
};

export type WorkItemLinksConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LinkConnectWhere>;
};

export type WorkItemLinksConnection = {
  __typename?: 'WorkItemLinksConnection';
  edges: Array<WorkItemLinksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItemLinksConnectionSort = {
  node?: InputMaybe<LinkSort>;
};

export type WorkItemLinksConnectionWhere = {
  AND?: InputMaybe<Array<WorkItemLinksConnectionWhere>>;
  NOT?: InputMaybe<WorkItemLinksConnectionWhere>;
  OR?: InputMaybe<Array<WorkItemLinksConnectionWhere>>;
  node?: InputMaybe<LinkWhere>;
};

export type WorkItemLinksCreateFieldInput = {
  node: LinkCreateInput;
};

export type WorkItemLinksDeleteFieldInput = {
  where?: InputMaybe<WorkItemLinksConnectionWhere>;
};

export type WorkItemLinksDisconnectFieldInput = {
  where?: InputMaybe<WorkItemLinksConnectionWhere>;
};

export type WorkItemLinksFieldInput = {
  connect?: InputMaybe<Array<WorkItemLinksConnectFieldInput>>;
  create?: InputMaybe<Array<WorkItemLinksCreateFieldInput>>;
};

export type WorkItemLinksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkItemLinksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkItemLinksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkItemLinksNodeAggregationWhereInput>>;
  uri_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  uri_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  uri_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  uri_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  uri_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  uri_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uri_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uri_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uri_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uri_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  uri_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  uri_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  uri_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  uri_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  uri_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemLinksRelationship = {
  __typename?: 'WorkItemLinksRelationship';
  cursor: Scalars['String']['output'];
  node: Link;
};

export type WorkItemLinksUpdateConnectionInput = {
  node?: InputMaybe<LinkUpdateInput>;
};

export type WorkItemLinksUpdateFieldInput = {
  connect?: InputMaybe<Array<WorkItemLinksConnectFieldInput>>;
  create?: InputMaybe<Array<WorkItemLinksCreateFieldInput>>;
  delete?: InputMaybe<Array<WorkItemLinksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WorkItemLinksDisconnectFieldInput>>;
  update?: InputMaybe<WorkItemLinksUpdateConnectionInput>;
  where?: InputMaybe<WorkItemLinksConnectionWhere>;
};

export type WorkItemOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more WorkItemSort objects to sort WorkItems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<WorkItemSort>>;
};

export type WorkItemParentAggregateInput = {
  AND?: InputMaybe<Array<WorkItemParentAggregateInput>>;
  NOT?: InputMaybe<WorkItemParentAggregateInput>;
  OR?: InputMaybe<Array<WorkItemParentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkItemParentNodeAggregationWhereInput>;
};

export type WorkItemParentConnectFieldInput = {
  connect?: InputMaybe<WorkItemConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<WorkItemConnectWhere>;
};

export type WorkItemParentConnection = {
  __typename?: 'WorkItemParentConnection';
  edges: Array<WorkItemParentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItemParentConnectionSort = {
  node?: InputMaybe<WorkItemSort>;
};

export type WorkItemParentConnectionWhere = {
  AND?: InputMaybe<Array<WorkItemParentConnectionWhere>>;
  NOT?: InputMaybe<WorkItemParentConnectionWhere>;
  OR?: InputMaybe<Array<WorkItemParentConnectionWhere>>;
  node?: InputMaybe<WorkItemWhere>;
};

export type WorkItemParentCreateFieldInput = {
  node: WorkItemCreateInput;
};

export type WorkItemParentDeleteFieldInput = {
  delete?: InputMaybe<WorkItemDeleteInput>;
  where?: InputMaybe<WorkItemParentConnectionWhere>;
};

export type WorkItemParentDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkItemDisconnectInput>;
  where?: InputMaybe<WorkItemParentConnectionWhere>;
};

export type WorkItemParentFieldInput = {
  connect?: InputMaybe<WorkItemParentConnectFieldInput>;
  create?: InputMaybe<WorkItemParentCreateFieldInput>;
};

export type WorkItemParentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkItemParentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkItemParentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkItemParentNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemParentRelationship = {
  __typename?: 'WorkItemParentRelationship';
  cursor: Scalars['String']['output'];
  node: WorkItem;
};

export type WorkItemParentUpdateConnectionInput = {
  node?: InputMaybe<WorkItemUpdateInput>;
};

export type WorkItemParentUpdateFieldInput = {
  connect?: InputMaybe<WorkItemParentConnectFieldInput>;
  create?: InputMaybe<WorkItemParentCreateFieldInput>;
  delete?: InputMaybe<WorkItemParentDeleteFieldInput>;
  disconnect?: InputMaybe<WorkItemParentDisconnectFieldInput>;
  update?: InputMaybe<WorkItemParentUpdateConnectionInput>;
  where?: InputMaybe<WorkItemParentConnectionWhere>;
};

export type WorkItemProjectAggregateInput = {
  AND?: InputMaybe<Array<WorkItemProjectAggregateInput>>;
  NOT?: InputMaybe<WorkItemProjectAggregateInput>;
  OR?: InputMaybe<Array<WorkItemProjectAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkItemProjectNodeAggregationWhereInput>;
};

export type WorkItemProjectConnectFieldInput = {
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProjectConnectWhere>;
};

export type WorkItemProjectConnection = {
  __typename?: 'WorkItemProjectConnection';
  edges: Array<WorkItemProjectRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItemProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type WorkItemProjectConnectionWhere = {
  AND?: InputMaybe<Array<WorkItemProjectConnectionWhere>>;
  NOT?: InputMaybe<WorkItemProjectConnectionWhere>;
  OR?: InputMaybe<Array<WorkItemProjectConnectionWhere>>;
  node?: InputMaybe<ProjectWhere>;
};

export type WorkItemProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type WorkItemProjectDeleteFieldInput = {
  delete?: InputMaybe<ProjectDeleteInput>;
  where?: InputMaybe<WorkItemProjectConnectionWhere>;
};

export type WorkItemProjectDisconnectFieldInput = {
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  where?: InputMaybe<WorkItemProjectConnectionWhere>;
};

export type WorkItemProjectFieldInput = {
  connect?: InputMaybe<WorkItemProjectConnectFieldInput>;
  create?: InputMaybe<WorkItemProjectCreateFieldInput>;
};

export type WorkItemProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkItemProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkItemProjectNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkItemProjectNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemProjectProjectAggregationSelection = {
  __typename?: 'WorkItemProjectProjectAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkItemProjectProjectNodeAggregateSelection>;
};

export type WorkItemProjectProjectNodeAggregateSelection = {
  __typename?: 'WorkItemProjectProjectNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkItemProjectRelationship = {
  __typename?: 'WorkItemProjectRelationship';
  cursor: Scalars['String']['output'];
  node: Project;
};

export type WorkItemProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type WorkItemProjectUpdateFieldInput = {
  connect?: InputMaybe<WorkItemProjectConnectFieldInput>;
  create?: InputMaybe<WorkItemProjectCreateFieldInput>;
  delete?: InputMaybe<WorkItemProjectDeleteFieldInput>;
  disconnect?: InputMaybe<WorkItemProjectDisconnectFieldInput>;
  update?: InputMaybe<WorkItemProjectUpdateConnectionInput>;
  where?: InputMaybe<WorkItemProjectConnectionWhere>;
};

export type WorkItemRegardingSystemAggregateInput = {
  AND?: InputMaybe<Array<WorkItemRegardingSystemAggregateInput>>;
  NOT?: InputMaybe<WorkItemRegardingSystemAggregateInput>;
  OR?: InputMaybe<Array<WorkItemRegardingSystemAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkItemRegardingSystemNodeAggregationWhereInput>;
};

export type WorkItemRegardingSystemConnectFieldInput = {
  connect?: InputMaybe<SystemConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<SystemConnectWhere>;
};

export type WorkItemRegardingSystemConnection = {
  __typename?: 'WorkItemRegardingSystemConnection';
  edges: Array<WorkItemRegardingSystemRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItemRegardingSystemConnectionSort = {
  node?: InputMaybe<SystemSort>;
};

export type WorkItemRegardingSystemConnectionWhere = {
  AND?: InputMaybe<Array<WorkItemRegardingSystemConnectionWhere>>;
  NOT?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
  OR?: InputMaybe<Array<WorkItemRegardingSystemConnectionWhere>>;
  node?: InputMaybe<SystemWhere>;
};

export type WorkItemRegardingSystemCreateFieldInput = {
  node: SystemCreateInput;
};

export type WorkItemRegardingSystemDeleteFieldInput = {
  delete?: InputMaybe<SystemDeleteInput>;
  where?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
};

export type WorkItemRegardingSystemDisconnectFieldInput = {
  disconnect?: InputMaybe<SystemDisconnectInput>;
  where?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
};

export type WorkItemRegardingSystemFieldInput = {
  connect?: InputMaybe<WorkItemRegardingSystemConnectFieldInput>;
  create?: InputMaybe<WorkItemRegardingSystemCreateFieldInput>;
};

export type WorkItemRegardingSystemNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkItemRegardingSystemNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkItemRegardingSystemNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkItemRegardingSystemNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemRegardingSystemRelationship = {
  __typename?: 'WorkItemRegardingSystemRelationship';
  cursor: Scalars['String']['output'];
  node: System;
};

export type WorkItemRegardingSystemUpdateConnectionInput = {
  node?: InputMaybe<SystemUpdateInput>;
};

export type WorkItemRegardingSystemUpdateFieldInput = {
  connect?: InputMaybe<WorkItemRegardingSystemConnectFieldInput>;
  create?: InputMaybe<WorkItemRegardingSystemCreateFieldInput>;
  delete?: InputMaybe<WorkItemRegardingSystemDeleteFieldInput>;
  disconnect?: InputMaybe<WorkItemRegardingSystemDisconnectFieldInput>;
  update?: InputMaybe<WorkItemRegardingSystemUpdateConnectionInput>;
  where?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
};

export type WorkItemRelationInput = {
  links?: InputMaybe<Array<WorkItemLinksCreateFieldInput>>;
  parent?: InputMaybe<WorkItemParentCreateFieldInput>;
  project?: InputMaybe<WorkItemProjectCreateFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemCreateFieldInput>;
  workItems?: InputMaybe<Array<WorkItemWorkItemsCreateFieldInput>>;
};

/** Fields to sort WorkItems by. The order in which sorts are applied is not guaranteed when specifying many fields in one WorkItemSort object. */
export type WorkItemSort = {
  due?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export enum WorkItemState {
  Active = 'ACTIVE',
  Complete = 'COMPLETE',
  Inactive = 'INACTIVE',
  Syncing = 'SYNCING'
}

export type WorkItemSystemRegardingSystemAggregationSelection = {
  __typename?: 'WorkItemSystemRegardingSystemAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkItemSystemRegardingSystemNodeAggregateSelection>;
};

export type WorkItemSystemRegardingSystemNodeAggregateSelection = {
  __typename?: 'WorkItemSystemRegardingSystemNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export enum WorkItemType {
  Task = 'TASK',
  WorkItem = 'WORK_ITEM'
}

export type WorkItemUpdateInput = {
  due?: InputMaybe<Scalars['Date']['input']>;
  links?: InputMaybe<Array<WorkItemLinksUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<WorkItemParentUpdateFieldInput>;
  project?: InputMaybe<WorkItemProjectUpdateFieldInput>;
  regardingSystem?: InputMaybe<WorkItemRegardingSystemUpdateFieldInput>;
  state?: InputMaybe<WorkItemState>;
  type?: InputMaybe<WorkItemType>;
  workItems?: InputMaybe<Array<WorkItemWorkItemsUpdateFieldInput>>;
};

export type WorkItemWhere = {
  AND?: InputMaybe<Array<WorkItemWhere>>;
  NOT?: InputMaybe<WorkItemWhere>;
  OR?: InputMaybe<Array<WorkItemWhere>>;
  due?: InputMaybe<Scalars['Date']['input']>;
  due_GT?: InputMaybe<Scalars['Date']['input']>;
  due_GTE?: InputMaybe<Scalars['Date']['input']>;
  due_IN?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  due_LT?: InputMaybe<Scalars['Date']['input']>;
  due_LTE?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  linksAggregate?: InputMaybe<WorkItemLinksAggregateInput>;
  /** Return WorkItems where all of the related WorkItemLinksConnections match this filter */
  linksConnection_ALL?: InputMaybe<WorkItemLinksConnectionWhere>;
  /** Return WorkItems where none of the related WorkItemLinksConnections match this filter */
  linksConnection_NONE?: InputMaybe<WorkItemLinksConnectionWhere>;
  /** Return WorkItems where one of the related WorkItemLinksConnections match this filter */
  linksConnection_SINGLE?: InputMaybe<WorkItemLinksConnectionWhere>;
  /** Return WorkItems where some of the related WorkItemLinksConnections match this filter */
  linksConnection_SOME?: InputMaybe<WorkItemLinksConnectionWhere>;
  /** Return WorkItems where all of the related Links match this filter */
  links_ALL?: InputMaybe<LinkWhere>;
  /** Return WorkItems where none of the related Links match this filter */
  links_NONE?: InputMaybe<LinkWhere>;
  /** Return WorkItems where one of the related Links match this filter */
  links_SINGLE?: InputMaybe<LinkWhere>;
  /** Return WorkItems where some of the related Links match this filter */
  links_SOME?: InputMaybe<LinkWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<WorkItemWhere>;
  parentAggregate?: InputMaybe<WorkItemParentAggregateInput>;
  parentConnection?: InputMaybe<WorkItemParentConnectionWhere>;
  parentConnection_NOT?: InputMaybe<WorkItemParentConnectionWhere>;
  parent_NOT?: InputMaybe<WorkItemWhere>;
  project?: InputMaybe<ProjectWhere>;
  projectAggregate?: InputMaybe<WorkItemProjectAggregateInput>;
  projectConnection?: InputMaybe<WorkItemProjectConnectionWhere>;
  projectConnection_NOT?: InputMaybe<WorkItemProjectConnectionWhere>;
  project_NOT?: InputMaybe<ProjectWhere>;
  regardingSystem?: InputMaybe<SystemWhere>;
  regardingSystemAggregate?: InputMaybe<WorkItemRegardingSystemAggregateInput>;
  regardingSystemConnection?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
  regardingSystemConnection_NOT?: InputMaybe<WorkItemRegardingSystemConnectionWhere>;
  regardingSystem_NOT?: InputMaybe<SystemWhere>;
  state?: InputMaybe<WorkItemState>;
  state_IN?: InputMaybe<Array<WorkItemState>>;
  type?: InputMaybe<WorkItemType>;
  type_IN?: InputMaybe<Array<WorkItemType>>;
  workItemsAggregate?: InputMaybe<WorkItemWorkItemsAggregateInput>;
  /** Return WorkItems where all of the related WorkItemWorkItemsConnections match this filter */
  workItemsConnection_ALL?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
  /** Return WorkItems where none of the related WorkItemWorkItemsConnections match this filter */
  workItemsConnection_NONE?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
  /** Return WorkItems where one of the related WorkItemWorkItemsConnections match this filter */
  workItemsConnection_SINGLE?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
  /** Return WorkItems where some of the related WorkItemWorkItemsConnections match this filter */
  workItemsConnection_SOME?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
  /** Return WorkItems where all of the related WorkItems match this filter */
  workItems_ALL?: InputMaybe<WorkItemWhere>;
  /** Return WorkItems where none of the related WorkItems match this filter */
  workItems_NONE?: InputMaybe<WorkItemWhere>;
  /** Return WorkItems where one of the related WorkItems match this filter */
  workItems_SINGLE?: InputMaybe<WorkItemWhere>;
  /** Return WorkItems where some of the related WorkItems match this filter */
  workItems_SOME?: InputMaybe<WorkItemWhere>;
};

export type WorkItemWorkItemParentAggregationSelection = {
  __typename?: 'WorkItemWorkItemParentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkItemWorkItemParentNodeAggregateSelection>;
};

export type WorkItemWorkItemParentNodeAggregateSelection = {
  __typename?: 'WorkItemWorkItemParentNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkItemWorkItemWorkItemsAggregationSelection = {
  __typename?: 'WorkItemWorkItemWorkItemsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<WorkItemWorkItemWorkItemsNodeAggregateSelection>;
};

export type WorkItemWorkItemWorkItemsNodeAggregateSelection = {
  __typename?: 'WorkItemWorkItemWorkItemsNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type WorkItemWorkItemsAggregateInput = {
  AND?: InputMaybe<Array<WorkItemWorkItemsAggregateInput>>;
  NOT?: InputMaybe<WorkItemWorkItemsAggregateInput>;
  OR?: InputMaybe<Array<WorkItemWorkItemsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<WorkItemWorkItemsNodeAggregationWhereInput>;
};

export type WorkItemWorkItemsConnectFieldInput = {
  connect?: InputMaybe<Array<WorkItemConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<WorkItemConnectWhere>;
};

export type WorkItemWorkItemsConnection = {
  __typename?: 'WorkItemWorkItemsConnection';
  edges: Array<WorkItemWorkItemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorkItemWorkItemsConnectionSort = {
  node?: InputMaybe<WorkItemSort>;
};

export type WorkItemWorkItemsConnectionWhere = {
  AND?: InputMaybe<Array<WorkItemWorkItemsConnectionWhere>>;
  NOT?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
  OR?: InputMaybe<Array<WorkItemWorkItemsConnectionWhere>>;
  node?: InputMaybe<WorkItemWhere>;
};

export type WorkItemWorkItemsCreateFieldInput = {
  node: WorkItemCreateInput;
};

export type WorkItemWorkItemsDeleteFieldInput = {
  delete?: InputMaybe<WorkItemDeleteInput>;
  where?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
};

export type WorkItemWorkItemsDisconnectFieldInput = {
  disconnect?: InputMaybe<WorkItemDisconnectInput>;
  where?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
};

export type WorkItemWorkItemsFieldInput = {
  connect?: InputMaybe<Array<WorkItemWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<WorkItemWorkItemsCreateFieldInput>>;
};

export type WorkItemWorkItemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<WorkItemWorkItemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<WorkItemWorkItemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<WorkItemWorkItemsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemWorkItemsRelationship = {
  __typename?: 'WorkItemWorkItemsRelationship';
  cursor: Scalars['String']['output'];
  node: WorkItem;
};

export type WorkItemWorkItemsUpdateConnectionInput = {
  node?: InputMaybe<WorkItemUpdateInput>;
};

export type WorkItemWorkItemsUpdateFieldInput = {
  connect?: InputMaybe<Array<WorkItemWorkItemsConnectFieldInput>>;
  create?: InputMaybe<Array<WorkItemWorkItemsCreateFieldInput>>;
  delete?: InputMaybe<Array<WorkItemWorkItemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<WorkItemWorkItemsDisconnectFieldInput>>;
  update?: InputMaybe<WorkItemWorkItemsUpdateConnectionInput>;
  where?: InputMaybe<WorkItemWorkItemsConnectionWhere>;
};

export type WorkItemsConnection = {
  __typename?: 'WorkItemsConnection';
  edges: Array<WorkItemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TypeformSurveysQueryVariables = Exact<{ [key: string]: never; }>;


export type TypeformSurveysQuery = { __typename?: 'Query', typeformSurveys: Array<{ __typename?: 'TypeformSurvey', typeformId: string, modifiedAt?: string | null, formversion?: number | null }> };

export type TypeformResponsesQueryVariables = Exact<{
  where?: InputMaybe<TypeformResponseWhere>;
}>;


export type TypeformResponsesQuery = { __typename?: 'Query', typeformResponses: Array<{ __typename?: 'TypeformResponse', typeformId: string }> };

export type CreateTypeformSurveysMutationVariables = Exact<{
  input: Array<TypeformSurveyCreateInput> | TypeformSurveyCreateInput;
}>;


export type CreateTypeformSurveysMutation = { __typename?: 'Mutation', createTypeformSurveys: { __typename?: 'CreateTypeformSurveysMutationResponse', typeformSurveys: Array<{ __typename?: 'TypeformSurvey', id: string, title: string, typeformId: string }> } };

export type CreateTypeformResponsesMutationVariables = Exact<{
  input: Array<TypeformResponseCreateInput> | TypeformResponseCreateInput;
}>;


export type CreateTypeformResponsesMutation = { __typename?: 'Mutation', createTypeformResponses: { __typename?: 'CreateTypeformResponsesMutationResponse', info: { __typename?: 'CreateInfo', nodesCreated: number, relationshipsCreated: number } } };

export type UpdateTypeformQuestionsMutationVariables = Exact<{
  where?: InputMaybe<TypeformSurveyWhere>;
  update?: InputMaybe<TypeformSurveyUpdateInput>;
}>;


export type UpdateTypeformQuestionsMutation = { __typename?: 'Mutation', updateTypeformSurveys: { __typename?: 'UpdateTypeformSurveysMutationResponse', info: { __typename?: 'UpdateInfo', nodesCreated: number } } };


export const TypeformSurveysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TypeformSurveys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeformSurveys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeformId"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"formversion"}}]}}]}}]} as unknown as DocumentNode<TypeformSurveysQuery, TypeformSurveysQueryVariables>;
export const TypeformResponsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TypeformResponses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeformResponseWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeformResponses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeformId"}}]}}]}}]} as unknown as DocumentNode<TypeformResponsesQuery, TypeformResponsesQueryVariables>;
export const CreateTypeformSurveysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTypeformSurveys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeformSurveyCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTypeformSurveys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeformSurveys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"typeformId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTypeformSurveysMutation, CreateTypeformSurveysMutationVariables>;
export const CreateTypeformResponsesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTypeformResponses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeformResponseCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTypeformResponses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesCreated"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsCreated"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTypeformResponsesMutation, CreateTypeformResponsesMutationVariables>;
export const UpdateTypeformQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTypeformQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeformSurveyWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeformSurveyUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTypeformSurveys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesCreated"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTypeformQuestionsMutation, UpdateTypeformQuestionsMutationVariables>;