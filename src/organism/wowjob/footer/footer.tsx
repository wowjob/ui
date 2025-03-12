import { Flex } from '@/atom'

export const Footer = () => {
  return (
    <Flex
      mobile={{
        padding: [20, 0],
        width: '100%',
        justifySelf: 'center',
        alignItems: 'center',
      }}
      tablet={{
        padding: [64, 8, 130],
        justifySelf: 'center',
        alignItems: 'center',
        maxWidth: 1280,
      }}
    >
      <Flex>
        &copy; 2024 - 2025 Wow Job Fzc ({process.env.NEXT_PUBLIC_DOMAIN_NAME}) -
        All rights reserved
      </Flex>
    </Flex>
  )
}
