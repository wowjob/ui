import { Flex, NextLink, SimpleCard, Text } from '../..'
import type { TSimpleGridList } from './simple-grid-list.type'
import { unstable_ViewTransition as ViewTransition } from 'react'

export const SimpleGridList = async ({
  action,
  body,
  grid,
  title,
  table,
}: TSimpleGridList) => {
  const showList = Array.isArray(body.list)

  return (
    <>
      <Flex mobile={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <ViewTransition name={`${table}-title`}>
          <Text as="h2">{title}</Text>
        </ViewTransition>

        <NextLink
          href={`/${[table, action.href].join('/')}`}
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
          body.list.map(({ id, title = '', description = '' }) => (
            <SimpleCard
              key={id}
              title={title}
              content={[description]}
              viewTransitionName={`${table}-title-${id}`}
              footer={{
                action: [
                  {
                    href: `/${[table, id, body.action.href].join('/')}`,
                    label: body.action.label,
                    title: body.action.title,
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
