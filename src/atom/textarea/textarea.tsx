import { getStyle, type TEnv } from '@/css'
import type { TTextarea } from './type'

export const Textarea = ({
  mobile,
  tablet,
  desktop,
  theme,
  autoComplete = 'off',
  title,
  ...rest
}: TTextarea) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    className: 'wow-ui-textarea',
    env: process.env.NEXT_PUBLIC_ENV as TEnv,
  })

  return (
    <textarea
      className={className}
      title={title}
      autoComplete={autoComplete}
      style={style}
      {...rest}
    />
  )
}
