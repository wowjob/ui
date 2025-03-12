import type { ImgHTMLAttributes } from 'react'
import { getStyle, type TEnv, type TStyle } from '@/css'

export const Image = ({
  alt,
  src,
  width = '100%',
  height = '100%',
  loading = 'lazy',
  mobile,
  tablet,
  desktop,
  theme,
  className: customClassName = '',
}: TStyle & ImgHTMLAttributes<HTMLImageElement>) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: ['wow-ui-image', customClassName].join(' '),
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  return (
    <img
      width={width}
      height={height}
      className={className}
      loading={loading}
      src={src}
      alt={alt}
      style={style}
      decoding="async"
    />
  )
}
