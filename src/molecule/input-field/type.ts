import type { TInput } from '../../atom/input/input.type'

export type TInputField = {
  label?: string
  info?: string
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
  errorList?: {
    code?: string
    message: string
    path: string[]
  }[]
  name: string
} & TInput
