import type { Metadata } from 'next'
import { Phone, Mail, User } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Nhlamulo Academy of Music',
  description: `Get in touch with ${site.founder}, founder of Nhlamulo Academy of Music.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact the Founder"
        description="Have a question or ready for private online coaching? Send a message or reach out directly."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <User className="size-5" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-bold text-foreground">Founder</h2>
              <p className="text-sm text-muted-foreground">{site.founder}</p>
              <p className="text-sm text-muted-foreground">{site.founderTitle}</p>
            </div>

            <a
              href={`tel:${site.phoneDial}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-accent"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">{site.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-accent"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">{site.email}</p>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}
