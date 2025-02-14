// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ErrorModel } from "@azure-rest/core-client";

/** Paged collection of KnowledgeBase items */
export interface PagedKnowledgeBaseOutput {
  /** The KnowledgeBase items on this page */
  value: Array<KnowledgeBaseOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A knowledgeBase. */
export interface KnowledgeBaseOutput {
  /** The ID */
  readonly id: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /**
   * The status
   *
   * Possible values: "NotStarted", "Processing", "Completed", "Failed "
   */
  readonly status?: IndexingStatusOutput;
  /** Input catalogs to index. */
  dataAssets: Array<ResourceReferenceOutput>;
  /** URL to access the knowledge base. */
  readonly knowledgeBaseUrl?: string;
  /** Version. */
  readonly version: string;
  /** The knowledgeBase name. */
  readonly name: string;
}

/** Definition of Tag */
export interface TagOutput {
  /** Property key */
  key?: string;
  /** Property value */
  value?: string;
}

/** Reference to a resource. */
export interface ResourceReferenceOutput {
  /** Resource ID */
  id: string;
}

/** A version. */
export interface KnowledgeBaseVersionOutput {
  /** The version name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /**
   * The status
   *
   * Possible values: "NotStarted", "Processing", "Completed", "Failed "
   */
  readonly status?: IndexingStatusOutput;
  /** Input catalogs to index. */
  dataAssets: Array<ResourceReferenceOutput>;
  /** URL to access the knowledge base. */
  readonly knowledgeBaseUrl?: string;
  /** Version. */
  readonly version: string;
}

/** Paged collection of KnowledgeBaseVersion items */
export interface PagedKnowledgeBaseVersionOutput {
  /** The KnowledgeBaseVersion items on this page */
  value: Array<KnowledgeBaseVersionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusKnowledgeBaseVersionWithRunIdErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: WithRunIdOutput;
}

/** Supercomputer run ID */
export interface WithRunIdOutput {
  /** Run ID */
  runId: string;
}

/** A investigation. */
export interface InvestigationWithYamlOutput {
  /** The investigation name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The description */
  description: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The title */
  title: string;
  /** The inputs for the Investigation */
  readonly inputs: Array<InputOutput>;
  /**
   * The status
   *
   * Possible values: "Archived", "Draft", "Committed", "Paused", "Running", "Success", "Failed"
   */
  readonly status?: InvestigationStatusOutput;
  /** The ID of the user who locked the Investigation for editing, if any. */
  readonly lockedBy?: string;
  /** The timestamp when the investigation was locked */
  readonly lockedAt: string;
  /** The plan Blueprint as YAML */
  planBlueprintYaml?: string;
}

/** Input to an investigation */
export interface InputOutput {
  /** Value of the input */
  value: string;
  /** Name used to identify the input */
  name: string;
  /**
   * Input type
   *
   * Possible values: "AzureBlobUri"
   */
  type: InputTypeOutput;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The properties derived from pre-processing the input */
  properties?: string[];
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusInvestigationInvestigationErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: InvestigationOutput;
}

/** A investigation list item. */
export interface InvestigationOutput {
  /** The investigation name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The description */
  description: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The title */
  title: string;
  /** The inputs for the Investigation */
  readonly inputs: Array<InputOutput>;
  /**
   * The status
   *
   * Possible values: "Archived", "Draft", "Committed", "Paused", "Running", "Success", "Failed"
   */
  readonly status?: InvestigationStatusOutput;
  /** The ID of the user who locked the Investigation for editing, if any. */
  readonly lockedBy?: string;
  /** The timestamp when the investigation was locked */
  readonly lockedAt: string;
}

/** Paged collection of Investigation items */
export interface PagedInvestigationOutput {
  /** The Investigation items on this page */
  value: Array<InvestigationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusInvestigationRequestIdResponseHeaderErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: RequestIdResponseHeaderOutput;
}

/** Provides the 'x-ms-request-id' header to enable request correlation in responses. */
export interface RequestIdResponseHeaderOutput {}

/** A run. */
export interface RunOutput {
  /** The run name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The reason for the current status */
  readonly statusReason?: string;
  /**
   * The mode of the plan run
   *
   * Possible values: "RunAll", "PauseAfterStep"
   */
  runMode?: RunModeOutput;
  /** The inputs for the Investigation */
  readonly inputs: Array<InputOutput>;
  /** The plan Blueprint as YAML */
  planBlueprintYaml?: string;
  /**
   * The status
   *
   * Possible values: "NotStarted", "Paused", "Running", "Success", "Failed"
   */
  readonly status?: RunStatusOutput;
  /** URI where the result can be found. */
  readonly resultBlobUri: string;
}

/** Paged collection of Run items */
export interface PagedRunOutput {
  /** The Run items on this page */
  value: Array<RunOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Step to be executed within a run */
export interface RunStepOutput {
  /** The step name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The step order. */
  readonly stepNumber: number;
  /** The step action ID. */
  readonly actionId: string;
  /** The ID of the associated Tool within Catalog. */
  readonly toolId: string;
  /** The step category. */
  readonly category: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /**
   * The status
   *
   * Possible values: "NotStarted", "Paused", "Running", "Success", "Failed"
   */
  readonly status?: RunStatusOutput;
  /** The reason for the current status */
  readonly statusReason?: string;
  /** URI where the result can be found. */
  readonly resultBlobUri: string;
}

/** Paged collection of RunStep items */
export interface PagedRunStepOutput {
  /** The RunStep items on this page */
  value: Array<RunStepOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Paged collection of Message items */
export interface PagedMessageOutput {
  /** The Message items on this page */
  value: Array<MessageOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A message. */
export interface MessageOutput {
  /** The message name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The ID of the associated Project */
  projectId?: string;
  /** The ID of the associated Investigation */
  investigationId?: string;
  /** The ID of the associated Conversation. */
  conversationId: string;
  /** The message text. */
  text: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /**
   * The sender
   *
   * Possible values: "Copilot", "You"
   */
  readonly sender: SenderOutput;
  /**
   * Message status
   *
   * Possible values: "Accepted", "Processing", "Completed", "Failed"
   */
  readonly status: MessageStatusOutput;
  /** The plan Blueprint as YAML */
  planBlueprintYaml?: string;
  /** Array of files to upload. */
  fileUploads: Array<FileUploadOutput>;
  /** The command name */
  readonly commandName?: string;
  /** Copilot Operations */
  copilotOperations: Array<CopilotOperationOutput>;
  /** Citation list */
  readonly citations: Array<CitationOutput>;
  /** UI command list */
  readonly uiCommands: Array<UiCommandOutput>;
  /** Database query list */
  readonly dbQueries: Array<DbQueryOutput>;
  /** knowledge base responses list */
  readonly knowledgeBaseResponses: Array<KnowledgeBaseResponseOutput>;
}

/** File upload */
export interface FileUploadOutput {
  /** Key used as identifier */
  readonly key: string;
  /** URI of the file */
  readonly blobUri: string;
}

/** Copilot operation */
export interface CopilotOperationOutput {
  /** The status */
  readonly status?: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
}

/** Copilot citation */
export interface CitationOutput {
  /** Key used as identifier */
  readonly key: string;
  /** ID of the related artifact */
  readonly artifactId: string;
  /** URI from where citation originated */
  readonly sourceUri: string;
  /** Title to display */
  readonly title: string;
  /** Description */
  readonly description: string;
}

/** Command for the UI to invoke */
export interface UiCommandOutput {
  /** Command */
  readonly command: string;
  /** Command */
  readonly status: string;
}

/** Database query */
export interface DbQueryOutput {
  /** Key used as identifier */
  readonly key: string;
  /** ID of the related artifact */
  readonly artifactId: string;
  /** Query */
  readonly query: string;
  /** Properties */
  readonly properties: string[];
}

/** Knowledge base response */
export interface KnowledgeBaseResponseOutput {
  /** Key used as identifier */
  readonly key: string;
  /** Response */
  readonly response: string;
}

/** A message. */
export interface ConversationMessageOutput {
  /** The message name. */
  readonly name: string;
  /** The ID of the associated Project */
  projectId?: string;
  /** The ID of the associated Investigation */
  investigationId?: string;
  /** The ID of the associated Conversation. */
  conversationId: string;
  /** The message text. */
  text: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /**
   * The sender
   *
   * Possible values: "Copilot", "You"
   */
  readonly sender: SenderOutput;
  /**
   * Message status
   *
   * Possible values: "Accepted", "Processing", "Completed", "Failed"
   */
  readonly status: MessageStatusOutput;
  /** The plan Blueprint as YAML */
  planBlueprintYaml?: string;
  /** Array of files to upload. */
  fileUploads: Array<FileUploadOutput>;
  /** The command name */
  readonly commandName?: string;
  /** Copilot Operations */
  copilotOperations: Array<CopilotOperationOutput>;
  /** Citation list */
  readonly citations: Array<CitationOutput>;
  /** UI command list */
  readonly uiCommands: Array<UiCommandOutput>;
  /** Database query list */
  readonly dbQueries: Array<DbQueryOutput>;
  /** knowledge base responses list */
  readonly knowledgeBaseResponses: Array<KnowledgeBaseResponseOutput>;
}

/** Paged collection of ConversationMessage items */
export interface PagedConversationMessageOutput {
  /** The ConversationMessage items on this page */
  value: Array<ConversationMessageOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A conversation. */
export interface ConversationOutput {
  /** The ID */
  readonly id: string;
  /** The conversation name. */
  readonly name: string;
  /** The title */
  title: string;
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
}

/** Paged collection of Conversation items */
export interface PagedConversationOutput {
  /** The Conversation items on this page */
  value: Array<ConversationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusScientificToolExecutionStatusErrorOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ExecutionStatusOutput;
}

/** Execution status model */
export interface ExecutionStatusOutput {
  /** Execution ID */
  executionId: string;
  /**
   * The runtime state of the execution.
   *
   * Possible values: "Pending", "Running", "Succeeded", "Failed", "Cancelled"
   */
  runtimeState: RunTimeStateOutput;
  /** Human-readable details about the execution status. */
  runtimeDetails: string;
  /** The time the execution was created. */
  createdTime: string;
  /** The time the execution completed. */
  completedTime?: string;
  /** Error details if the execution failed. */
  errorDetails?: string[];
  /** Details provided by the tool (rather than the platform). */
  toolReport?: {
    estimatedCompletionTime?: string;
    statusInformation?: Record<string, any>;
  };
}

/** Alias for IndexingStatusOutput */
export type IndexingStatusOutput = string;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
/** Alias for InputTypeOutput */
export type InputTypeOutput = string;
/** Alias for InvestigationStatusOutput */
export type InvestigationStatusOutput = string;
/** Alias for RunModeOutput */
export type RunModeOutput = string;
/** Alias for RunStatusOutput */
export type RunStatusOutput = string;
/** Alias for SenderOutput */
export type SenderOutput = string;
/** Alias for MessageStatusOutput */
export type MessageStatusOutput = string;
/** Alias for RunTimeStateOutput */
export type RunTimeStateOutput = string;
