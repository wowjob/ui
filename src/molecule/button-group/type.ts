// button/type.ts
import type { TStyle } from '../../css'
import type { HTMLAttributes, ReactNode } from 'react'

export type TButtonGroup = {
  children?: ReactNode
} & TStyle &
  HTMLAttributes<HTMLDivElement>
