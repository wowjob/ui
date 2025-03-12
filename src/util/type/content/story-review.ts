export type TDBStoryReview = {
  id: number
  story_id: number // links to wj_story.id
  title: string
  description: string
  slug: string
  review: string
  thought?: string
  audience: string
  created_at?: string // needs to be populated by supabase on create initially
  updated_at?: string // needs to be populated by supabase on create initially
  created_by: string // supabase auth id
}
