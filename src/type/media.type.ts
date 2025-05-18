export const mediaTypeMap = {
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
} as const

type TMediaType = keyof typeof mediaTypeMap

export type TImageConfig = {
  width: number
  height: number
  quality: number
  type: TMediaType
  key: 'landscape' | 'portrait' | ('open-graph' | (string & {}))
}
