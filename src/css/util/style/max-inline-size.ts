import type { TMaxInlineSize } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxInlineSize = (
  value: TMaxInlineSize
): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}
