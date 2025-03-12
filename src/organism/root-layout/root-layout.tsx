import '@/css/css/reset.css'
import '@/css/css/all.css'
import '@/css/css/ui.css'

import type { ReactNode } from 'react'
import { Flex } from '@/atom'
import Script from 'next/script'
import { permanentRedirect } from 'next/navigation'
import type { UserResponse } from '@supabase/supabase-js'
import { TopMenu } from '../wowjob/top-menu'
import { SideMenu } from '../side-menu'

export const RootLayout = async ({
  children,
  styleString,
  isAuthenticated,
  logoutAction,
  domainName,
  menuMap,
  subdomain,
}: Readonly<{
  children: ReactNode
  styleString?: string
  isAuthenticated: (userDetail?: boolean) => Promise<{
    messaage: string
    status: string
    statusCode: number
    user?: UserResponse
  }>
  logoutAction?: () => Promise<void>
  domainName: string
  menuMap: {
    data: Record<
      string,
      {
        label: string
        title: string
        href?: string
      }
    >
    list: string[]
  }
  subdomain?: boolean
}>) => {
  const language = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE

  const user = await isAuthenticated()

  if (user) {
    return (
      <html lang={language}>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>

        <body id="wow-ui">
          {styleString && <style>{styleString}</style>}

          <TopMenu
            home={{
              link: `https://dashboard.${domainName}`,
              label: 'Home',
              title: 'Back to dashboard',
              icon: '🏠',
            }}
            linkList={[]}
            logoutAction={logoutAction}
          />

          <Flex
            mobile={{
              padding: [64, 0, 0],
              display: 'grid',
              width: '100%',
              gridTemplateColumns: '1fr auto',
            }}
          >
            <Flex
              mobile={{ alignItems: 'center', padding: 0 }}
              desktop={{ padding: 16 }}
            >
              {children}
            </Flex>

            <SideMenu
              domainName={domainName}
              menuMap={menuMap}
              subdomain={subdomain}
            />
          </Flex>

          <Script id="posthog-config">
            const postHogId = &quot;{process.env.NEXT_PUBLIC_POST_HOG_KEY}&quot;
          </Script>

          {process.env.NODE_ENV === 'production' && (
            <Script id="posthog-init" src="/script/posthog.js" />
          )}
        </body>
      </html>
    )
  }

  return permanentRedirect(
    `https://join.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`
  )
}
