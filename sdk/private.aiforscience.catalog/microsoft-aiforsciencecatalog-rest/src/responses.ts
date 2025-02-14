// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  PagedAgentDefinitionAnyCatalogOutput,
  PagedModelDefinitionAnyCatalogOutput,
  PagedToolDefinitionAnyCatalogOutput,
  PagedDataAssetsDefinitionAnyCatalogOutput,
  PagedKnowledgeBaseDefinitionAnyCatalogOutput,
  AgentDefinitionOutput,
  TagOutput,
  VerticalOutput,
  AgentDefinitionAttributesOutput,
  PagedAgentDefinitionOutput,
  ToolDefinitionOutput,
  ToolDefinitionAttributesOutput,
  PagedToolDefinitionOutput,
  DataAssetDefinitionOutput,
  DataAssetDefinitionAttributesOutput,
  PagedDataAssetDefinitionOutput,
  KnowledgeBaseDefinitionOutput,
  KnowledgeBaseDefinitionAttributesOutput,
  PagedKnowledgeBaseDefinitionOutput,
  ModelDefinitionOutput,
  ModelDefinitionAttributesOutput,
  PagedModelDefinitionOutput,
} from "./outputModels.js";

export interface RootListAgentDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RootListAgentDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedAgentDefinitionAnyCatalogOutput;
  headers: RawHttpHeaders & RootListAgentDefinitions200Headers;
}

export interface RootListAgentDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RootListAgentDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RootListAgentDefinitionsDefaultHeaders;
}

export interface RootListModelDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RootListModelDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedModelDefinitionAnyCatalogOutput;
  headers: RawHttpHeaders & RootListModelDefinitions200Headers;
}

export interface RootListModelDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RootListModelDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RootListModelDefinitionsDefaultHeaders;
}

export interface RootListToolDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RootListToolDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedToolDefinitionAnyCatalogOutput;
  headers: RawHttpHeaders & RootListToolDefinitions200Headers;
}

export interface RootListToolDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RootListToolDefinitionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RootListToolDefinitionsDefaultHeaders;
}

export interface RootListDataAssetDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RootListDataAssetDefinitions200Response extends HttpResponse {
  status: "200";
  body: PagedDataAssetsDefinitionAnyCatalogOutput;
  headers: RawHttpHeaders & RootListDataAssetDefinitions200Headers;
}

export interface RootListDataAssetDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RootListDataAssetDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RootListDataAssetDefinitionsDefaultHeaders;
}

export interface RootListKnowledgeBaseDefinitions200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface RootListKnowledgeBaseDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedKnowledgeBaseDefinitionAnyCatalogOutput;
  headers: RawHttpHeaders & RootListKnowledgeBaseDefinitions200Headers;
}

export interface RootListKnowledgeBaseDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RootListKnowledgeBaseDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RootListKnowledgeBaseDefinitionsDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentDefinitionsGetAgentDefinition200Response
  extends HttpResponse {
  status: "200";
  body: AgentDefinitionOutput;
}

export interface AgentDefinitionsGetAgentDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentDefinitionsGetAgentDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentDefinitionsGetAgentDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentDefinitionsCreateOrReplaceAgentDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: AgentDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AgentDefinitionsCreateOrReplaceAgentDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: AgentDefinitionAttributesOutput;
  };
}

export interface AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AgentDefinitionsCreateOrReplaceAgentDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentDefinitionsCreateOrUpdateAgentDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: AgentDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AgentDefinitionsCreateOrUpdateAgentDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: AgentDefinitionAttributesOutput;
  };
}

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    AgentDefinitionsCreateOrUpdateAgentDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface AgentDefinitionsListAgentDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedAgentDefinitionOutput;
}

export interface AgentDefinitionsListAgentDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentDefinitionsListAgentDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentDefinitionsListAgentDefinitionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AgentDefinitionsDeleteAgentDefinition204Response
  extends HttpResponse {
  status: "204";
}

export interface AgentDefinitionsDeleteAgentDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AgentDefinitionsDeleteAgentDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AgentDefinitionsDeleteAgentDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ToolDefinitionsGetToolDefinition200Response
  extends HttpResponse {
  status: "200";
  body: ToolDefinitionOutput;
}

export interface ToolDefinitionsGetToolDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ToolDefinitionsGetToolDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ToolDefinitionsGetToolDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ToolDefinitionsCreateOrReplaceToolDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ToolDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ToolDefinitionsCreateOrReplaceToolDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ToolDefinitionAttributesOutput;
  };
}

export interface ToolDefinitionsCreateOrReplaceToolDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ToolDefinitionsCreateOrReplaceToolDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ToolDefinitionsCreateOrReplaceToolDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ToolDefinitionsCreateOrUpdateToolDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ToolDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ToolDefinitionsCreateOrUpdateToolDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ToolDefinitionAttributesOutput;
  };
}

export interface ToolDefinitionsCreateOrUpdateToolDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ToolDefinitionsCreateOrUpdateToolDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ToolDefinitionsCreateOrUpdateToolDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ToolDefinitionsListToolDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedToolDefinitionOutput;
}

export interface ToolDefinitionsListToolDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ToolDefinitionsListToolDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ToolDefinitionsListToolDefinitionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ToolDefinitionsDeleteToolDefinition204Response
  extends HttpResponse {
  status: "204";
}

export interface ToolDefinitionsDeleteToolDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ToolDefinitionsDeleteToolDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ToolDefinitionsDeleteToolDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface DataAssetDefinitionsGetDataAssetDefinition200Response
  extends HttpResponse {
  status: "200";
  body: DataAssetDefinitionOutput;
}

export interface DataAssetDefinitionsGetDataAssetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DataAssetDefinitionsGetDataAssetDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DataAssetDefinitionsGetDataAssetDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: DataAssetDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: DataAssetDefinitionAttributesOutput;
  };
}

export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DataAssetDefinitionsCreateOrReplaceDataAssetDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: DataAssetDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: DataAssetDefinitionAttributesOutput;
  };
}

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DataAssetDefinitionsCreateOrUpdateDataAssetDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface DataAssetDefinitionsListDataAssetDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedDataAssetDefinitionOutput;
}

export interface DataAssetDefinitionsListDataAssetDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DataAssetDefinitionsListDataAssetDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DataAssetDefinitionsListDataAssetDefinitionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DataAssetDefinitionsDeleteDataAssetDefinition204Response
  extends HttpResponse {
  status: "204";
}

export interface DataAssetDefinitionsDeleteDataAssetDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DataAssetDefinitionsDeleteDataAssetDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    DataAssetDefinitionsDeleteDataAssetDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinition200Response
  extends HttpResponse {
  status: "200";
  body: KnowledgeBaseDefinitionOutput;
}

export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseDefinitionsGetKnowledgeBaseDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: KnowledgeBaseDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: KnowledgeBaseDefinitionAttributesOutput;
  };
}

export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseDefinitionsCreateOrReplaceKnowledgeBaseDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: KnowledgeBaseDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: KnowledgeBaseDefinitionAttributesOutput;
  };
}

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseDefinitionsCreateOrUpdateKnowledgeBaseDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedKnowledgeBaseDefinitionOutput;
}

export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseDefinitionsListKnowledgeBaseDefinitionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinition204Response
  extends HttpResponse {
  status: "204";
}

export interface KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    KnowledgeBaseDefinitionsDeleteKnowledgeBaseDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ModelDefinitionsGetModelDefinition200Response
  extends HttpResponse {
  status: "200";
  body: ModelDefinitionOutput;
}

export interface ModelDefinitionsGetModelDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ModelDefinitionsGetModelDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ModelDefinitionsGetModelDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ModelDefinitionsCreateOrReplaceModelDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ModelDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ModelDefinitionsCreateOrReplaceModelDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ModelDefinitionAttributesOutput;
  };
}

export interface ModelDefinitionsCreateOrReplaceModelDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ModelDefinitionsCreateOrReplaceModelDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ModelDefinitionsCreateOrReplaceModelDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ModelDefinitionsCreateOrUpdateModelDefinition200Response
  extends HttpResponse {
  status: "200";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ModelDefinitionAttributesOutput;
  };
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ModelDefinitionsCreateOrUpdateModelDefinition201Response
  extends HttpResponse {
  status: "201";
  body: {
    name: string;
    id: string;
    author: string;
    tags?: Array<TagOutput>;
    vertical: VerticalOutput;
    attributes: ModelDefinitionAttributesOutput;
  };
}

export interface ModelDefinitionsCreateOrUpdateModelDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ModelDefinitionsCreateOrUpdateModelDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    ModelDefinitionsCreateOrUpdateModelDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface ModelDefinitionsListModelDefinitions200Response
  extends HttpResponse {
  status: "200";
  body: PagedModelDefinitionOutput;
}

export interface ModelDefinitionsListModelDefinitionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ModelDefinitionsListModelDefinitionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ModelDefinitionsListModelDefinitionsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ModelDefinitionsDeleteModelDefinition204Response
  extends HttpResponse {
  status: "204";
}

export interface ModelDefinitionsDeleteModelDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ModelDefinitionsDeleteModelDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ModelDefinitionsDeleteModelDefinitionDefaultHeaders;
}
