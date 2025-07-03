import '@/styles/globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { QueryProvider } from '@/providers/query-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { PostHogProvider } from '@/providers/posthog-provider'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/layouts/footer'
import { SiteHeader } from '@/components/layouts/site-header'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.websiteURL),
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <PostHogProvider>
          <div className="flex flex-col">
            <SiteHeader />
            <div className="h-full flex-1 overflow-x-hidden">
              <QueryProvider>{children}</QueryProvider>
              <ToastProvider />
              <Footer />
              {modal && modal}
            </div>
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}
