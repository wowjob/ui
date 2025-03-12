import { getStyle, type TEnv } from '@/css'
import type { TLinkButton } from './type'
import NextLink from 'next/link'

export const Link = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  href = '#',
  title,
  ...rest
}: TLinkButton) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
    theme,
  })

  return (
    <NextLink
      href={href}
      title={title}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
