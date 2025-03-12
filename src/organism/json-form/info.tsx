// 'use client'

import { Flex } from '@wowjob/ui'

export const Info = ({
  message,
  status,
  statusCode,
}: {
  message: string
  status: string
  statusCode: number
}) => {
  return (
    <Flex>
      <h1>THIS IS INFO</h1>
      <h1>{JSON.parse(JSON.stringify(status || ''))}</h1>
      <h2>{String(statusCode)}</h2>
      <p>{String(message)}</p>
    </Flex>
  )
}
