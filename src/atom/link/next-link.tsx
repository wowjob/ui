// link.tsx
import { getStyle } from '../../css'
import { getEnv } from '../../util'
import type { TNextLink } from './link.type'
import Link from 'next/link'
import './link-block.css'

export const NextLink = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  ...rest
}: TNextLink) => {
  const env = getEnv()
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    env,
    theme,
  })

  return (
    <Link className={className} style={style} {...rest}>
      {children}
    </Link>
  )
}
