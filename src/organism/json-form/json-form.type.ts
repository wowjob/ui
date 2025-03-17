import type { TButton } from '@/atom/button/type'
import type { TInput } from '@/atom/input/input.type'
import type { TTextarea } from '@/atom/textarea/textarea.type'
import type { TStyle } from '@/css'
import type { generateZodSchema } from '@/util'
import type { TValidation } from '@/util/form/form.type'
import type { ReactNode } from 'react'
import type { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form'
import type { z } from 'zod'

export type TField = (
  | ({ type: TInput['type'] } & TInput)
  | ({ type: 'textarea' } & TTextarea)
) & {
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
  register?: UseFormRegister<FieldValues>
  errors?: FieldErrors<FieldValues>

  children?: ReactNode
  formStructure: TJSONFormStructure
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
}
