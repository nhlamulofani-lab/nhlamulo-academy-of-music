import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, Award, Heart, Users } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { FounderCta } from '@/components/founder-cta'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About the Founder | Nhlamulo Academy of Music',
  description: `Learn about ${site.founder}, founder of Nhlamulo Academy of Music.`,
}

const values = [
  { icon: Heart, title: 'Enjoyable', text: 'Learning music should be joyful and rewarding from day one.' },
  { icon: Users, title: 'Accessible', text: 'Free introductory lessons open the door for every aspiring musician.' },
  { icon: Award, title: 'Personal', text: 'Private online coaching guides each student on their own path.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About the Founder"
        description="Nhlamulo Academy of Music exists to make music education simple, enjoyable and accessible for everyone."
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-lg">
            <Image
              src="/images/Nhlamulo_piano.jpg"
              alt={`${site.founder}, founder and instructor at Nhlamulo Academy of Music`}
              width={640}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/80">
              Founder
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground">{site.founder}</h2>
            <p className="mt-1 text-lg text-primary">{site.founderTitle}</p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Nhlamulo Academy of Music was founded by {site.founder} with the vision of making
              music education simple, enjoyable and accessible for everyone. Students begin with free
              introductory lessons before continuing their musical journey through private online
              coaching.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`tel:${site.phoneDial}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary">
                <Phone className="size-4 text-accent-foreground" />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-foreground hover:text-primary">
                <Mail className="size-4 text-accent-foreground" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <value.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <FounderCta />
        </div>
      </section>
    </>
  )
}
