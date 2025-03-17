// input.type.ts
import type { TStyle } from '../../css'
import type { InputHTMLAttributes } from 'react'

export type TInput = {
  name: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  label?: string
  help?: string
} & TStyle &
  InputHTMLAttributes<HTMLInputElement>
