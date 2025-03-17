// link.tsx
import { getStyle } from '../../css'
import { getEnv } from '../../util'
import type { TLink } from './link.type'

export const Link = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  type = '',
  ...rest
}: TLink) => {
  const env = getEnv()

  const linkClass =
    type === 'block'
      ? 'wowjob-ui-link-block'
      : type === 'button'
      ? 'wow-ui-button'
      : ''

  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    env,
    theme,
    className: linkClass,
  })

  return (
    <a className={className} style={style} {...rest}>
      {children}
    </a>
  )
}
