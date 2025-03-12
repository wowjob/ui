// button/server.tsx
import type { TButton } from './type'
import { getStyle, type TEnv } from '@/css'

export const Button = ({
  children,
  type = 'button',
  mobile,
  desktop,
  tablet,
  theme,
  label,
  ...rest
}: TButton) => {
  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wow-ui-button',
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  const showLabel = label || typeof children === 'string'
  const showChildren = !showLabel

  return (
    <button type={type} style={style} className={className} {...rest}>
      {showLabel && (
        <span className="wow-ui-button__label">{label || children}</span>
      )}

      {showChildren && children}
    </button>
  )
}
