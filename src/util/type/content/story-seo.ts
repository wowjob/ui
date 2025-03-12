export type TDBStorySEO = {
  id: number
  story_id: number // links to wj_story.id
  seo: string
  title?: string
  description?: string
  mission_title?: string
  mission_description?: string
  slug?: string
  audience: string
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
