import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import FaqContent from '@/content/06-faq.mdx'

export const metadata: Metadata = {
  title: 'FAQ — Часто задаваемые вопросы',
  description: 'Готовые шаблоны ответов клиентам: стойкость, совместимость, депиляция, смывание загара.',
}

export default function FaqPage() {
  const { prev, next } = getPrevNext('/faq')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="faq" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 6</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">FAQ</h1>
        <p className="mt-2 text-muted">Часто задаваемые вопросы</p>
      </header>
      <div className="prose-course prose max-w-none">
        <FaqContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
