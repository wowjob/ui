import { ImgHTMLAttributes } from 'react'
import type { TStyle } from '../..'

export type TPicture = {
  alt: string
  src: string
  srcTablet?: string
  srcDesktop?: string

  width?: number
  height?: number
} & TStyle &
  ImgHTMLAttributes<HTMLImageElement>
