import { Flex, NextLink, Text } from '../..'
import type { TSimpleCard } from './simple-card.type'
// @ts-expect-error
import { unstable_ViewTransition as ViewTransition } from 'react'

export const SimpleCard = ({
  content,
  title,
  footer,
  viewTransitionName,
}: TSimpleCard) => {
  return (
    <Flex
      mobile={{
        borderRadius: 12,
        overflow: 'hidden',
        border: { color: 'black', width: 2 },
        gap: 0,
        flexGrow: 1,
      }}
      theme="light"
    >
      <Flex theme="success" mobile={{ padding: 16 }}>
        <Text as="h3">{title}</Text>
      </Flex>

      <Flex mobile={{ padding: 16, flexGrow: 1 }}>
        <ViewTransition name={viewTransitionName}>
          {content.map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
        </ViewTransition>
      </Flex>

      <Flex mobile={{ padding: 16 }}>
        {footer?.message && <Text>{footer?.message}</Text>}

        <Flex mobile={{ justifyContent: 'end', flexDirection: 'row' }}>
          {footer?.action?.map(({ href, label, title, theme = 'primary' }) => (
            <NextLink
              key={href}
              href={href}
              title={title}
              theme={theme}
              mobile={{
                padding: [8, 16],
                borderRadius: 32,
                width: 'fit-content',
              }}
            >
              {label}
            </NextLink>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
