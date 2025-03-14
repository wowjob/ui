// link.type.ts
import type { AnchorHTMLAttributes } from 'react'
import type { LinkProps as NextLinkProps } from 'next/link'
import type { LinkProps as TanstackLinkProps } from '@tanstack/react-router'
import type { TStyle } from '@/css'

export type TLink = {
  title?: string
  href: string
} & TStyle &
  AnchorHTMLAttributes<HTMLAnchorElement>

export type TNextLink = TLink & Partial<NextLinkProps>

export type TTanstackLink = TLink & Partial<TanstackLinkProps>
