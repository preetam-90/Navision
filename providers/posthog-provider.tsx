// app/providers.js
'use client'

import { PropsWithChildren } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Safely initialize PostHog
function initPostHog() {
  if (
    typeof window !== 'undefined' && 
    process.env.NEXT_PUBLIC_POSTHOG_KEY && 
    process.env.NEXT_PUBLIC_POSTHOG_HOST
  ) {
    try {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: 'identified_only',
        disable_session_recording: process.env.NODE_ENV !== 'production'
      })
      return posthog
    } catch (error) {
      console.error('PostHog initialization error:', error)
      return null
    }
  }
  return null
}

export function CSPostHogProvider({ children }: PropsWithChildren) {
  const client = initPostHog()

  if (client) {
    return <PostHogProvider client={client}>{children}</PostHogProvider>
  }
  
  return <>{children}</>
}
