import { createElement } from 'react'
import type { TFlex } from './type'
import { getStyle, type TEnv } from '@/css'

export const Text = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  as = 'p',
  ...rest
}: TFlex) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wow-ui-text',
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
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
