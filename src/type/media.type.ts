export const mediaTypeMap = {
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  svg: 'image/svg+xml',
} as const

type TMediaType = keyof typeof mediaTypeMap

export type TImageConfig = {
  width: number
  height: number
  quality: number
  type: TMediaType
  key: 'landscape' | 'portrait' | ('open-graph' | (string & {}))
}

export type TMediaPayload = {
  // name: partial-slug to improve SEO by being present in the file name
  name: string
  // file content type
  type: string
  // size of the file
  size: number
  // media_key in database (should be unique per content_id). Example: open-graph, header, header-tablet, this-is-a-custom-key etc
  media_key: string
  // content id, 0 for general, a number greated than 0 if it's part of a specific content
  content_id: number
  width?: number
  height?: number
}
