import type { TStyle } from '../../css'
import type { AllHTMLAttributes } from 'react'

export const boxAsList = [
  'div',
  'main',
  'section',
  'article',
  'aside',
  'header',
  'footer',
  'nav',
  'figure',
  'figcaption',
  'details',
  'summary',
  'ul',
  'ol',
  'dl',
  'table',
  'caption',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'td',
  'th',
  'colgroup',
  'col',
  'span',
] as const

export type TBoxAs = (typeof boxAsList)[number]

export type TFlex = {
  as?: TBoxAs
} & TStyle &
  AllHTMLAttributes<HTMLElement>
