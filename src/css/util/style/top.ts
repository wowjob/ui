import type { TTop } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeTop = (value: TTop): string | number => {
  if (!value || value === 'auto') {
    return 'auto' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}
