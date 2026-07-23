import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { InstrumentGrid } from '@/components/instrument-grid'

export const metadata: Metadata = {
  title: 'Instruments | Nhlamulo Academy of Music',
  description: 'Explore all the instruments you can learn at Nhlamulo Academy of Music.',
}

export default function InstrumentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What You Can Learn"
        title="Our Instruments"
        description="From piano and guitar to violin, saxophone and voice, every instrument comes with a free beginner lesson to get you started."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <InstrumentGrid />
      </section>
    </>
  )
}
