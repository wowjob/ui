type TExample = {
  text: string
  rationale: string
  placeAfter: string
  placeBefore: string
}

type TAspect = {
  description: string
  targetScore: number
  score: number
  example: TExample[]
}

export type TScoreKey =
  | 'authenticity'
  | 'relatability'
  | 'emotionalImpact'
  | 'heartfeltMessage'
  | 'narrativeEngagement'
  | 'vividLanguage'
  | 'personalVoice'
  | 'simpleLanguage'
  | 'universalThemes'

type TScore = Record<TScoreKey, TAspect>

export type TStoryCommit = {
  story: string
  score: TScore
  note: string
}
