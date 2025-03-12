import type { TPageHeader, TPageMeta } from './seo'
import type { TEnumeration, TFAQBlock, TGlossaryBlock, TMedia } from './extra'
import type {
  TBlockquote,
  TAttributionBlock,
  THighlightBlock,
  TSeparatorBlock,
} from './fixed-block'

// type TThemeColor = "brand" | "primary" | "secondary" | "tertiary" | "default" | "error" | "warning" | "success" | "info" | "light" | "dark" | "accent" | "muted" | "highlight"

/**
 * TCodeBlock: Displays code snippets with syntax highlighting and formatting.
 *
 * Purpose: To present code examples, configuration snippets, or scripts in a
 * readable and visually distinct format, often with syntax highlighting for different languages.
 */
type TCodeBlock = {
  blockType: 'code'
  /**
   * The code snippet itself.
   * Should be the raw code text to be displayed.
   */
  code: string

  /**
   * Programming language of the code snippet.
   * Used for syntax highlighting and proper formatting.
   * Examples: 'typescript', 'javascript', 'python', 'java', 'html', 'css'.
   */
  language: string

  /**
   * Optional title for the code block.
   * Provides context or describes the purpose of the code snippet.
   */
  title?: string
  /**
   * Optional description for the code block.
   * Provides detailed context or describes the purpose of the code snippet.
   * If title is present, complements the title.
   */
  description?: string
}

/**
 * TDynamicBlock, the most used block in a page content
 */
type TDynamicBlock = {
  blockType: 'dynamic'
  /** single line content.
   * If a dynamic block has children, it must have a title itself
   * in the UI all dynamic blocks that are at first level will be converted to h2
   * all dynamic blocks that have a title and are children of first level will be converted to h3
   * and so on to h4, h5 and h6 if needed
   */
  title?: string
  // single or multiline content
  description?: string
  // single or multiline content
  enumeration?: TEnumeration
  /**
   * inspire CTA should be present when enough content has been presented and reminds the readed to take action (not salesy), like: built a button now, publish that feature to production, record a video with your struggles or best achievements today. It has to relate to the content it's part of
   * it can be a question, or an imperative phrase, as long as it reminds the user to create value, not just read or watch, to put into practice etc
   */
  inspireCTA?: string
  children?: TDynamicBlock[]
}

/** the unique id keys present in the content object must be present in the list array as well, and match one to one */
type TUniqueID = string

type TPageContent = {
  content: Record<
    TUniqueID,
    | TDynamicBlock
    | TBlockquote
    | THighlightBlock
    | TSeparatorBlock
    | TCodeBlock
    | TAttributionBlock
  >
  list: TUniqueID[]
}

export type TPage = {
  meta: TPageMeta
  header: TPageHeader
  faq: TFAQBlock[]
  glossary: TGlossaryBlock[]
} & TPageContent

export type TDBContent = {
  id: number
  source_id: string
  source_type: string
  raw?: string
  main_language?: string
  content: Record<string, TPage>
  translate: Record<
    // language
    string,
    // audience
    Record<
      string,
      // entity
      Record<
        string,
        // property
        Record<
          string,
          // hash and value
          Record<string, string>
        >
      >
    >
  >
  env: 'prod' | 'test'
  access: 'public' | 'private'
}
