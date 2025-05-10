import { TStyle } from '../..'

type TSimpleGridItem = {
  id: number
  name: string
  description?: string
}

export type TSimpleGridList = {
  title: string
  viewTransition: string
  action: {
    href: string
    title: string
    theme: TStyle['theme']
    label: string
  }
  grid: {
    mobile?: number
    tablet: number
    desktop: number
  }
  body: {
    theme: TStyle['theme']
    viewTransition: string
    list: TSimpleGridItem[]
  }
}
