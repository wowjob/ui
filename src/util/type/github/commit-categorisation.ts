export type TCommitCategorization = {
  /**
   * A numerical score (1-100) representing the overall content value and potential impact of the commit.
   * Higher score indicates higher priority for content creation.
   * Consider factors like: technical complexity, user value, novelty, learning potential, and audience interest when assigning the score.
   */
  initialScore: number

  /**
   * Broad topic or feature area that this commit relates to.
   * Examples: "Performance," "Authentication," "UI/UX," "API," "Database," "Security."
   * This helps group related commits and organize content.
   * If the content fits multiple topics, separate them by comma: topic, another topic, one more topic
   */
  topicFeature: string

  /**
   * Potential content type that can be created from this commit, especially for Activity Updates or short-form content.
   * Examples: "Code Tip," "Performance Boost," "Bug Fix Highlight," "New Feature Snippet," "Refactoring Insight," "Learning Point."
   * Guides the type of content to generate.
   * If the content fits multiple potential categories, separate them by comma
   */
  contentTypePotential: string

  /**
   * Optional: Additional notes or comments about the commit's content potential or categorization.
   * For any extra insights or context that doesn't fit into the structured categories.
   */
  note?: string
}
