// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Paged collection of AgentDefinitionAnyCatalog items */
export interface PagedAgentDefinitionAnyCatalogOutput {
  /** The AgentDefinitionAnyCatalog items on this page */
  value: Array<AgentDefinitionAnyCatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A catalog agent definition. */
export interface AgentDefinitionAnyCatalogOutput {
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: AgentDefinitionAttributesOutput;
  /** The agent name. */
  readonly name: string;
}

/** Definition of Tag */
export interface TagOutput {
  /** Property key */
  key?: string;
  /** Property value */
  value?: string;
}

/** AgentDefinition attributes from definitionContents */
export interface AgentDefinitionAttributesOutput {
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /**
   * The type of user who created this resource.
   *
   * Possible values: "User", "System"
   */
  readonly createdByType: ByTypeOutput;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
  /**
   * The type of user who Updated this resource.
   *
   * Possible values: "User", "System"
   */
  readonly lastModifiedByType: ByTypeOutput;
  /** The description */
  readonly description: string;
}

/** Paged collection of ModelDefinitionAnyCatalog items */
export interface PagedModelDefinitionAnyCatalogOutput {
  /** The ModelDefinitionAnyCatalog items on this page */
  value: Array<ModelDefinitionAnyCatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A catalog model. */
export interface ModelDefinitionAnyCatalogOutput {
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: ModelDefinitionAttributesOutput;
  /** The model name. */
  readonly name: string;
}

/** ModelDefinition attributes from definitionContents */
export interface ModelDefinitionAttributesOutput {
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /**
   * The type of user who created this resource.
   *
   * Possible values: "User", "System"
   */
  readonly createdByType: ByTypeOutput;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
  /**
   * The type of user who Updated this resource.
   *
   * Possible values: "User", "System"
   */
  readonly lastModifiedByType: ByTypeOutput;
  /** The description */
  readonly description: string;
  /** The category */
  readonly category: string;
  /** The license */
  readonly license: string;
  /** The version */
  readonly version: string;
  /** A model docs URI. */
  readonly modelDocs: string;
  /** A model repo URI. */
  readonly modelRepo: string;
}

/** Paged collection of ToolDefinitionAnyCatalog items */
export interface PagedToolDefinitionAnyCatalogOutput {
  /** The ToolDefinitionAnyCatalog items on this page */
  value: Array<ToolDefinitionAnyCatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A catalog tool. */
export interface ToolDefinitionAnyCatalogOutput {
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: ToolDefinitionAttributesOutput;
  /** The tool name. */
  readonly name: string;
}

/** ToolDefinition attributes from definitionContents */
export interface ToolDefinitionAttributesOutput {
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /**
   * The type of user who created this resource.
   *
   * Possible values: "User", "System"
   */
  readonly createdByType: ByTypeOutput;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
  /**
   * The type of user who Updated this resource.
   *
   * Possible values: "User", "System"
   */
  readonly lastModifiedByType: ByTypeOutput;
  /** The description */
  readonly description: string;
  /** The category */
  readonly category: string;
  /** The license */
  readonly license: string;
  /** The version */
  readonly version: string;
  /** A tool docs URI. */
  readonly toolDocs: string;
  /** A tool repo URI. */
  readonly toolRepo: string;
}

/** Paged collection of DataAssetsDefinitionAnyCatalog items */
export interface PagedDataAssetsDefinitionAnyCatalogOutput {
  /** The DataAssetsDefinitionAnyCatalog items on this page */
  value: Array<DataAssetsDefinitionAnyCatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A catalog data asset. */
export interface DataAssetsDefinitionAnyCatalogOutput {
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: DataAssetDefinitionAttributesOutput;
  /** The data asset name. */
  readonly name: string;
}

/** DataAssetDefinition attributes from definitionContents */
export interface DataAssetDefinitionAttributesOutput {
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /**
   * The type of user who created this resource.
   *
   * Possible values: "User", "System"
   */
  readonly createdByType: ByTypeOutput;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
  /**
   * The type of user who Updated this resource.
   *
   * Possible values: "User", "System"
   */
  readonly lastModifiedByType: ByTypeOutput;
  /** The description */
  readonly description: string;
  /** The category */
  readonly category: string;
  /** The version */
  readonly version: string;
  /** The license */
  readonly license: string;
  /** Copilot Instruction */
  readonly copilotInstruction: string;
  /** Infrastructure type */
  readonly infraType: string;
}

/** Paged collection of KnowledgeBaseDefinitionAnyCatalog items */
export interface PagedKnowledgeBaseDefinitionAnyCatalogOutput {
  /** The KnowledgeBaseDefinitionAnyCatalog items on this page */
  value: Array<KnowledgeBaseDefinitionAnyCatalogOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A catalog knowledge base. */
export interface KnowledgeBaseDefinitionAnyCatalogOutput {
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: KnowledgeBaseDefinitionAttributesOutput;
  /** The asset name. */
  readonly name: string;
}

/** KnowledgeBaseDefinition attributes from definitionContents */
export interface KnowledgeBaseDefinitionAttributesOutput {
  /** The timestamp when the resource was created */
  readonly createdAt: string;
  /** The ID of the user who created this resource. */
  readonly createdBy: string;
  /**
   * The type of user who created this resource.
   *
   * Possible values: "User", "System"
   */
  readonly createdByType: ByTypeOutput;
  /** The timestamp when the resource was last updated */
  readonly lastModifiedAt: string;
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
  /**
   * The type of user who Updated this resource.
   *
   * Possible values: "User", "System"
   */
  readonly lastModifiedByType: ByTypeOutput;
  /** The description */
  readonly description: string;
  /** The category */
  readonly category: string;
  /** The license */
  readonly license: string;
  /** Copilot Instruction */
  readonly copilotInstruction: string;
  /** Infrastructure type */
  readonly infraType: string;
  /** The version */
  readonly version: string;
}

/** An agent. */
export interface AgentDefinitionOutput {
  /** The agent name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: AgentDefinitionAttributesOutput;
}

/** Paged collection of AgentDefinition items */
export interface PagedAgentDefinitionOutput {
  /** The AgentDefinition items on this page */
  value: Array<AgentDefinitionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A tool. */
export interface ToolDefinitionOutput {
  /** The tool name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: ToolDefinitionAttributesOutput;
}

/** Paged collection of ToolDefinition items */
export interface PagedToolDefinitionOutput {
  /** The ToolDefinition items on this page */
  value: Array<ToolDefinitionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A dataAsset. */
export interface DataAssetDefinitionOutput {
  /** The dataAsset name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: DataAssetDefinitionAttributesOutput;
}

/** Paged collection of DataAssetDefinition items */
export interface PagedDataAssetDefinitionOutput {
  /** The DataAssetDefinition items on this page */
  value: Array<DataAssetDefinitionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A knowledgeBase. */
export interface KnowledgeBaseDefinitionOutput {
  /** The knowledgeBase name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: KnowledgeBaseDefinitionAttributesOutput;
}

/** Paged collection of KnowledgeBaseDefinition items */
export interface PagedKnowledgeBaseDefinitionOutput {
  /** The KnowledgeBaseDefinition items on this page */
  value: Array<KnowledgeBaseDefinitionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A model. */
export interface ModelDefinitionOutput {
  /** The model name. */
  readonly name: string;
  /** The ID */
  readonly id: string;
  /** The author */
  readonly author: string;
  /** The tags */
  tags?: Array<TagOutput>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: VerticalOutput;
  /** The definition attributes extracted from definitionContents Yaml */
  readonly attributes: ModelDefinitionAttributesOutput;
}

/** Paged collection of ModelDefinition items */
export interface PagedModelDefinitionOutput {
  /** The ModelDefinition items on this page */
  value: Array<ModelDefinitionOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Alias for VerticalOutput */
export type VerticalOutput = string;
/** Alias for ByTypeOutput */
export type ByTypeOutput = string;
