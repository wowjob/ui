import type { TStyle } from '../..'

type TSimpleCardFooterAction = {
  href: string
  title: string
  label: string
  theme?: TStyle['theme']
}

export type TSimpleCard = {
  title: string
  content: string[]
  viewTransitionName?: string
  footer?: {
    message?: string
    action?: TSimpleCardFooterAction[]
  }
}
