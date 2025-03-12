export type TDBStoryAIImage = {
  id: number
  story_id: number // links to wj_story.id
  ai_prompt: string
  alt?: string
  audience: string
  landscape?: boolean
  portrait?: boolean
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
