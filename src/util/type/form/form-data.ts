// lib/util/src/type/form/form-data.ts
import type { TStyle } from '@wowjob/ui'
import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import type { TTextarea } from '../component'

export type TFormTranslationData = {
  default: Record<string, Record<string, string>>
  error?: Record<string, Record<string, string>>
}

export type TFormMap = {
  default: Record<string, Record<string, string>>
  error: Record<string, Record<string, string>>
  name: string
  type: string
}

export type TInput = {
  name: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  title?: string
  label?: string
  placeholder?: string
  info?: string
  pattern?: string
  required?: boolean
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
} & InputHTMLAttributes<HTMLInputElement>

export type TFormFooterAction = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  theme: TStyle['theme']
  label?: string
  name?: string
  value?: string | number
}

export type TFormDataStructure = {
  data: Record<string, TInput | TTextarea>
  list: string[]
  form: {
    name: string
    header?: {
      title?: string
      description?: string
    }
    footer: {
      data: Record<string, TFormFooterAction>
      list: string[]
    }
  }
}
