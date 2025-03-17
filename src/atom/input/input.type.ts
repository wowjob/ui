// input.type.ts
import type { TStyle } from '@/css'
import type { InputHTMLAttributes } from 'react'

export type TInput = {
  name: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
} & TStyle &
  InputHTMLAttributes<HTMLInputElement>
