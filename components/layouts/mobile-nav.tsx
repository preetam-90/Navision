import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavItem } from '@/types/navbar'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/icons'

interface MobileNavProps {
  items?: NavItem[]
}

// Create a VisuallyHidden component for accessibility
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <span 
      style={{
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
};

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  
  // Only render on client-side to prevent hydration issues
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
      >
        <Icons.menu className="size-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[350px] flex-col p-0"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="px-7 py-4">
          <Link
            aria-label="Home"
            href="/"
            className="flex w-fit items-center"
            onClick={() => setIsOpen(false)}
          >
            <Icons.reelLogo className="mr-2 size-6" aria-hidden="true" />
            <span className="text-lg font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="my-4 flex flex-1 flex-col gap-4 px-9 pb-10">
          {items?.map((item, index) => (
            <div className="border-b-2 last:border-b-0" key={item.title}>
              <MobileLink
                key={index}
                href={item.href!}
                pathname={pathname}
                setIsOpen={setIsOpen}
                disabled={item.disabled}
                scroll={item.scroll}
              >
                {item.title}
              </MobileLink>
            </div>
          ))}
        </div>
        
        {/* Fixed position at the bottom */}
        <div className="border-t border-border px-9 py-4 mt-auto">
          <Link 
            href={siteConfig.links.buyMeACoffee}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 w-full justify-center"
          >
            <Icons.buyMeACoffee className="size-5" />
            <span>Buy me a coffee</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  scroll?: boolean
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
  scroll,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      scroll={scroll}
      className={cn(
        'w-fit text-base font-medium text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-secondary-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
