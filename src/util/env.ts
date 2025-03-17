import type { TEnv } from '../css'

export const getEnv = (): TEnv => {
  if (typeof process !== 'undefined') {
    return process.env.NODE_ENV as TEnv
  }

  if (typeof import.meta !== 'undefined') {
    return import.meta?.env?.MODE as TEnv
  }

  return 'development'
}
