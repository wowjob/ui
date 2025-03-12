import { createElement } from 'react'
import type { TFlex } from './type'
import { getStyle, type TEnv } from '@/css'

export const Flex = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  className: customClassName = '',
  as = 'div',
  ...rest
}: TFlex) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: ['wow-ui-flex', customClassName].join(' '),
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
