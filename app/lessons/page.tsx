import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { InstrumentGrid } from '@/components/instrument-grid'

export const metadata: Metadata = {
  title: 'Lessons | Nhlamulo Academy of Music',
  description: 'Browse free beginner lessons across every instrument we teach.',
}

export default function LessonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Beginner Lessons"
        title="Browse Our Lessons"
        description="Start learning immediately. Choose any instrument below to open its free beginner lesson, then continue with private online coaching when you are ready."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <InstrumentGrid />
      </section>
    </>
  )
}
