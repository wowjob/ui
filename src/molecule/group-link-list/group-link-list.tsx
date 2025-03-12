// 'use client'

import { Flex, LinkButton, Text } from '@/atom'
import type { TDBAudience } from '@/util'
import { usePathname } from 'next/navigation'
import { ButtonGroup } from '../button-group/button-group'

export const GroupLinkList = ({
  title,
  audienceList = [],
  storyId,
  segment,
}: {
  title: string
  segment: string
  audienceList?: TDBAudience[]
  storyId: number
}) => {
  const path = usePathname()
  const showAudienceList =
    Array.isArray(audienceList) && audienceList.length > 0

  const list = (Array.isArray(audienceList) ? audienceList : []).map(
    ({ name }) => ({
      name,
      href: `/story/${storyId}/${segment}/${name}`,
    })
  )

  return (
    <Flex
      mobile={{ flexDirection: 'column', alignItems: 'center' }}
      tablet={{ flexDirection: 'row', justifyContent: 'center' }}
    >
      <Flex
        theme="warning"
        mobile={{
          padding: [12, 32],
          borderRadius: 16,
          alignItems: 'center',
          width: 'fit-content',
          alignSelf: 'center',
        }}
      >
        <Text>{title}</Text>
      </Flex>

      <ButtonGroup mobile={{ alignSelf: 'center' }}>
        {showAudienceList &&
          list?.map(({ name, href }) => (
            <LinkButton
              theme={href === path ? 'primary' : 'info'}
              href={href}
              key={name}
            >
              {name}
            </LinkButton>
          ))}
      </ButtonGroup>
    </Flex>
  )
}
