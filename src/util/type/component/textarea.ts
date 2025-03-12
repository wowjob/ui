// input/type.ts
import type { TStyle } from '@wowjob/ui'
import type { Ref, TextareaHTMLAttributes } from 'react'

export type TTextarea = {
  label?: string
  info?: string
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
  error?: string | string[]
  type?: 'textarea'
  name: string
} & TStyle &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: Ref<HTMLTextAreaElement | null>
  }
