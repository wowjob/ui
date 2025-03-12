import type { TInput, TStyle } from '@wowjob/ui'

export type TInputField = {
  label?: string
  info?: string
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
  error?: string | string[]
  name: string
} & TInput &
  TStyle
