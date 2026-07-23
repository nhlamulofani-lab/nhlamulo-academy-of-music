'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { instruments } from '@/lib/lessons'
import { InstrumentIcon } from '@/components/instrument-icon'

export function InstrumentGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {instruments.map((instrument, index) => {
        const href = instrument.slug === 'music-theory' ? '/music-theory' : `/lessons/${instrument.slug}`
        return (
          <motion.div
            key={instrument.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
          >
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <InstrumentIcon name={instrument.icon} className="size-6" />
                </span>
                <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-foreground">{instrument.name}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                {instrument.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                <BookOpen className="size-4" />
                Free beginner lesson
              </span>
            </Link>
          </motion.div>
        )
      })}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/music-theory"
          className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <BookOpen className="size-6" />
            </span>
            <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
          </div>
          <h3 className="mt-4 font-serif text-xl font-bold text-foreground">Music Theory</h3>
          <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
            Learn the essentials, then test yourself with a beginner quiz.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            <BookOpen className="size-4" />
            Topics + beginner quiz
          </span>
        </Link>
      </motion.div>
    </div>
  )
}
