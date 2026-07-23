import Link from 'next/link'
import { Music2, Phone, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Music2 className="size-5" />
            </span>
            <span className="font-serif text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Founded by {site.founder}. Making music education simple, enjoyable and accessible for
            everyone.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-accent">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/lessons" className="hover:text-accent">Lessons</Link></li>
            <li><Link href="/instruments" className="hover:text-accent">Instruments</Link></li>
            <li><Link href="/music-theory" className="hover:text-accent">Music Theory & Quiz</Link></li>
            <li><Link href="/about" className="hover:text-accent">About the Founder</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-accent">Contact the Founder</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-accent" />
              <a href={`tel:${site.phoneDial}`} className="hover:text-accent">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5">
        <p className="px-4 text-center text-xs text-primary-foreground/70">
          &copy; {site.year} {site.name}. All Rights Reserved. &middot; Founded by {site.founder}.
        </p>
      </div>
    </footer>
  )
}
