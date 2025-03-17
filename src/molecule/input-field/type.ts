import type { TInput } from '@/atom/input/input.type'

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
} & TInput
