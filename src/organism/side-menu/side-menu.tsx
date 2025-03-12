import { Flex, LinkButton } from '@/atom'
import { ButtonGroup } from '@/molecule'

export const SideMenu = ({
  menuMap,
  domainName,
  subdomain = false,
}: {
  menuMap: {
    data: Record<
      string,
      {
        label: string
        title: string
        href?: string
      }
    >
    list: string[]
  }
  domainName: string
  subdomain?: boolean
}) => (
  <Flex mobile={{ width: '100%' }}>
    <ButtonGroup
      mobile={{
        flexDirection: 'column',
        borderRadius: 4,
        gap: 0,
        width: '100%',
      }}
      theme="brand"
    >
      {menuMap.list.map((path) => (
        <LinkButton
          key={path}
          href={
            subdomain
              ? `https://${path}.${domainName}`
              : `${menuMap.data[path].href || `/${path}`}`
          }
          title={menuMap.data[path].title}
          theme="tertiary"
        >
          {menuMap.data[path].label}
        </LinkButton>
      ))}
    </ButtonGroup>
  </Flex>
)
