import type { TGlobalKeyword } from './global-keyword'

export type TAlignContent =
  | 'normal'
  | 'start'
  | 'center'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | `safe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | TGlobalKeyword
