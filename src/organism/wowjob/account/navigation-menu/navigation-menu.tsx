import { Flex } from '@wowjob/ui'
import { LinkMenuList } from '@wowjob/ui'
import type { TNavigationMenu } from '@wowjob/ui'

const navigationMenu: TNavigationMenu = {
  data: {
    join: {
      label: 'Join',
      title: 'Join us today',
    },
    return: {
      label: 'Return',
      title: 'Sign back in and get busy',
    },
    recover: {
      label: 'Recover',
      title: 'Recover your lost password',
    },
  },
  list: ['join', 'return', 'recover'],
}

export const NavigationMenu = async ({
  activePage,
}: {
  activePage?: string
}) => {
  return (
    <Flex>
      <LinkMenuList
        defaultMap={navigationMenu.data}
        activePage={activePage}
        list={navigationMenu.list}
        linkPrefix="/account"
      />
    </Flex>
  )
}
