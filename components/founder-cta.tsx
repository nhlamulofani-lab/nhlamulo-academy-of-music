import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function FounderCta({
  heading = 'Want to continue?',
}: {
  heading?: string
}) {
  return (
    <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 sm:p-8">
      <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">{heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Advanced lessons are available through personal online coaching. Contact Founder{' '}
        <span className="font-semibold text-foreground">{site.founder}</span> to keep growing your
        musical journey.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Button render={<a href={`tel:${site.phoneDial}`} />}>
          <Phone className="size-4" />
          Call {site.phoneDisplay}
        </Button>
        <Button render={<a href={`mailto:${site.email}`} />} variant="outline">
          <Mail className="size-4" />
          {site.email}
        </Button>
        <Button render={<Link href="/contact" />} variant="ghost">
          Contact Page
        </Button>
      </div>
    </div>
  )
}
