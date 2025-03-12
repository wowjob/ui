export type TDBAudience = {
  id: number
  name: string
  description: string
  ai_instruction: string
  tone: string
  created_at: string
  updated_at?: string
  created_by: string // supabase auth id
}
