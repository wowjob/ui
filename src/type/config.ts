export type TCopyrightJSON = {
  copyright: string
  company_type: string
  address_line_1: string
  address_line_2: string
  google_map_link: string
}

export type TWebsiteBeliefJSON = {
  website_title: string
  website_subtitle: string
  website_belief: string
}

export type TLandingJSON = {
  website_title: string
  website_subtitle: string
  website_belief: string
  meta_title: string
  meta_description: string
}

export const socialList = [
  'tiktok',
  'facebook',
  'github',
  'instagram',
  'linkedin',
  'stackoverflow',
  'threads',
  'x',
  'youtube',
] as const

type TSocial = (typeof socialList)[number]

export type TSocialJSON = Partial<Record<TSocial, string>>
