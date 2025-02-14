// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  AgentDefinitionWithYaml,
  ToolDefinitionWithYaml,
  DataAssetDefinitionWithYaml,
  KnowledgeBaseDefinitionWithYaml,
  ModelDefinitionWithYaml,
} from "./models.js";

export interface RootListAgentDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RootListAgentDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RootListAgentDefinitionsQueryParam {
  queryParameters: RootListAgentDefinitionsQueryParamProperties;
}

export interface RootListAgentDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & RootListAgentDefinitionsHeaders;
}

export type RootListAgentDefinitionsParameters =
  RootListAgentDefinitionsQueryParam &
    RootListAgentDefinitionsHeaderParam &
    RequestParameters;

export interface RootListModelDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RootListModelDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RootListModelDefinitionsQueryParam {
  queryParameters: RootListModelDefinitionsQueryParamProperties;
}

export interface RootListModelDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & RootListModelDefinitionsHeaders;
}

export type RootListModelDefinitionsParameters =
  RootListModelDefinitionsQueryParam &
    RootListModelDefinitionsHeaderParam &
    RequestParameters;

export interface RootListToolDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RootListToolDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RootListToolDefinitionsQueryParam {
  queryParameters: RootListToolDefinitionsQueryParamProperties;
}

export interface RootListToolDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & RootListToolDefinitionsHeaders;
}

export type RootListToolDefinitionsParameters =
  RootListToolDefinitionsQueryParam &
    RootListToolDefinitionsHeaderParam &
    RequestParameters;

export interface RootListDataAssetDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RootListDataAssetDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RootListDataAssetDefinitionsQueryParam {
  queryParameters: RootListDataAssetDefinitionsQueryParamProperties;
}

export interface RootListDataAssetDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & RootListDataAssetDefinitionsHeaders;
}

export type RootListDataAssetDefinitionsParameters =
  RootListDataAssetDefinitionsQueryParam &
    RootListDataAssetDefinitionsHeaderParam &
    RequestParameters;

export interface RootListKnowledgeBaseDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface RootListKnowledgeBaseDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface RootListKnowledgeBaseDefinitionsQueryParam {
  queryParameters: RootListKnowledgeBaseDefinitionsQueryParamProperties;
}

export interface RootListKnowledgeBaseDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & RootListKnowledgeBaseDefinitionsHeaders;
}

export type RootListKnowledgeBaseDefinitionsParameters =
  RootListKnowledgeBaseDefinitionsQueryParam &
    RootListKnowledgeBaseDefinitionsHeaderParam &
    RequestParameters;

export interface AgentDefinitionsGetAgentDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentDefinitionsGetAgentDefinitionQueryParam {
  queryParameters: AgentDefinitionsGetAgentDefinitionQueryParamProperties;
}

export type AgentDefinitionsGetAgentDefinitionParameters =
  AgentDefinitionsGetAgentDefinitionQueryParam & RequestParameters;

export interface AgentDefinitionsCreateOrReplaceAgentDefinitionBodyParam {
  /** The resource instance. */
  body: AgentDefinitionWithYaml;
}

export interface AgentDefinitionsCreateOrReplaceAgentDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentDefinitionsCreateOrReplaceAgentDefinitionQueryParam {
  queryParameters: AgentDefinitionsCreateOrReplaceAgentDefinitionQueryParamProperties;
}

export type AgentDefinitionsCreateOrReplaceAgentDefinitionParameters =
  AgentDefinitionsCreateOrReplaceAgentDefinitionQueryParam &
    AgentDefinitionsCreateOrReplaceAgentDefinitionBodyParam &
    RequestParameters;
/** The resource instance. */
export type AgentDefinitionWithYamlResourceMergeAndPatch =
  Partial<AgentDefinitionWithYaml>;

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionBodyParam {
  /** The resource instance. */
  body: AgentDefinitionWithYamlResourceMergeAndPatch;
}

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionQueryParam {
  queryParameters: AgentDefinitionsCreateOrUpdateAgentDefinitionQueryParamProperties;
}

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type AgentDefinitionsCreateOrUpdateAgentDefinitionParameters =
  AgentDefinitionsCreateOrUpdateAgentDefinitionQueryParam &
    AgentDefinitionsCreateOrUpdateAgentDefinitionMediaTypesParam &
    AgentDefinitionsCreateOrUpdateAgentDefinitionBodyParam &
    RequestParameters;

export interface AgentDefinitionsListAgentDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentDefinitionsListAgentDefinitionsQueryParam {
  queryParameters: AgentDefinitionsListAgentDefinitionsQueryParamProperties;
}

export type AgentDefinitionsListAgentDefinitionsParameters =
  AgentDefinitionsListAgentDefinitionsQueryParam & RequestParameters;

export interface AgentDefinitionsDeleteAgentDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface AgentDefinitionsDeleteAgentDefinitionQueryParam {
  queryParameters: AgentDefinitionsDeleteAgentDefinitionQueryParamProperties;
}

export type AgentDefinitionsDeleteAgentDefinitionParameters =
  AgentDefinitionsDeleteAgentDefinitionQueryParam & RequestParameters;

export interface ToolDefinitionsGetToolDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ToolDefinitionsGetToolDefinitionQueryParam {
  queryParameters: ToolDefinitionsGetToolDefinitionQueryParamProperties;
}

export type ToolDefinitionsGetToolDefinitionParameters =
  ToolDefinitionsGetToolDefinitionQueryParam & RequestParameters;

export interface ToolDefinitionsCreateOrReplaceToolDefinitionBodyParam {
  /** The resource instance. */
  body: ToolDefinitionWithYaml;
}

export interface ToolDefinitionsCreateOrReplaceToolDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ToolDefinitionsCreateOrReplaceToolDefinitionQueryParam {
  queryParameters: ToolDefinitionsCreateOrReplaceToolDefinitionQueryParamProperties;
}

export type ToolDefinitionsCreateOrReplaceToolDefinitionParameters =
  ToolDefinitionsCreateOrReplaceToolDefinitionQueryParam &
    ToolDefinitionsCreateOrReplaceToolDefinitionBodyParam &
    RequestParameters;
/** The resource instance. */
export type ToolDefinitionWithYamlResourceMergeAndPatch =
  Partial<ToolDefinitionWithYaml>;

export interface ToolDefinitionsCreateOrUpdateToolDefinitionBodyParam {
  /** The resource instance. */
  body: ToolDefinitionWithYamlResourceMergeAndPatch;
}

export interface ToolDefinitionsCreateOrUpdateToolDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ToolDefinitionsCreateOrUpdateToolDefinitionQueryParam {
  queryParameters: ToolDefinitionsCreateOrUpdateToolDefinitionQueryParamProperties;
}

export interface ToolDefinitionsCreateOrUpdateToolDefinitionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ToolDefinitionsCreateOrUpdateToolDefinitionParameters =
  ToolDefinitionsCreateOrUpdateToolDefinitionQueryParam &
    ToolDefinitionsCreateOrUpdateToolDefinitionMediaTypesParam &
    ToolDefinitionsCreateOrUpdateToolDefinitionBodyParam &
    RequestParameters;

export interface ToolDefinitionsListToolDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ToolDefinitionsListToolDefinitionsQueryParam {
  queryParameters: ToolDefinitionsListToolDefinitionsQueryParamProperties;
}

export type ToolDefinitionsListToolDefinitionsParameters =
  ToolDefinitionsListToolDefinitionsQueryParam & RequestParameters;

export interface ToolDefinitionsDeleteToolDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ToolDefinitionsDeleteToolDefinitionQueryParam {
  queryParameters: ToolDefinitionsDeleteToolDefinitionQueryParamProperties;
}

export type ToolDefinitionsDeleteToolDefinitionParameters =
  ToolDefinitionsDeleteToolDefinitionQueryParam & RequestParameters;

export interface DataAssetDefinitionsGetDataAssetDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DataAssetDefinitionsGetDataAssetDefinitionQueryParam {
  queryParameters: DataAssetDefinitionsGetDataAssetDefinitionQueryParamProperties;
}

export type DataAssetDefinitionsGetDataAssetDefinitionParameters =
  DataAssetDefinitionsGetDataAssetDefinitionQueryParam & RequestParameters;

export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionBodyParam {
  /** The resource instance. */
  body: DataAssetDefinitionWithYaml;
}

export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionQueryParam {
  queryParameters: DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionQueryParamProperties;
}

export type DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionParameters =
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionQueryParam &
    DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionBodyParam &
    RequestParameters;
/** The resource instance. */
export type DataAssetDefinitionWithYamlResourceMergeAndPatch =
  Partial<DataAssetDefinitionWithYaml>;

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionBodyParam {
  /** The resource instance. */
  body: DataAssetDefinitionWithYamlResourceMergeAndPatch;
}

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionQueryParam {
  queryParameters: DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionQueryParamProperties;
}

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionParameters =
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionQueryParam &
    DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionMediaTypesParam &
    DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionBodyParam &
    RequestParameters;

export interface DataAssetDefinitionsListDataAssetDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DataAssetDefinitionsListDataAssetDefinitionsQueryParam {
  queryParameters: DataAssetDefinitionsListDataAssetDefinitionsQueryParamProperties;
}

export type DataAssetDefinitionsListDataAssetDefinitionsParameters =
  DataAssetDefinitionsListDataAssetDefinitionsQueryParam & RequestParameters;

export interface DataAssetDefinitionsDeleteDataAssetDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface DataAssetDefinitionsDeleteDataAssetDefinitionQueryParam {
  queryParameters: DataAssetDefinitionsDeleteDataAssetDefinitionQueryParamProperties;
}

export type DataAssetDefinitionsDeleteDataAssetDefinitionParameters =
  DataAssetDefinitionsDeleteDataAssetDefinitionQueryParam & RequestParameters;

export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionQueryParam {
  queryParameters: KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionQueryParamProperties;
}

export type KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionParameters =
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionQueryParam &
    RequestParameters;

export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionBodyParam {
  /** The resource instance. */
  body: KnowledgeBaseDefinitionWithYaml;
}

export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionQueryParam {
  queryParameters: KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionQueryParamProperties;
}

export type KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionParameters =
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionQueryParam &
    KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionBodyParam &
    RequestParameters;
/** The resource instance. */
export type KnowledgeBaseDefinitionWithYamlResourceMergeAndPatch =
  Partial<KnowledgeBaseDefinitionWithYaml>;

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionBodyParam {
  /** The resource instance. */
  body: KnowledgeBaseDefinitionWithYamlResourceMergeAndPatch;
}

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionQueryParam {
  queryParameters: KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionQueryParamProperties;
}

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionParameters =
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionQueryParam &
    KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionMediaTypesParam &
    KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionBodyParam &
    RequestParameters;

export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsQueryParam {
  queryParameters: KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsQueryParamProperties;
}

export type KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsParameters =
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsQueryParam &
    RequestParameters;

export interface KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionQueryParam {
  queryParameters: KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionQueryParamProperties;
}

export type KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionParameters =
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionQueryParam &
    RequestParameters;

export interface ModelDefinitionsGetModelDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ModelDefinitionsGetModelDefinitionQueryParam {
  queryParameters: ModelDefinitionsGetModelDefinitionQueryParamProperties;
}

export type ModelDefinitionsGetModelDefinitionParameters =
  ModelDefinitionsGetModelDefinitionQueryParam & RequestParameters;

export interface ModelDefinitionsCreateOrReplaceModelDefinitionBodyParam {
  /** The resource instance. */
  body: ModelDefinitionWithYaml;
}

export interface ModelDefinitionsCreateOrReplaceModelDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ModelDefinitionsCreateOrReplaceModelDefinitionQueryParam {
  queryParameters: ModelDefinitionsCreateOrReplaceModelDefinitionQueryParamProperties;
}

export type ModelDefinitionsCreateOrReplaceModelDefinitionParameters =
  ModelDefinitionsCreateOrReplaceModelDefinitionQueryParam &
    ModelDefinitionsCreateOrReplaceModelDefinitionBodyParam &
    RequestParameters;
/** The resource instance. */
export type ModelDefinitionWithYamlResourceMergeAndPatch =
  Partial<ModelDefinitionWithYaml>;

export interface ModelDefinitionsCreateOrUpdateModelDefinitionBodyParam {
  /** The resource instance. */
  body: ModelDefinitionWithYamlResourceMergeAndPatch;
}

export interface ModelDefinitionsCreateOrUpdateModelDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ModelDefinitionsCreateOrUpdateModelDefinitionQueryParam {
  queryParameters: ModelDefinitionsCreateOrUpdateModelDefinitionQueryParamProperties;
}

export interface ModelDefinitionsCreateOrUpdateModelDefinitionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ModelDefinitionsCreateOrUpdateModelDefinitionParameters =
  ModelDefinitionsCreateOrUpdateModelDefinitionQueryParam &
    ModelDefinitionsCreateOrUpdateModelDefinitionMediaTypesParam &
    ModelDefinitionsCreateOrUpdateModelDefinitionBodyParam &
    RequestParameters;

export interface ModelDefinitionsListModelDefinitionsQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ModelDefinitionsListModelDefinitionsQueryParam {
  queryParameters: ModelDefinitionsListModelDefinitionsQueryParamProperties;
}

export type ModelDefinitionsListModelDefinitionsParameters =
  ModelDefinitionsListModelDefinitionsQueryParam & RequestParameters;

export interface ModelDefinitionsDeleteModelDefinitionQueryParamProperties {
  /** The API version to use for this operation. */
  "api-version": string;
}

export interface ModelDefinitionsDeleteModelDefinitionQueryParam {
  queryParameters: ModelDefinitionsDeleteModelDefinitionQueryParamProperties;
}

export type ModelDefinitionsDeleteModelDefinitionParameters =
  ModelDefinitionsDeleteModelDefinitionQueryParam & RequestParameters;
