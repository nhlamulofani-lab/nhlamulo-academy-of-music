import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Quiz } from '@/components/quiz'
import { FounderCta } from '@/components/founder-cta'
import { theoryTopics } from '@/lib/quiz'

export const metadata: Metadata = {
  title: 'Music Theory & Quiz | Nhlamulo Academy of Music',
  description: 'Learn beginner music theory topics and test yourself with a short quiz.',
}

export default function MusicTheoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Foundations"
        title="Music Theory"
        description="Short, beginner-friendly topics to build your musical foundation, followed by a quick quiz to test what you have learned."
      />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-foreground">Beginner Topics</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {theoryTopics.map((topic) => (
            <div key={topic.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="font-serif text-2xl font-bold text-foreground">Beginner Quiz</h2>
          <p className="mt-2 text-muted-foreground">
            Answer the questions below and submit to see your score.
          </p>
          <div className="mt-6">
            <Quiz />
          </div>
        </div>

        <div className="mt-12">
          <FounderCta heading="Want to go deeper?" />
        </div>
      </section>
    </>
  )
}
