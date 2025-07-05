'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/layouts/main-nav'
import { MobileNav } from '@/components/layouts/mobile-nav'
import { CommandMenu } from '@/components/command-menu'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full h-16">
      <div className="container h-full">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex items-center justify-end space-x-4">
          <CommandMenu />
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div className={buttonVariants({ size: 'icon', variant: 'ghost' })}>
                <Icons.instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
