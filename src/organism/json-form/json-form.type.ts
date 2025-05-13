// json-form.type.ts
import type { TActionFormReturn } from '../../type'
import type { TButton } from '../../atom/button/type'
import type { TInput } from '../../atom/input/input.type'
import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { TValidation } from '../../util/form/form.type'
import type { ReactNode } from 'react'

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

  /** initial values keyed by field name */
  valueMap?: Record<
    string,
    readonly string[] | string | number | boolean | null
  >

  back?: {
    label: string
    title: string
    href: string
  }

  height?: string

  /**
   * submit now takes your generic `Data` shape,
   * and returns a Promise of your generic `Result` type
   */
  submit?: (data: any) => Promise<TActionFormReturn>
}
