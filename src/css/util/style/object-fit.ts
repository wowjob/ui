import type { TObjectFit } from '../../type'

export const normalizeObjectFit = (value: TObjectFit): string => {
  if (!value || value === 'fill') {
    return 'fill' // Default value
  }

  if (typeof value === 'string') {
    return value
  }

  return value
}
