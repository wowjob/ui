import type { TBorderEndEndRadius } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderEndEndRadius = (
  borderEndEndRadius: TBorderEndEndRadius
): string => {
  if (typeof borderEndEndRadius === 'string') {
    return isPx(borderEndEndRadius)
      ? convertToRem(borderEndEndRadius)
      : borderEndEndRadius
  }

  if (typeof borderEndEndRadius === 'number') {
    return convertToRem(borderEndEndRadius)
  }

  if (borderEndEndRadius === null || borderEndEndRadius === undefined) {
    return '0'
  }

  return borderEndEndRadius
}
