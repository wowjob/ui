import type { TStyle } from '@wowjob/ui'
import type { FormHTMLAttributes, HTMLProps, ReactNode } from 'react'

type HTMLFormProps = HTMLProps<HTMLFormElement>

export type TForm = {
  children?: ReactNode
  action: NonNullable<HTMLFormProps['action']>
} & TStyle &
  FormHTMLAttributes<HTMLFormElement>
