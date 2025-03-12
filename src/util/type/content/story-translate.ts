export type TDBStoryTranslate = {
  id: number
  story_id: number // links to wj_story.id
  audience: string
  text: string
  thought?: string
  title: string
  description: string
  mission_title: string
  mission_description: string
  thumbnail_alt?: string
  video_id?: string
  slug: string
  env: 'test' | 'prod'
  access: 'public' | 'private'
  language: string
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
