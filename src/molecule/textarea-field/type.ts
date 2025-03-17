import type { TTextarea } from '@/atom/textarea/textarea.type'

export type TTextareaField = {
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
} & TTextarea
