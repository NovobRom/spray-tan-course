import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import LotionsContent from '@/content/03-lotions.mdx'

export const metadata: Metadata = {
  title: 'О лосьонах',
  description: 'Состав лосьона, процентные показатели DHA, бронзатор, виды, подбор под фототип и хранение.',
}

export default function LotionsPage() {
  const { prev, next } = getPrevNext('/lotions')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="lotions" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 3</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">О лосьонах</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <LotionsContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
