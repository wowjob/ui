import type {
  TCommitCategorization,
  TGithubCommit,
  TStoryCommit,
} from '../github'

type TFile = {
  sha: string
  filename: string
  status: string
  additions: number
  deletions: number
  changes: number
  patch: string
}

export type TDBCommit = {
  created_by: string
  owner: string
  repo: string
  sha: string
  created_at: string
  status: string
  commit: TGithubCommit
  files?: TFile[]
  categorisation?: TCommitCategorization
  story?: Record<string, TStoryCommit>
}
