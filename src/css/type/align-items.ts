import type { TGlobalKeyword } from './global-keyword'

export type TAlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword
