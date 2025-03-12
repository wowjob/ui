import type { TAudience } from '../website'

export type TDBStorySocial = {
  id: number
  story_id: number // links to wj_story.id
  social: string
  short?: string
  audience: TAudience
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
