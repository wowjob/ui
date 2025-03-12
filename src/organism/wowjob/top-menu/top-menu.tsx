import { Flex, LinkButton } from '@/atom'
import { ButtonGroup } from '@/molecule'
import type { TStyle } from '@/css'
import type { ReactNode } from 'react'
import { TopMenuClient } from './top-menu.client'
import { LogoutClient } from './logout.client'

type TLink = {
  link: string
  label: string
  icon?: string
  title?: string
  theme?: TStyle['theme']
}

type TTopMenu = {
  home: TLink
  linkList?: TLink[]
  children?: ReactNode
  logoutAction?: () => Promise<void>
}

export const TopMenu = ({ home, linkList, logoutAction }: TTopMenu) => {
  const showLinkList = Array.isArray(linkList) && linkList.length > 0

  return (
    <Flex
      as="nav"
      mobile={{
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        order: -1,
        width: '100%',
      }}
      tablet={{
        position: 'fixed',
        padding: [4, 12],
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '0',
        left: '0',
      }}
      theme="dark"
    >
      <LinkButton
        href={home.link}
        title={home.title}
        mobile={{
          fontSize: 36,
          width: 48,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🏠
      </LinkButton>

      <TopMenuClient />

      <ButtonGroup>
        {showLinkList &&
          linkList.map(({ label, link, theme, title, icon }) =>
            icon ? (
              <LinkButton
                key={link}
                href={link}
                title={title}
                mobile={{
                  fontSize: 36,
                  width: 48,
                  padding: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </LinkButton>
            ) : (
              <LinkButton key={link} href={link} theme={theme} title={title}>
                {label}
              </LinkButton>
            )
          )}

        {logoutAction && <LogoutClient logoutAction={logoutAction} />}
      </ButtonGroup>
    </Flex>
  )
}
