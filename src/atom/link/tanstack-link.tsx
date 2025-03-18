'use client'
// link.tsx
import { getStyle } from '../../css'
import { getEnv } from '../../util'
import type { TTanstackLink } from './link.type'
import { Link } from '@tanstack/react-router'

export const TanstackLink = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  ...rest
}: TTanstackLink) => {
  const env = getEnv()
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    env,
    theme,
  })

  rest.to = rest.href

  return (
    <Link className={className} style={style} {...rest}>
      {children}
    </Link>
  )
}
