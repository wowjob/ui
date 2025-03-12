// 'use client'

import { Flex, Text } from '@/atom'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const isNumeric = (value: unknown) => {
  return !Number.isNaN(value) && !Number.isNaN(Number.parseFloat(String(value)))
}

export const TopMenuClient = () => {
  const path = usePathname()
  const [link, setSLink] = useState('')

  useEffect(() => {
    const firstSegment = path.split('/')[1]

    setSLink(
      isNumeric(firstSegment) && typeof window !== 'undefined'
        ? `${window.location.host}/${firstSegment}`
        : ''
    )
  }, [path])

  return link ? (
    <Flex
      mobile={{ flexDirection: 'row', display: 'none' }}
      tablet={{ display: 'flex' }}
    >
      <Text mobile={{ fontSize: 36 }}>👉 👉</Text>

      <Flex
        theme="dark"
        mobile={{
          fontSize: 20,
          padding: [0, 8],
          borderRadius: 36,
          fontFamily: 'courier',
          cursor: 'pointer',
          justifyContent: 'center',
        }}
        tablet={{
          fontSize: 24,
          padding: [0, 12],
        }}
        desktop={{
          fontSize: 32,
          padding: [0, 20],
        }}
      >
        <Text mobile={{ color: 'white' }}>{link}</Text>
      </Flex>

      <Text mobile={{ fontSize: 36 }}>👈 👈</Text>
    </Flex>
  ) : null
}
