import type { TOutlineOffset } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeOutlineOffset = (
  value: TOutlineOffset
): string | number => {
  if (!value) {
    return '0' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}
