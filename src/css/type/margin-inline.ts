import type { TGlobalKeyword } from './global-keyword'

export type TMarginInline =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | [TMarginInline, TMarginInline?] // Supports shorthand formats for start and end
  | { start?: TMarginInline; end?: TMarginInline } // Object with start and end keys
  | TGlobalKeyword
