// button/server.tsx
import type { TButtonGroup } from './type'
import { Flex } from '@/atom'
import { getStyle, type TEnv } from '@/css'

export const ButtonGroup = ({
  children,
  mobile,
  tablet,
  desktop,
  theme,
}: TButtonGroup) => {
  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    className: 'wow-ui-button-group',
    theme,
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  return (
    <Flex style={style} className={className}>
      {children}
    </Flex>
  )
}
