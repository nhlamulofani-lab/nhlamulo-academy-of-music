'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BookOpen,
  Trophy,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Music,
  GraduationCap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/auth-provider'
import { instruments, getInstrument } from '@/lib/lessons'
import { InstrumentIcon } from '@/components/instrument-icon'
import { site } from '@/lib/site'

export default function DashboardPage() {
  const router = useRouter()
  const { user, ready, completedLessons, quizScores } = useAuth()

  useEffect(() => {
    if (ready && !user) router.replace('/login')
  }, [ready, user, router])

  if (!ready || !user) {
    return (
      <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center">
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </div>
    )
  }

  const total = instruments.length
  const completedCount = completedLessons.length
  const progressPct = Math.round((completedCount / total) * 100)
  const bestQuiz = quizScores.length
    ? Math.max(...quizScores.map((q) => (q.score / q.total) * 100))
    : 0
  const nextInstrument =
    instruments.find((i) => !completedLessons.includes(i.slug)) ?? instruments[0]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Welcome */}
      <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Welcome Student</p>
        <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Hello, {user.name}!</h1>
        <p className="mt-2 max-w-2xl text-primary-foreground/75">
          Keep up the great work on your musical journey. Here is your progress so far.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="size-5" />
          </span>
          <p className="mt-4 font-serif text-3xl font-bold text-foreground">
            {completedCount}
            <span className="text-lg text-muted-foreground">/{total}</span>
          </p>
          <p className="text-sm text-muted-foreground">Lessons completed</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="size-5" />
          </span>
          <p className="mt-4 font-serif text-3xl font-bold text-foreground">{progressPct}%</p>
          <p className="text-sm text-muted-foreground">Overall progress</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Trophy className="size-5" />
          </span>
          <p className="mt-4 font-serif text-3xl font-bold text-foreground">
            {quizScores.length ? `${Math.round(bestQuiz)}%` : '—'}
          </p>
          <p className="text-sm text-muted-foreground">Best quiz score</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Continue learning + progress */}
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-foreground">Continue Learning</h2>
            <Link
              href={
                nextInstrument.slug === 'music-theory'
                  ? '/music-theory'
                  : `/lessons/${nextInstrument.slug}`
              }
              className="group mt-4 flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-accent hover:bg-secondary/60"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <InstrumentIcon name={nextInstrument.icon} className="size-6" />
              </span>
              <div className="flex-1">
                <p className="font-serif text-lg font-bold text-foreground">{nextInstrument.name}</p>
                <p className="text-sm text-muted-foreground">{nextInstrument.lessonTitle}</p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-foreground">My Progress</h2>
            {completedCount === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">
                You have not completed any lessons yet.{' '}
                <Link href="/lessons" className="font-medium text-primary hover:underline">
                  Start your first lesson.
                </Link>
              </p>
            ) : (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {completedLessons.map((slug) => {
                  const inst = getInstrument(slug)
                  return (
                    <li
                      key={slug}
                      className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="size-4 text-green-600" />
                      {inst?.name ?? slug}
                    </li>
                  )
                })}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-foreground">Quiz Scores</h2>
            {quizScores.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">
                No quiz attempts yet.{' '}
                <Link href="/music-theory" className="font-medium text-primary hover:underline">
                  Take the beginner quiz.
                </Link>
              </p>
            ) : (
              <ul className="mt-4 space-y-2">
                {quizScores.map((q, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-secondary/60 px-4 py-2.5 text-sm"
                  >
                    <span className="flex items-center gap-2 text-foreground">
                      <Music className="size-4 text-primary" />
                      Music Theory Quiz
                    </span>
                    <span className="font-semibold text-foreground">
                      {q.score}/{q.total}
                      <span className="ml-2 text-muted-foreground">
                        {new Date(q.date).toLocaleDateString()}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        {/* Contact founder */}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
            <h2 className="font-serif text-xl font-bold text-foreground">Contact Founder</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ready for advanced lessons? Reach out to {site.founder} for personal online coaching.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button render={<a href={`tel:${site.phoneDial}`} />}>
                <Phone className="size-4" />
                {site.phoneDisplay}
              </Button>
              <Button render={<a href={`mailto:${site.email}`} />} variant="outline">
                <Mail className="size-4" />
                Email Founder
              </Button>
              <Button render={<Link href="/contact" />} variant="ghost">
                Go to Contact Page
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
