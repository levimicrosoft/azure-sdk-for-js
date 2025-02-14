// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Definition of Tag */
export interface Tag {
  /** Property key */
  key?: string;
  /** Property value */
  value?: string;
}

/** AgentDefinition attributes from definitionContents */
export interface AgentDefinitionAttributes {
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
}

/** ModelDefinition attributes from definitionContents */
export interface ModelDefinitionAttributes {
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
}

/** ToolDefinition attributes from definitionContents */
export interface ToolDefinitionAttributes {
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
}

/** DataAssetDefinition attributes from definitionContents */
export interface DataAssetDefinitionAttributes {
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
}

/** KnowledgeBaseDefinition attributes from definitionContents */
export interface KnowledgeBaseDefinitionAttributes {
  /** The ID of the user who Updated this resource. */
  lastModifiedBy: string;
}

/** An agent. */
export interface AgentDefinitionWithYaml {
  /** The tags */
  tags?: Array<Tag>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: Vertical;
  /** The definition */
  definitionContent: string;
}

/** A tool. */
export interface ToolDefinitionWithYaml {
  /** The tags */
  tags?: Array<Tag>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: Vertical;
  /** The definition */
  definitionContent: string;
}

/** A dataAsset. */
export interface DataAssetDefinitionWithYaml {
  /** The tags */
  tags?: Array<Tag>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: Vertical;
  /** The definition */
  definitionContent: string;
}

/** A knowledgeBase. */
export interface KnowledgeBaseDefinitionWithYaml {
  /** The tags */
  tags?: Array<Tag>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: Vertical;
  /** The definition */
  definitionContent: string;
}

/** A model. */
export interface ModelDefinitionWithYaml {
  /** The tags */
  tags?: Array<Tag>;
  /**
   * Property for configuring associated verticals.
   *
   * Possible values: "Chemistry", "Biology", "Physics", "Silicon"
   */
  vertical: Vertical;
  /** The definition */
  definitionContent: string;
}

/** Alias for Vertical */
export type Vertical = string;
/** Alias for ByType */
export type ByType = string;
/** The Microsoft.AiForScienceCatalog service versions. */
export type Versions = "2024-11-01-preview";
