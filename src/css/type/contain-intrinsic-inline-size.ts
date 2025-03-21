import type { TGlobalKeyword } from './global-keyword'

export type TContainIntrinsicInlineSize =
  | 'none'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`
  | `${'auto'} ${number}px` // Represents auto <length> combination
  | number
  | TGlobalKeyword
