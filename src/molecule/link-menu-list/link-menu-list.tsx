import { LinkButton } from '@/atom'
import { ButtonGroup } from '../button-group/button-group'
import type { TFormTranslationData, TNavigationMenu } from '@/util'

export const LinkMenuList = ({
  activePage = '',
  list,
  defaultMap,
  linkPrefix = '/',
}: {
  activePage?: string
  defaultMap: TFormTranslationData['default']
  linkPrefix: string
  list: TNavigationMenu['list']
}) => {
  return (
    <ButtonGroup
      mobile={{
        padding: 16,
        alignSelf: 'center',
      }}
    >
      {list.map((linkKey) => (
        <LinkButton
          key={linkKey}
          href={`${linkPrefix}/${linkKey}`}
          theme={linkKey === activePage ? 'secondary' : 'highlight'}
          title={defaultMap[linkKey]?.title}
        >
          {defaultMap[linkKey]?.label}
        </LinkButton>
      ))}
    </ButtonGroup>
  )
}
