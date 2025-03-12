import { getStyle, type TEnv } from '@wowjob/ui'
import type { TForm } from './type'
import NextForm from 'next/form'

export const Form = ({
  mobile,
  tablet,
  desktop,
  theme,
  children,
  action,
  ...rest
}: TForm) => {
  const { className, style } = getStyle({
    mobile,
    tablet,
    desktop,
    className: 'wow-ui-json-form',
  })
  return (
    <NextForm action={action} className={className} style={style} {...rest}>
      {children}
    </NextForm>
  )
}
