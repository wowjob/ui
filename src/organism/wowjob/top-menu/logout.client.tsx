// 'use client'

import { Button } from '@/atom'

export const LogoutClient = ({
  logoutAction,
}: {
  logoutAction: () => Promise<void>
}) => (
  <form action={logoutAction}>
    <Button
      type="submit"
      mobile={{
        fontSize: 36,
        width: 48,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      👋
    </Button>
  </form>
)
