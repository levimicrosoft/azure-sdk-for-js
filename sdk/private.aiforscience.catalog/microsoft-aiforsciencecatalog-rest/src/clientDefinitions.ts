// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  RootListAgentDefinitionsParameters,
  RootListModelDefinitionsParameters,
  RootListToolDefinitionsParameters,
  RootListDataAssetDefinitionsParameters,
  RootListKnowledgeBaseDefinitionsParameters,
  AgentDefinitionsGetAgentDefinitionParameters,
  AgentDefinitionsCreateOrReplaceAgentDefinitionParameters,
  AgentDefinitionsCreateOrUpdateAgentDefinitionParameters,
  AgentDefinitionsDeleteAgentDefinitionParameters,
  AgentDefinitionsListAgentDefinitionsParameters,
  ToolDefinitionsGetToolDefinitionParameters,
  ToolDefinitionsCreateOrReplaceToolDefinitionParameters,
  ToolDefinitionsCreateOrUpdateToolDefinitionParameters,
  ToolDefinitionsDeleteToolDefinitionParameters,
  ToolDefinitionsListToolDefinitionsParameters,
  DataAssetDefinitionsGetDataAssetDefinitionParameters,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionParameters,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionParameters,
  DataAssetDefinitionsDeleteDataAssetDefinitionParameters,
  DataAssetDefinitionsListDataAssetDefinitionsParameters,
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionParameters,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionParameters,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionParameters,
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionParameters,
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsParameters,
  ModelDefinitionsGetModelDefinitionParameters,
  ModelDefinitionsCreateOrReplaceModelDefinitionParameters,
  ModelDefinitionsCreateOrUpdateModelDefinitionParameters,
  ModelDefinitionsDeleteModelDefinitionParameters,
  ModelDefinitionsListModelDefinitionsParameters,
} from "./parameters.js";
import type {
  RootListAgentDefinitions200Response,
  RootListAgentDefinitionsDefaultResponse,
  RootListModelDefinitions200Response,
  RootListModelDefinitionsDefaultResponse,
  RootListToolDefinitions200Response,
  RootListToolDefinitionsDefaultResponse,
  RootListDataAssetDefinitions200Response,
  RootListDataAssetDefinitionsDefaultResponse,
  RootListKnowledgeBaseDefinitions200Response,
  RootListKnowledgeBaseDefinitionsDefaultResponse,
  AgentDefinitionsGetAgentDefinition200Response,
  AgentDefinitionsGetAgentDefinitionDefaultResponse,
  AgentDefinitionsCreateOrReplaceAgentDefinition200Response,
  AgentDefinitionsCreateOrReplaceAgentDefinition201Response,
  AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse,
  AgentDefinitionsCreateOrUpdateAgentDefinition200Response,
  AgentDefinitionsCreateOrUpdateAgentDefinition201Response,
  AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse,
  AgentDefinitionsDeleteAgentDefinition204Response,
  AgentDefinitionsDeleteAgentDefinitionDefaultResponse,
  AgentDefinitionsListAgentDefinitions200Response,
  AgentDefinitionsListAgentDefinitionsDefaultResponse,
  ToolDefinitionsGetToolDefinition200Response,
  ToolDefinitionsGetToolDefinitionDefaultResponse,
  ToolDefinitionsCreateOrReplaceToolDefinition200Response,
  ToolDefinitionsCreateOrReplaceToolDefinition201Response,
  ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse,
  ToolDefinitionsCreateOrUpdateToolDefinition200Response,
  ToolDefinitionsCreateOrUpdateToolDefinition201Response,
  ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse,
  ToolDefinitionsDeleteToolDefinition204Response,
  ToolDefinitionsDeleteToolDefinitionDefaultResponse,
  ToolDefinitionsListToolDefinitions200Response,
  ToolDefinitionsListToolDefinitionsDefaultResponse,
  DataAssetDefinitionsGetDataAssetDefinition200Response,
  DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response,
  DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response,
  DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsDeleteDataAssetDefinition204Response,
  DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse,
  DataAssetDefinitionsListDataAssetDefinitions200Response,
  DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse,
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response,
  KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response,
  KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response,
  KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse,
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response,
  KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse,
  ModelDefinitionsGetModelDefinition200Response,
  ModelDefinitionsGetModelDefinitionDefaultResponse,
  ModelDefinitionsCreateOrReplaceModelDefinition200Response,
  ModelDefinitionsCreateOrReplaceModelDefinition201Response,
  ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse,
  ModelDefinitionsCreateOrUpdateModelDefinition200Response,
  ModelDefinitionsCreateOrUpdateModelDefinition201Response,
  ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse,
  ModelDefinitionsDeleteModelDefinition204Response,
  ModelDefinitionsDeleteModelDefinitionDefaultResponse,
  ModelDefinitionsListModelDefinitions200Response,
  ModelDefinitionsListModelDefinitionsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface RootListAgentDefinitions {
  /** Retrieve a list of agents for all catalogs. */
  get(
    options?: RootListAgentDefinitionsParameters,
  ): StreamableMethod<
    | RootListAgentDefinitions200Response
    | RootListAgentDefinitionsDefaultResponse
  >;
}

export interface RootListModelDefinitions {
  /** Retrieve a list of models for all catalogs. */
  get(
    options?: RootListModelDefinitionsParameters,
  ): StreamableMethod<
    | RootListModelDefinitions200Response
    | RootListModelDefinitionsDefaultResponse
  >;
}

export interface RootListToolDefinitions {
  /** Retrieve a list of tools for all catalogs. */
  get(
    options?: RootListToolDefinitionsParameters,
  ): StreamableMethod<
    RootListToolDefinitions200Response | RootListToolDefinitionsDefaultResponse
  >;
}

export interface RootListDataAssetDefinitions {
  /** Retrieve a list of data assets for all catalogs. */
  get(
    options?: RootListDataAssetDefinitionsParameters,
  ): StreamableMethod<
    | RootListDataAssetDefinitions200Response
    | RootListDataAssetDefinitionsDefaultResponse
  >;
}

export interface RootListKnowledgeBaseDefinitions {
  /** Retrieve a list of knowledge bases for all catalogs. */
  get(
    options?: RootListKnowledgeBaseDefinitionsParameters,
  ): StreamableMethod<
    | RootListKnowledgeBaseDefinitions200Response
    | RootListKnowledgeBaseDefinitionsDefaultResponse
  >;
}

export interface AgentDefinitionsGetAgentDefinition {
  /** Fetch AgentDefinition by name. */
  get(
    options?: AgentDefinitionsGetAgentDefinitionParameters,
  ): StreamableMethod<
    | AgentDefinitionsGetAgentDefinition200Response
    | AgentDefinitionsGetAgentDefinitionDefaultResponse
  >;
  /** Creates an AgentDefinition. */
  put(
    options: AgentDefinitionsCreateOrReplaceAgentDefinitionParameters,
  ): StreamableMethod<
    | AgentDefinitionsCreateOrReplaceAgentDefinition200Response
    | AgentDefinitionsCreateOrReplaceAgentDefinition201Response
    | AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse
  >;
  /** Updates an AgentDefinition. */
  patch(
    options: AgentDefinitionsCreateOrUpdateAgentDefinitionParameters,
  ): StreamableMethod<
    | AgentDefinitionsCreateOrUpdateAgentDefinition200Response
    | AgentDefinitionsCreateOrUpdateAgentDefinition201Response
    | AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse
  >;
  /** Delete an AgentDefinition. */
  delete(
    options?: AgentDefinitionsDeleteAgentDefinitionParameters,
  ): StreamableMethod<
    | AgentDefinitionsDeleteAgentDefinition204Response
    | AgentDefinitionsDeleteAgentDefinitionDefaultResponse
  >;
}

export interface AgentDefinitionsListAgentDefinitions {
  /** List AgentDefinition resources */
  get(
    options?: AgentDefinitionsListAgentDefinitionsParameters,
  ): StreamableMethod<
    | AgentDefinitionsListAgentDefinitions200Response
    | AgentDefinitionsListAgentDefinitionsDefaultResponse
  >;
}

export interface ToolDefinitionsGetToolDefinition {
  /** Fetch a ToolDefinition by name. */
  get(
    options?: ToolDefinitionsGetToolDefinitionParameters,
  ): StreamableMethod<
    | ToolDefinitionsGetToolDefinition200Response
    | ToolDefinitionsGetToolDefinitionDefaultResponse
  >;
  /** Creates a ToolDefinition. */
  put(
    options: ToolDefinitionsCreateOrReplaceToolDefinitionParameters,
  ): StreamableMethod<
    | ToolDefinitionsCreateOrReplaceToolDefinition200Response
    | ToolDefinitionsCreateOrReplaceToolDefinition201Response
    | ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse
  >;
  /** Update a ToolDefinition. */
  patch(
    options: ToolDefinitionsCreateOrUpdateToolDefinitionParameters,
  ): StreamableMethod<
    | ToolDefinitionsCreateOrUpdateToolDefinition200Response
    | ToolDefinitionsCreateOrUpdateToolDefinition201Response
    | ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse
  >;
  /** Delete a ToolDefinition. */
  delete(
    options?: ToolDefinitionsDeleteToolDefinitionParameters,
  ): StreamableMethod<
    | ToolDefinitionsDeleteToolDefinition204Response
    | ToolDefinitionsDeleteToolDefinitionDefaultResponse
  >;
}

export interface ToolDefinitionsListToolDefinitions {
  /** List ToolDefinition resources */
  get(
    options?: ToolDefinitionsListToolDefinitionsParameters,
  ): StreamableMethod<
    | ToolDefinitionsListToolDefinitions200Response
    | ToolDefinitionsListToolDefinitionsDefaultResponse
  >;
}

export interface DataAssetDefinitionsGetDataAssetDefinition {
  /** Fetch a DataAssetDefinition by name. */
  get(
    options?: DataAssetDefinitionsGetDataAssetDefinitionParameters,
  ): StreamableMethod<
    | DataAssetDefinitionsGetDataAssetDefinition200Response
    | DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse
  >;
  /** Create a DataAssetDefinition. */
  put(
    options: DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionParameters,
  ): StreamableMethod<
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse
  >;
  /** Update DataAssetDefinition. */
  patch(
    options: DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionParameters,
  ): StreamableMethod<
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response
    | DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse
  >;
  /** Delete a DataAssetDefinition. */
  delete(
    options?: DataAssetDefinitionsDeleteDataAssetDefinitionParameters,
  ): StreamableMethod<
    | DataAssetDefinitionsDeleteDataAssetDefinition204Response
    | DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse
  >;
}

export interface DataAssetDefinitionsListDataAssetDefinitions {
  /** List DataAssetDefinition resources */
  get(
    options?: DataAssetDefinitionsListDataAssetDefinitionsParameters,
  ): StreamableMethod<
    | DataAssetDefinitionsListDataAssetDefinitions200Response
    | DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse
  >;
}

export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition {
  /** Fetch KnowledgeBaseDefinition by name. */
  get(
    options?: KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionParameters,
  ): StreamableMethod<
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse
  >;
  /** Creates a KnowledgeBaseDefinition. */
  put(
    options: KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionParameters,
  ): StreamableMethod<
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse
  >;
  /** Updates KnowledgeBaseDefinition. */
  patch(
    options: KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionParameters,
  ): StreamableMethod<
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response
    | KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse
  >;
  /** Delete KnowledgeBaseDefinition. */
  delete(
    options?: KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionParameters,
  ): StreamableMethod<
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response
    | KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse
  >;
}

export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions {
  /** List KnowledgeBaseDefinition resources */
  get(
    options?: KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsParameters,
  ): StreamableMethod<
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response
    | KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse
  >;
}

export interface ModelDefinitionsGetModelDefinition {
  /** Fetch a ModelDefinition by name. */
  get(
    options?: ModelDefinitionsGetModelDefinitionParameters,
  ): StreamableMethod<
    | ModelDefinitionsGetModelDefinition200Response
    | ModelDefinitionsGetModelDefinitionDefaultResponse
  >;
  /** Creates a ModelDefinition. */
  put(
    options: ModelDefinitionsCreateOrReplaceModelDefinitionParameters,
  ): StreamableMethod<
    | ModelDefinitionsCreateOrReplaceModelDefinition200Response
    | ModelDefinitionsCreateOrReplaceModelDefinition201Response
    | ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse
  >;
  /** Updates ModelDefinition. */
  patch(
    options: ModelDefinitionsCreateOrUpdateModelDefinitionParameters,
  ): StreamableMethod<
    | ModelDefinitionsCreateOrUpdateModelDefinition200Response
    | ModelDefinitionsCreateOrUpdateModelDefinition201Response
    | ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse
  >;
  /** Delete a ModelDefinition. */
  delete(
    options?: ModelDefinitionsDeleteModelDefinitionParameters,
  ): StreamableMethod<
    | ModelDefinitionsDeleteModelDefinition204Response
    | ModelDefinitionsDeleteModelDefinitionDefaultResponse
  >;
}

export interface ModelDefinitionsListModelDefinitions {
  /** List ModelDefinition resources */
  get(
    options?: ModelDefinitionsListModelDefinitionsParameters,
  ): StreamableMethod<
    | ModelDefinitionsListModelDefinitions200Response
    | ModelDefinitionsListModelDefinitionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/agentDefinitions' has methods for the following verbs: get */
  (path: "/agentDefinitions"): RootListAgentDefinitions;
  /** Resource for '/modelDefinitions' has methods for the following verbs: get */
  (path: "/modelDefinitions"): RootListModelDefinitions;
  /** Resource for '/toolDefinitions' has methods for the following verbs: get */
  (path: "/toolDefinitions"): RootListToolDefinitions;
  /** Resource for '/dataAssetDefinitions' has methods for the following verbs: get */
  (path: "/dataAssetDefinitions"): RootListDataAssetDefinitions;
  /** Resource for '/knowledgeBaseDefinitions' has methods for the following verbs: get */
  (path: "/knowledgeBaseDefinitions"): RootListKnowledgeBaseDefinitions;
  /** Resource for '/catalogs/\{catalogName\}/agentDefinitions/\{agentName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/catalogs/{catalogName}/agentDefinitions/{agentName}",
    catalogName: string,
    agentName: string,
  ): AgentDefinitionsGetAgentDefinition;
  /** Resource for '/catalogs/\{catalogName\}/agentDefinitions' has methods for the following verbs: get */
  (
    path: "/catalogs/{catalogName}/agentDefinitions",
    catalogName: string,
  ): AgentDefinitionsListAgentDefinitions;
  /** Resource for '/catalogs/\{catalogName\}/toolDefinitions/\{toolName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/catalogs/{catalogName}/toolDefinitions/{toolName}",
    catalogName: string,
    toolName: string,
  ): ToolDefinitionsGetToolDefinition;
  /** Resource for '/catalogs/\{catalogName\}/toolDefinitions' has methods for the following verbs: get */
  (
    path: "/catalogs/{catalogName}/toolDefinitions",
    catalogName: string,
  ): ToolDefinitionsListToolDefinitions;
  /** Resource for '/catalogs/\{catalogName\}/dataAssetDefinitions/\{dataAssetName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/catalogs/{catalogName}/dataAssetDefinitions/{dataAssetName}",
    catalogName: string,
    dataAssetName: string,
  ): DataAssetDefinitionsGetDataAssetDefinition;
  /** Resource for '/catalogs/\{catalogName\}/dataAssetDefinitions' has methods for the following verbs: get */
  (
    path: "/catalogs/{catalogName}/dataAssetDefinitions",
    catalogName: string,
  ): DataAssetDefinitionsListDataAssetDefinitions;
  /** Resource for '/catalogs/\{catalogName\}/knowledgeBaseDefinitions/\{knowledgeBaseName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/catalogs/{catalogName}/knowledgeBaseDefinitions/{knowledgeBaseName}",
    catalogName: string,
    knowledgeBaseName: string,
  ): KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition;
  /** Resource for '/catalogs/\{catalogName\}/knowledgeBaseDefinitions' has methods for the following verbs: get */
  (
    path: "/catalogs/{catalogName}/knowledgeBaseDefinitions",
    catalogName: string,
  ): KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions;
  /** Resource for '/catalogs/\{catalogName\}/modelDefinitions/\{modelName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/catalogs/{catalogName}/modelDefinitions/{modelName}",
    catalogName: string,
    modelName: string,
  ): ModelDefinitionsGetModelDefinition;
  /** Resource for '/catalogs/\{catalogName\}/modelDefinitions' has methods for the following verbs: get */
  (
    path: "/catalogs/{catalogName}/modelDefinitions",
    catalogName: string,
  ): ModelDefinitionsListModelDefinitions;
}

export type AiForScienceCatalogClient = Client & {
  path: Routes;
};
