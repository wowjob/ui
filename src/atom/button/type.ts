// button/type.ts
import type { TStyle } from '../../css'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TButton = {
  children?: ReactNode
  label?: string
} & TStyle &
  ButtonHTMLAttributes<HTMLButtonElement>
