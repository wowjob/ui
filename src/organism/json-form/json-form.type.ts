// json-form.type.ts
import type { TActionFormReturn } from '../../type'
import type { TButton } from '../../atom/button/type'
import type { TInput } from '../../atom/input/input.type'
import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { TStyle } from '../../css'
import type { generateZodSchema } from '../../util'
import type { TValidation } from '../../util/form/form.type'
import type { ReactNode } from 'react'
import type { z } from 'zod'

export type TField = (TInput | TTextarea) & {
  validation?: TValidation
}

export type TJSONFormStructure = {
  data: Record<string, TField>
  list: string[]
  form: {
    name: string
    header?: {
      title: string
      description?: string
    }
    footer: {
      data: Record<string, TButton>
      list: string[]
    }
  }
}

export type TJSONForm = {
  children?: ReactNode
  formStructure: TJSONFormStructure
  valueMap?: Record<string, string | number | boolean>
  data?: Record<string, string | number | boolean>
  info?: TActionFormReturn
  back?: {
    label: string
    title: string
    href: string
  }
  height?: string
  submit?: (data: TActionFormReturn['data']) => void
}
