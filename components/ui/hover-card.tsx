'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface HoverCardProps {
  children: React.ReactNode
}

const HoverCard = ({ children }: HoverCardProps) => {
  return <div className="relative">{children}</div>
}

interface HoverCardTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

const HoverCardTrigger = ({ children, asChild = false }: HoverCardTriggerProps) => {
  return <div className="inline-block">{children}</div>
}

interface HoverCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

const HoverCardContent = React.forwardRef<
  HTMLDivElement,
  HoverCardContentProps
>(({ className, side = 'right', align = 'center', sideOffset = 4, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={cn(
        'absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        side === 'top' && 'bottom-full mb-2',
        side === 'right' && 'left-full ml-2',
        side === 'bottom' && 'top-full mt-2',
        side === 'left' && 'right-full mr-2',
        align === 'start' && 'origin-top-left',
        align === 'center' && 'origin-center',
        align === 'end' && 'origin-top-right',
        className
      )}
      {...props}
    />
  )
})

HoverCardContent.displayName = 'HoverCardContent'

export { HoverCard, HoverCardTrigger, HoverCardContent }
