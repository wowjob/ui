import type { TStyle } from '@wowjob/ui'

export type TActionFormReturn = {
  theme: TStyle['theme']
  message: string
  status: number
  statusCode: string
  data?: Record<string, string | number | readonly string[] | undefined>
  error?: {
    field?: Record<string, string[]>
    form?: string[]
  }
  reload?: boolean
}
