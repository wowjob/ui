export type TDBStorySuggest = {
  id: number
  story_id: number // links to wj_story.id
  suggestion: string
  note?: string
  audience: string
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
