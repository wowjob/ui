import { Flex, Text, TStyle } from '../..'

export const Footer = async ({
  copyright,
  theme = 'dark',
}: {
  copyright: string
  theme: TStyle['theme']
}) => {
  return (
    <Flex theme={theme} mobile={{ padding: 32, alignItems: 'center' }}>
      <Text>{copyright}</Text>
    </Flex>
  )
}
