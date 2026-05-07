import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import ToolkitContent from '@/content/08-toolkit.mdx'

export const metadata: Metadata = {
  title: 'Базовый набор инструментов',
  description: '14 инструментов мастера моментального загара для профессиональной работы.',
}

export default function ToolkitPage() {
  const { prev, next } = getPrevNext('/toolkit')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="toolkit" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 8</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">Базовый набор инструментов</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <ToolkitContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
