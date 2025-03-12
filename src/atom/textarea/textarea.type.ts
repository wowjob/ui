import type { TStyle } from '@/css'
import type { Ref, TextareaHTMLAttributes } from 'react'

export type TTextArea = {
  name: string
  ref?: Ref<HTMLTextAreaElement | null>
  type?: 'textarea'
} & TStyle &
  TextareaHTMLAttributes<HTMLTextAreaElement>
