import type { TButton } from '@/atom/button/type'
import type { TInput } from '@/atom/input/input.type'
import type { TTextArea } from '@/atom/textarea/textarea.type'
import type { TStyle } from '@/css'
import type { ReactNode } from 'react'

export type TJSONFormStructure = {
  data: Record<string, TInput | TTextArea>
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

type TNextForm = {
  fromType: 'next'
  action: (_: null, formData: FormData) => void
}

type TClientForm = {
  fromType: 'vite'
  action: (formData: FormData) => void
}

export type TJSONFormAction = TNextForm | TClientForm

export type TJSONForm = {
  children?: ReactNode
  formStructure: TJSONFormStructure
  action: TJSONFormAction
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
