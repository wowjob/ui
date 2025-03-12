export const getEnv = () => {
  console.log('get env')
  if (typeof process !== 'undefined') {
    return process.env.NODE_ENV
  }

  if (typeof import.meta !== 'undefined') {
    return import.meta.env.MODE
  }

  return 'development'
}
