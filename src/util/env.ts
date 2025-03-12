export const getEnv = () => {
  console.log('get env')
  if (typeof process !== 'undefined') {
    return process.env.NODE_ENV
  }
}
