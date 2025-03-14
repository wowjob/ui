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
  component = 'a',
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

  const LinkComponent = component
  rest.to = rest.href

  return (
    <LinkComponent className={className} style={style} {...rest}>
      {children}
    </LinkComponent>
  )
}
