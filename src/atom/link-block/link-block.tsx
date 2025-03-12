import { getStyle, type TEnv } from '@/css'
import type { TLinkButton } from './type'
import Link from 'next/link'

export const LinkBlock = ({
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
    className: 'wow-ui-link-block',
    theme,
  })

  return (
    <Link
      href={href}
      title={title}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Link>
  )
}
