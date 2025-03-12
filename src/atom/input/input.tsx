import { getStyle, type TEnv } from '@/css'
import type { TInput } from './type'

export const Input = ({
  mobile,
  tablet,
  desktop,
  theme,
  required = true,
  autoComplete = 'off',
  title,
  ...rest
}: TInput) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wow-ui-input',
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  return (
    <input
      className={className}
      title={title}
      autoComplete={autoComplete}
      required={required}
      style={style}
      {...rest}
    />
  )
}
