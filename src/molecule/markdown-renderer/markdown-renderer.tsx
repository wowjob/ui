import { createElement, Fragment } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeReact from 'rehype-react'
import { jsx, jsxs } from 'react/jsx-runtime'

import { Flex, NextLink, Text } from '../..'

type TMarkdownRendererMap = {
  markdown: string
}

// markdown-renderer
export const MarkdownRenderer = ({ markdown }: TMarkdownRendererMap) => {
  // map HTML tags → your custom components
  const componentsMap = {
    // layout primitives
    // eslint-disable-next-line
    div: (props: any) => <Flex {...props} />,
    // eslint-disable-next-line
    section: (props: any) => <Flex as="section" {...props} />,
    // eslint-disable-next-line
    article: (props: any) => <Flex as="article" {...props} />,
    // eslint-disable-next-line
    ul: (props: any) => (
      <Flex as="ul" mobile={{ padding: [0, 16] }} {...props} />
    ),
    // eslint-disable-next-line
    ol: (props: any) => (
      <Flex as="ol" mobile={{ padding: [0, 16] }} {...props} />
    ),
    // eslint-disable-next-line
    li: (props: any) => (
      <Flex mobile={{ display: 'list-item' }} as="li" {...props} />
    ),
    // text primitives
    // eslint-disable-next-line
    p: (props: any) => <Text {...props} />,
    // eslint-disable-next-line
    span: (props: any) => <Text as="span" {...props} />,
    // eslint-disable-next-line
    h1: (props: any) => <Text as="h1" {...props} />,
    // eslint-disable-next-line
    h2: (props: any) => <Text as="h2" {...props} />,
    // eslint-disable-next-line
    h3: (props: any) => <Text as="h3" {...props} />,
    // eslint-disable-next-line
    h4: (props: any) => <Text as="h4" {...props} />,
    // eslint-disable-next-line
    h5: (props: any) => <Text as="h5" {...props} />,
    // eslint-disable-next-line
    h6: (props: any) => <Text as="h6" {...props} />,
    // eslint-disable-next-line
    strong: (props: any) => <Text as="strong" {...props} />,
    // eslint-disable-next-line
    em: (props: any) => <Text as="em" {...props} />,
    // links
    // eslint-disable-next-line
    a: ({ href, children, ...rest }: any) => (
      <NextLink
        href={href}
        {...rest}
        mobile={{
          textDecoration: 'underline',
          padding: [4, 6],
          borderRadius: 4,
        }}
        theme="info"
      >
        {children}
      </NextLink>
    ),
  }

  const content = unified()
    .use(remarkParse) // markdown → md AST
    .use(remarkRehype) // md AST → HTML AST
    .use(rehypeSanitize) // strip dangerous things
    .use(rehypeReact, {
      // HTML AST → React nodes
      createElement: createElement,
      Fragment, // required
      jsx, // required in production
      jsxs, // required in production
      components: componentsMap,
    })
    .processSync(markdown).result

  return content
}
