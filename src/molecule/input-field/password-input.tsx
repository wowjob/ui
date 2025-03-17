'use client'

import { Button, Flex, Input } from '@/atom'
import type { TInputField } from './type'
import { useState } from 'react'

export const PasswordInput = ({
  mobile,
  tablet,
  desktop,
  theme,
  label,
  info,
  name,
  error,
  ...rest
}: TInputField) => {
  const [show, toggle] = useState(false)

  return (
    <Flex
      mobile={{ flexDirection: 'column' }}
      tablet={{ flexDirection: 'row' }}
    >
      <Input
        id={name}
        name={name}
        {...rest}
        type={show ? 'text' : 'password'}
        mobile={{ flexGrow: 1 }}
      />

      {show && (
        <Button
          mobile={{
            width: 48,
            height: 48,
            padding: 0,
            justifyContent: 'center',
            fontSize: 28,
          }}
          onClick={() => toggle(false)}
        >
          &#x1F649;
        </Button>
      )}

      {!show && (
        <Button
          mobile={{
            width: 48,
            height: 48,
            padding: 0,
            justifyContent: 'center',
            fontSize: 28,
          }}
          onClick={() => toggle(true)}
        >
          &#128584;
        </Button>
      )}
    </Flex>
  )
}
