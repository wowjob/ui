// textarea.type.ts
import type { TStyle } from '../../css'
import type { Ref, TextareaHTMLAttributes } from 'react'

export type TTextarea = {
  name: string
  // ref?: Ref<HTMLTextAreaElement | null>
  type: 'textarea'
} & TStyle &
  TextareaHTMLAttributes<HTMLTextAreaElement>
