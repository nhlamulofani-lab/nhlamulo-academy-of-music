'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, ListMusic, Phone, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url()' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
            <Music className="size-4" />
            Founded by {site.founder}
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Learn Musical Instruments From{' '}
            <span className="text-accent">Beginner To Advanced</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Master your musical journey with professionally designed beginner lessons. Start
            learning today and continue your musical growth through personal online coaching with
            Founder {site.founder}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button render={<Link href="/lessons" />} size="lg">
              <Play className="size-4" />
              Start Learning
            </Button>
            <Button
              render={<Link href="/instruments" />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <ListMusic className="size-4" />
              View Lessons
            </Button>
            <Button
              render={<a href={`tel:${site.phoneDial}`} />}
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Phone className="size-4" />
              Contact Founder
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
