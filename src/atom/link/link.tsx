// link.tsx
import { getStyle } from '@/css'
import { getEnv } from '@/util'
import type { TLink } from './link.type'

export const Link = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  ...rest
}: TLink) => {
  const env = getEnv()

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    env,
    theme,
  })

  return (
    <a className={className} style={style} {...rest}>
      {children}
    </a>
  )
}
