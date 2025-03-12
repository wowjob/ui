import type { TGlobalKeyword } from './global-keyword'

export type TOffsetAnchor =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'auto'
  | `${number}% ${number}%`
  | `0 0`
  | `${number}${'px' | 'em' | 'rem' | 'cm' | 'ch'} ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'
      | 'ch'}`
  | `bottom ${number}${'px' | 'em' | 'rem' | 'cm'} right ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | `right ${number}${'px' | 'em' | 'rem' | 'cm'} bottom ${number}${
      | 'px'
      | 'em'
      | 'rem'
      | 'cm'}`
  | TGlobalKeyword
