export type TPageMeta = {
  /**
   * The title of the page, which appears:
   * - In search engine results (SERP) as the clickable headline.
   * - In the browser's tab bar.
   *
   * Best practices:
   * - Keep it under 10–12 words to avoid truncation in SERPs.
   * - Start with the user's exact search query or a close variation.
   * - Focus on the problem, outcome, or opportunity the user is searching for.
   * - Use action-oriented language to encourage clicks (e.g., "Discover," "Fix," "Learn").
   * - Include primary keywords for SEO alignment.
   *
   * Human-centric reasoning:
   * - Titles that match the user's search query feel personalized and relevant.
   * - Users are more likely to click on titles that promise a solution or value.
   */
  title: string

  /**
   * The meta description of the page, which appears:
   * - In search engine results below the title.
   *
   * Best practices:
   * - Keep it under 25–30 words to avoid truncation in SERPs.
   * - Start with the outcome, hook, or value proposition.
   * - Clearly state what's in it for the user (e.g., "Fix X," "Learn Y," "Achieve Z").
   * - Follow up with more context, such as the strongest emotion or most important aspect.
   * - Use a call-to-action (CTA) to encourage clicks (e.g., "Start Today," "Learn More").
   *
   * Human-centric reasoning:
   * - Descriptions that promise a quick fix or actionable steps are more likely to attract clicks.
   * - Users are drawn to descriptions that feel personal and relatable (e.g., "How I Fixed It").
   */
  description: string
  slug?: string
}

export type TPageHeader = {
  /**
   * The main heading of the page (H1), which appears:
   * - As the primary title visible to users on the page.
   *
   * Best practices:
   * - Use only one H1 per page for SEO clarity.
   * - Start with the user's exact search query or a close variation.
   * - Focus on the problem, outcome, or opportunity the user is searching for.
   * - Use action-oriented language to engage users (e.g., "Fix," "Master," "Optimize").
   * - Include primary keywords for SEO alignment.
   *
   * Human-centric reasoning:
   * - Titles that match the user's search query feel personalized and relevant.
   * - Users are more likely to stay on the page if the title promises a solution or actionable steps.
   */
  title: string

  /**
   * The description or introductory paragraph that follows the H1.
   * This provides context for the page's content and is often indexed by search engines.
   *
   * Best practices:
   * - Keep it concise and engaging (2–3 sentences).
   * - Start with the outcome, hook, or value proposition.
   * - Clearly state what's in it for the user (e.g., "Fix X," "Learn Y," "Achieve Z").
   * - Follow up with more context, such as the strongest emotion or most important aspect.
   * - Use a hook to keep users reading (e.g., "In this guide, we’ll show you how to...").
   *
   * Human-centric reasoning:
   * - Descriptions that feel personal and relatable (e.g., "How I Fixed It") are more engaging.
   * - Users are more likely to keep reading if the description promises a quick or actionable solution.
   */
  description: string
}
