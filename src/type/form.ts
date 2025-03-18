import type { TStyle } from '../css'

export type TActionFormReturn = {
  theme: TStyle['theme']
  status: number
  message: string
  code: string
  data: Record<string, string | number | readonly string[] | undefined>
}
