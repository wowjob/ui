import { createElement } from 'react'
import type { TFlex } from './type'
import { getStyle, type TEnv } from '../../css'
import { getEnv } from '../../util'

export const Text = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  as = 'p',
  ...rest
}: TFlex) => {
  const env = getEnv()
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: 'wowjob-ui-text',
  })

  const Component = createElement(
    as,
    {
      className,
      style,
      ...rest,
    },
    children
  )

  return Component
}
