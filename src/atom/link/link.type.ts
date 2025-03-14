// link.type.ts
import type { TStyle } from '@/css'
import type { AnchorHTMLAttributes, ComponentType } from 'react'

export type TLink = {
  title?: string
  to?: string
  href: string
  component?: 'a' | ComponentType<any>
} & TStyle &
  AnchorHTMLAttributes<HTMLAnchorElement>
