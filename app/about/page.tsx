import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import AboutContent from '@/content/01-about-mz.mdx'

export const metadata: Metadata = {
  title: 'Общая информация про МЗ',
  description: 'Что такое моментальный загар, история возникновения, DHA и безопасность процедуры.',
}

export default function AboutPage() {
  const { prev, next } = getPrevNext('/about')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="about" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 1</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">
          Общая информация про МЗ
        </h1>
      </header>
      <div className="prose-course prose max-w-none">
        <AboutContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
