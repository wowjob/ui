import type { TStyle } from '../css'

export type TActionFormReturn = {
  theme: TStyle['theme']
  status?: number
  title: string
  message: string[] | string
  code?: string
  redirect?: string
  data?: Record<string, string | number | readonly string[] | undefined>
}
