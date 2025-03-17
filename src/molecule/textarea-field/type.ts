import type { TTextarea } from '../../atom/textarea/textarea.type'

export type TTextareaField = {
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
} & TTextarea
