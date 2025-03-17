// json-form.type.ts
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

// type TNextForm = {
//   fromType: 'next'
//   action: (_: null, formData: FormData) => void
// }

// type TClientForm = {
//   fromType: 'vite'
//   action: (formData: FormData) => void
// }

type TFormData = z.infer<ReturnType<typeof generateZodSchema>>

export type TJSONForm = {
  children?: ReactNode
  formStructure: TJSONFormStructure
  valueMap?: Record<string, string | number | boolean>
  info?: {
    statusCode: TStyle['theme']
    status?: number
    message: string | string[]
  }
  back?: {
    label: string
    title: string
    href: string
  }
  height?: string
  submit?: (data: Record<string, string | number | boolean>) => void
}
