import { ImgHTMLAttributes } from 'react'
import type { TStyle } from '../..'

export type TImage = {
  alt: string
  src: string
  width?: number
  height?: number
} & TStyle &
  ImgHTMLAttributes<HTMLImageElement>
