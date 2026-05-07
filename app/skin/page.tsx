import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import SkinContent from '@/content/02-skin.mdx'

export const metadata: Metadata = {
  title: 'О коже',
  description: 'Строение кожи, типы кожи, очищение и увлажнение, фототипы по шкале Фитцпатрика.',
}

export default function SkinPage() {
  const { prev, next } = getPrevNext('/skin')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="skin" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 2</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">О коже</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <SkinContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
