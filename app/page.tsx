import Link from 'next/link'
import { Sparkles, GraduationCap, Music, ArrowRight } from 'lucide-react'
import { Hero } from '@/components/hero'
import { InstrumentGrid } from '@/components/instrument-grid'
import { FounderCta } from '@/components/founder-cta'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    icon: Music,
    title: 'Start Instantly',
    text: 'Begin learning right away with free beginner lessons. No payment, no locked content.',
  },
  {
    icon: GraduationCap,
    title: 'Grow With Coaching',
    text: 'Continue your musical growth through personal online coaching with the founder.',
  },
  {
    icon: Sparkles,
    title: 'Learn Your Way',
    text: 'Choose from thirteen instruments and music theory, all crafted for beginners.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Welcome intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Welcome to Nhlamulo Academy of Music
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We make music education simple, enjoyable and accessible for everyone. Every student can
            start learning immediately with our free beginner lessons, and continue their journey
            with advanced online coaching led personally by our founder.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instruments */}
      <section className="bg-secondary/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Choose Your Instrument
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                Each card opens a free beginner lesson. Pick one and start playing today.
              </p>
            </div>
            <Button render={<Link href="/instruments" />} variant="outline">
              View all
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-10">
            <InstrumentGrid />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <FounderCta heading="Ready for advanced lessons?" />
      </section>
    </>
  )
}
