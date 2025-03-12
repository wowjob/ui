export type TNavigationMenu = {
  data: Record<
    string,
    {
      label: string
      title?: string
    }
  >
  list: string[]
}
