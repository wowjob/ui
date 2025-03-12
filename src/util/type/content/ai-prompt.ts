export type TDBAiPrompt = {
  id: number
  actor?: string // act as a storyteller, etc.
  name: string // act as a storyteller, etc.
  audience: string // act as a storyteller, etc.
  description: string // act as a storyteller, etc.
  instruction_list?: string // list of clear instructions
  target_goal?: string // list of clear instructions
  output_structure?: string // desired output format (JSON, bullet points)
  created_by: string // UUID of the creator
  created_at: string // ISO timestamp
  updated_at?: string // ISO timestamp for updates
}
