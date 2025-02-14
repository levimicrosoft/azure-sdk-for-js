// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Definition of Tag */
export interface Tag {
  /** Property key */
  key?: string;
  /** Property value */
  value?: string;
}

/** Reference to a resource. */
export interface ResourceReference {
  /** Resource ID */
  id: string;
}

/** A version. */
export interface KnowledgeBaseVersion {
  /** The tags */
  tags?: Array<Tag>;
  /** Input catalogs to index. */
  dataAssets: Array<ResourceReference>;
}

/** Node pool identifier */
export interface WithNodePool {
  /** Node pool ID */
  nodePoolId: string;
}

/** Input to an investigation */
export interface Input {
  /** Value of the input */
  value: string;
  /** Name used to identify the input */
  name: string;
  /**
   * Input type
   *
   * Possible values: "AzureBlobUri"
   */
  type: InputType;
  /** The properties derived from pre-processing the input */
  properties?: string[];
}

/** A investigation. */
export interface InvestigationWithYaml {
  /** The description */
  description: string;
  /** The tags */
  tags?: Array<Tag>;
  /** The title */
  title: string;
  /** The plan Blueprint as YAML */
  planBlueprintYaml?: string;
}

/** Run parameters. */
export interface RunParams {
  /**
   * The mode of the plan run
   *
   * Possible values: "RunAll", "PauseAfterStep"
   */
  runMode?: RunMode;
  /**
   * Caching behavior
   *
   * Possible values: "Cache", "NoCache"
   */
  cacheMode: RunCacheMode;
}

/** For run name */
export interface WithRunName {
  /** The name of the run containing the inputs and plan you wish to clone */
  runName?: string;
}

/** Input to an investigation */
export interface InputBase {
  /** Value of the input */
  value: string;
  /** Name used to identify the input */
  name: string;
  /**
   * Input type
   *
   * Possible values: "AzureBlobUri"
   */
  type: InputType;
}

/** For adding Input name */
export interface WithInputName {
  /** Name used to identify the input */
  name: string;
}

/** File upload */
export interface FileUpload {}

/** Copilot operation */
export interface CopilotOperation {}

/** A conversation. */
export interface Conversation {
  /** The title */
  title: string;
}

/** An execution of a ScientificTool */
export interface ExecutionRequest {
  /** The action ID, as defined in the tool's Catalog definition. */
  actionId: string;
  /** The parameters of the execution. */
  parameters?: Array<Parameter>;
  /** Handles to the input data to use for this execution. */
  inputHandles?: Record<string, DataHandle>;
  /** Handles to the output locations for this execution */
  outputHandles?: Array<DataHandle>;
  /** IDs of NodePools to use for this execution. */
  nodePoolIds: Array<ResourceReference>;
  /** The shared storage to use for this execution. */
  sharedStorage: ResourceReference;
}

/** Parameter model for executions */
export interface Parameter {
  /** The name of the parameter. */
  name: string;
  /** The value of the parameter. */
  value: string;
}

/** A Data handle referring to an input or output of a execution */
export interface DataHandle {
  /**
   * The type of the input handle.
   *
   * Possible values: "SharedStorage", "DataAsset", "BlobStorage"
   */
  handleType: HandleType;
  /** Location of the input data. */
  location: string;
}

/** Alias for IndexingStatus */
export type IndexingStatus = string;
/** Alias for InputType */
export type InputType = string;
/** Alias for InvestigationStatus */
export type InvestigationStatus = string;
/** Alias for RunMode */
export type RunMode = string;
/** Alias for RunCacheMode */
export type RunCacheMode = string;
/** Alias for HandleType */
export type HandleType = string;
/** The Microsoft.AiForScienceWorkspace service versions. */
export type Versions = "2024-12-01-preview";
