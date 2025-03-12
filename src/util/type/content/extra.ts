import type { TStyle } from '@wowjob/ui'
/**
 * TFAQBlock: Presents a list of Frequently Asked Questions in a structured format.
 *
 * Purpose: To organize and display common questions and their answers in a clear
 * and user-friendly manner, often used in FAQ sections of websites.
 */
export type TFAQBlock = {
  /**
   * Array of question and answer pairs.
   * Each item represents a single FAQ entry.
   */
  list: {
    question: string // The question being asked.
    answer: string // The answer to the question.
  }[]
}

/**
 * TGlossaryBlock: Presents a glossary of terms and their definitions.
 *
 * Purpose: To create a glossary section on a page, listing terms and their
 * corresponding definitions in a structured and easily readable format. Useful
 * for defining jargon, technical terms, or key vocabulary.
 */
export type TGlossaryBlock = {
  /**
   * Array of term and definition pairs.
   * Each item represents a single entry in the glossary.
   */
  list: {
    term: string // The term being defined in the glossary.
    definition: string // The explanation or definition of the term.
  }[]
}

export type TCTA = {
  label: string
  title: string
  href: string
  theme?: TStyle['theme'] // see TThemeColor
}

type TPicure = {
  srcSet: {
    small?: string
    medium?: string
    large?: string
  }

  alt: string
  /** info is internal only
   * Example:
   * Screenshot: description of the screenshot that complements the block it's part of
   * AI Prompt: an ai prompt used to generate an image to complement the block it's part of
   */
  info?: string
}

type TVideo = {
  src: string
  type: 'internal' | 'youtube'
  thumbnail: TPicure
  orientation: 'landscape' | 'portrait'
}

export type TMedia = TPicure | TVideo

export type TEnumeration = {
  /**
   * Type of the enumeration (ordered or unordered).
   * Determines whether the list is numbered or bulleted.
   */
  type: 'ordered' | 'unordered'

  /**
   * The main text content of the list item.
   * This is the primary text that represents all the items in the list, each line of text is an item
   * I will use split('\n') to get all the items in the list
   * Nested items can be represented by leading spaces, where
   * 2 spaces = 1 nesting level.
   * if an item in a list has a sublist, it must start with: "a) ", "-. ", "I. ", "1. " etc., that determines the type of the sublist
   */
  text: string
}
