import { Flex, NextLink, SimpleCard, Text } from '../..'
import type { TSimpleGridList } from './simple-grid-list.type'
import { unstable_ViewTransition as ViewTransition } from 'react'

export const SimpleGridList = async ({
  action,
  body,
  grid,
  title,
  viewTransition,
}: TSimpleGridList) => {
  const showList = Array.isArray(body.list)
  return (
    <>
      <Flex mobile={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <ViewTransition name={`${viewTransition}-title`}>
          <Text as="h2">{title}</Text>
        </ViewTransition>

        <NextLink
          href={action.href}
          title={action.title}
          theme={action.theme}
          mobile={{ padding: 16, borderRadius: 32 }}
        >
          {action.label}
        </NextLink>
      </Flex>

      <Flex
        mobile={{
          display: 'grid',
        }}
        tablet={{
          gridTemplateColumns: `repeat(${grid.tablet}, 1fr)`,
        }}
        desktop={{
          gridTemplateColumns: `repeat(${grid.desktop}, 1fr)`,
        }}
      >
        {showList &&
          body.list.map(({ id, name, description = '' }) => (
            <SimpleCard
              key={id}
              title={name}
              content={[description]}
              viewTransitionName={`${body.viewTransition}-title-${id}`}
              footer={{
                action: [
                  {
                    href: `${action.href}/update/${id}`,
                    label: 'Update',
                    title: `Update ${title}`,
                    theme: body.theme,
                  },
                ],
              }}
            />
          ))}
      </Flex>
    </>
  )
}
