import type { ReactNode } from 'react'
import type { TActionFormReturn } from './form-action'
import type { TFormDataStructure, TFormTranslationData } from './form-data'
import type { TStyle } from '@wowjob/ui'

export type TJSONForm = {
  children?: ReactNode
  action: (
    _: TActionFormReturn | null,
    formData: unknown
  ) => Promise<TActionFormReturn>
  formLanguageData?: TFormTranslationData
  formStructure: TFormDataStructure
  info?: {
    status: TStyle['theme']
    message: string
    statusCode: number
  }
  back?: {
    label: string
    title: string
    href: string
  }
  height?: string
}
