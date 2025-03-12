import type { TStyle } from '@wowjob/ui'
import type { TCTA, TEnumeration, TMedia } from './extra'

/**
 * TSeparatorBlock:  Visually separates sections of content using a horizontal rule.
 *
 * Purpose: To create visual breaks and improve page structure by dividing content
 * into distinct sections, enhancing readability and visual organization.
 */
export type TSeparatorBlock = {
  title?: string
  blockType: 'separator'
  /**
   * Spacing above and below the separator line.
   * Controls the vertical space around the separator for better visual balance.
   *
   * Spacing: a number, ideally multiple of 4
   */
  spacing?: number
}

/**
 * TAttributionBlock: Provides attribution or credit for sources or authors.
 *
 * Purpose: To give proper credit to sources of information, images, ideas, or
 * content creators, ensuring ethical content practices and providing context to users.
 */
export type TAttributionBlock = {
  title?: string
  blockType: 'attribution'
  /**
   * Text describing the type of attribution (e.g., "Source:", "Image credit:", "Created by:").
   * Clarifies the nature of the attribution being given.
   */
  text: string

  /**
   * Name of the author or source being credited.
   */
  author?: string

  /**
   * Link to the original source being attributed.
   * Allows users to access the original source for verification or further reading.
   */
  sourceLink?: string

  /**
   * Date of creation or publication of the attributed source.
   * Provides temporal context to the attribution.
   */
  date?: string
}

export type TBlockquote = {
  title?: string
  blockType: 'blockquote'
  quote: string // The quote text
  author?: string // Optional: The author (if known)
  source?: {
    // Optional: Detailed source information
    title?: string // Title of the book, movie, etc.
    type?: 'book' | 'movie' | 'speech' | 'article' | 'other' // Type of source
    year?: number // Year of publication/release
    additionalInfo?: string // Additional details (e.g., chapter, timestamp)
  }
  context?: string // Optional: Additional context
  language?: string // Optional: Language of the quote
  attribution?: string[] // Optional: Multiple authors or contributors
  metadata?: {
    // Optional: Additional metadata
    date?: string // Date the quote was said
    location?: string // Location where the quote was said
    tags?: string[] // Tags for categorization
  }
}

/**
 * Static Structure Block Types
 *
 * These are predefined content blocks with specific structures, designed for
 * recurring content patterns and semantic clarity on webpages. They offer
 * efficiency and consistency compared to more flexible dynamic blocks.
 */

/**
 * THighlightBlock:  Highlights semantically important information.
 *
 * Purpose: To draw attention to specific types of content like informational notes,
 * warnings, success messages, tips, etc., with consistent styling and potential icons.
 */
export type THighlightBlock = {
  blockType: 'highlight'
  /**
   * The main text content of the highlight block.
   * Can be multi-line for more detailed information.
   */
  content: string

  /**
   * Semantic type of the highlight block.
   * Determines the visual presentation and conveys the meaning of the highlighted content.
   *
   * Types:
   * - 'info': General informational note.
   * - 'note':  Supplementary or additional note.
   * - 'alert': Important warning or cautionary message.
   * - 'success': Positive confirmation or success message.
   * - 'tip': Helpful advice or suggestion.
   * - 'warning':  Indicates potential issues or dangers.
   */
  theme: TStyle['theme'] // see TThemeColor
  /**
   * Optional title for the highlight box.
   * Provides a brief heading to introduce the highlighted content (e.g., "Important:", "Tip:").
   */
  title?: string

  /**
   * Optional icon to visually reinforce the highlight type.
   * Enhances visual recognition and semantic meaning (e.g., information icon, warning triangle).
   */
  icon?: string
}

/**
 * TDynamicBlock, the most used block in a page content
 */
export type THeroBlock = {
  blockType: 'dynamic'
  /** single line content.
   * If a dynamic block has children, it must have a title itself
   * in the UI all dynamic blocks that are at first level will be converted to h2
   * all dynamic blocks that have a title and are children of first level will be converted to h3
   * and so on to h4, h5 and h6 if needed
   */
  title: string
  // single or multiline content
  description?: string
  // single or multiline content
  enumeration?: TEnumeration
  // media should be present only when there is an opportunity to enhance the content with a picture (sometimes a video)
  media?: TMedia
  /**
   * inspire CTA should be present when enough content has been presented and reminds the readed to take action (not salesy), like: built a button now, publish that feature to production, record a video with your struggles or best achievements today. It has to relate to the content it's part of
   * it can be a question, or an imperative phrase, as long as it reminds the user to create value, not just read or watch, to put into practice etc
   */
  cta?: {
    data: Record<string, TCTA>
    list: string[]
  }
}
