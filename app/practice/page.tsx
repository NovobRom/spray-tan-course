import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import PracticeContent from '@/content/07-practice.mdx'

export const metadata: Metadata = {
  title: 'Информация для практики',
  description: 'Этапы процедуры МЗ, техника нанесения, видео-инструкция и психология общения с клиентом.',
}

export default function PracticePage() {
  const { prev, next } = getPrevNext('/practice')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="practice" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 7</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">Информация для практики</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <PracticeContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
