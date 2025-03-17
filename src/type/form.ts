import type { TStyle } from '@/css'

export type TActionFormReturn = {
  status: TStyle['theme']
  message: string
  statusCode: number
  data?: Record<string, string | number | readonly string[] | undefined>
  error?: {
    field?: Record<string, string[]>
    form?: string[]
  }
}
