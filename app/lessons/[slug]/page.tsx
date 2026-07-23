import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, PartyPopper } from 'lucide-react'
import { instruments, getInstrument } from '@/lib/lessons'
import { InstrumentIcon } from '@/components/instrument-icon'
import { LessonCompleteButton } from '@/components/lesson-complete-button'
import { FounderCta } from '@/components/founder-cta'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return instruments.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const instrument = getInstrument(slug)
  if (!instrument) return { title: 'Lesson Not Found' }
  return {
    title: `${instrument.name} — Beginner Lesson | Nhlamulo Academy of Music`,
    description: instrument.intro,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const instrument = getInstrument(slug)
  if (!instrument) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <Button render={<Link href="/lessons" />} variant="ghost" size="sm" className="mb-6 -ml-2">
        <ArrowLeft className="size-4" />
        All Lessons
      </Button>

      <div className="flex items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <InstrumentIcon name={instrument.icon} className="size-7" />
        </span>
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent-foreground/80">
            Beginner Lesson
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {instrument.name}
          </h1>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-2xl font-bold text-primary">{instrument.lessonTitle}</h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
            <Clock className="size-4" />
            10 minutes
          </span>
        </div>

        <p className="mt-4 leading-relaxed text-muted-foreground">{instrument.intro}</p>

        <ol className="mt-6 space-y-3">
          {instrument.steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <span className="leading-relaxed text-foreground">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-start gap-3 rounded-xl bg-accent/10 p-5">
          <PartyPopper className="mt-0.5 size-6 shrink-0 text-accent-foreground" />
          <p className="font-medium text-foreground">{instrument.closing}</p>
        </div>

        <div className="mt-8">
          <LessonCompleteButton slug={instrument.slug} name={instrument.name} />
        </div>
      </div>

      <div className="mt-10">
        <FounderCta />
      </div>
    </div>
  )
}
