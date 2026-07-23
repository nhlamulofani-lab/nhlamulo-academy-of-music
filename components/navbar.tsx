'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Music2, LayoutDashboard, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/auth-provider'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/instruments', label: 'Instruments' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout, ready } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Music2 className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-bold text-primary">Nhlamulo Academy</span>
            <span className="text-[11px] tracking-wide text-muted-foreground">of Music</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary',
                pathname === link.href && 'text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {ready && user ? (
            <>
              <Button render={<Link href="/dashboard" />} variant="ghost" size="sm">
                <LayoutDashboard className="size-4" />
                Dashboard
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="size-4" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button render={<Link href="/login" />} variant="ghost" size="sm">
                Student Login
              </Button>
              <Button render={<Link href="/signup" />} size="sm">
                Sign Up
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary',
                  pathname === link.href && 'bg-secondary text-primary',
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              {ready && user ? (
                <>
                  <Button render={<Link href="/dashboard" />} variant="outline" onClick={() => setOpen(false)}>
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => {
                      logout()
                      setOpen(false)
                    }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button render={<Link href="/login" />} variant="outline" onClick={() => setOpen(false)}>
                    Student Login
                  </Button>
                  <Button render={<Link href="/signup" />} onClick={() => setOpen(false)}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
