type TFilePatch = {
  additions: number
  deletions: number
  changes: number
  sha: string
  filename: string
  status: string
  patch: string
}

export type TGithubCommit = {
  sha: string
  owner: string
  repo: string
  commit: {
    author: {
      name: string
      email: string
      date: string // ISO 8601 format
    }
    message: string
    comment_count: number
  }
  author: {
    login: string
  }
  stats?: {
    total: number
    additions: number
    deletions: number
  }
  files?: TFilePatch[]
  commentList?: string[]
}
