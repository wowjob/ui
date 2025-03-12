export const storyTypeList = [
  'internal',
  'linkedin',
  'x',
  'facebook',
  'youtube',
  'website',
  'threads',
  'tiktok',
] as const

export type TStoryTypeList = (typeof storyTypeList)[number]

export type TDBStory = {
  id: number
  name: string
  raw: string
  note?: string
  external_link?: string
  type: TStoryTypeList // default 'internal'
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
  env: 'test' | 'prod' // default 'test'
  access: 'public' | 'private' // default 'private'
  language: string
}
