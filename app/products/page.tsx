import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import ProductsContent from '@/content/04-products.mdx'

export const metadata: Metadata = {
  title: 'Дополнительные продукты',
  description: 'Биопилинг, крем-барьер и фиксирующая финиш-пудра для моментального загара.',
}

export default function ProductsPage() {
  const { prev, next } = getPrevNext('/products')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="products" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 4</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">Дополнительные продукты</h1>
      </header>
      <div className="prose-course prose max-w-none">
        <ProductsContent />
      </div>
      <SectionNav prev={prev} next={next} />
    </article>
  )
}
