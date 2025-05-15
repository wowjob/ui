import { Flex, NextLink, Text, TStyle } from '../..'

type TLegalItem = {
  text?: string
  label?: string
}
type TLegal = {
  cookie?: TLegalItem
  term?: TLegalItem
  privacy?: TLegalItem
  target?: '_blank' & string
}

export const Footer = async ({
  copyright,
  theme = 'dark',
  legal,
}: {
  copyright: string
  legal?: TLegal
  theme?: TStyle['theme']
}) => {
  let legalList: {
    href: string
    label?: string
  }[] = []

  if (legal) {
    legalList = [
      { href: 'cookie', label: legal.cookie?.label },
      { href: 'term', label: legal.term?.label },
      { href: 'privacy', label: legal.privacy?.label },
    ].filter(({ label }) => label)
  }

  const showLegal = legalList.length > 0

  return (
    <Flex theme={theme} mobile={{ padding: 32, alignItems: 'center' }}>
      {showLegal && (
        <Flex mobile={{ flexDirection: 'row', justifyContent: 'center' }}>
          {legalList.map(({ label, href }) => (
            <NextLink
              href={`/legal/${href}`}
              key={href}
              mobile={{ padding: [8, 16] }}
              target={legal?.target}
            >
              {label}
            </NextLink>
          ))}
        </Flex>
      )}

      <Text>{copyright}</Text>
    </Flex>
  )
}
