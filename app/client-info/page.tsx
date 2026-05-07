import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import ClientInfoContent from '@/content/05-client-info.mdx'

export const metadata: Metadata = {
  title: 'Информация для клиента',
  description: 'Подготовка к процедуре МЗ, первый душ, уход после, противопоказания и что надеть.',
}

export default function ClientInfoPage() {
  const { prev, next } = getPrevNext('/client-info')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="client-info" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 5</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">Информация для клиента</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <ClientInfoContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
