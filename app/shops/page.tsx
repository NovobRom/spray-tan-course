import type { Metadata } from 'next'
import { getPrevNext } from '@/lib/navigation'
import { SectionNav } from '@/components/SectionNav'
import { VisitTracker } from '@/components/VisitTracker'
import { ShopCard } from '@/components/ShopCard'

export const metadata: Metadata = {
  title: 'Магазины с товарами',
  description: '7 проверенных магазинов для закупки оборудования, лосьонов и расходных материалов.',
}

const shops = [
  { url: 'https://bonnie.lt/', name: 'Bonnie', description: 'Профессиональные продукты для загара' },
  { url: 'https://minetan.eu/', name: 'MineTan', description: 'Популярные лосьоны и оборудование' },
  { url: 'https://www.suntana.com/', name: 'Suntana', description: 'Профессиональные средства для МЗ' },
  { url: 'https://tanexpert24.pl/', name: 'TanExpert24', description: 'Широкий ассортимент для загара' },
  { url: 'https://hilighter.ua/', name: 'Hilighter', description: 'Украинский магазин расходников' },
  { url: 'https://www.luxuryzasmaga.com/', name: 'Luxury Za Smaga', description: 'Люкс-продукты для загара' },
  { url: 'https://goldzagar.kiev.ua/', name: 'Gold Zagar', description: 'Киевский магазин для мастеров' },
]

export default function ShopsPage() {
  const { prev } = getPrevNext('/shops')
  return (
    <article className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <VisitTracker sectionId="shops" />
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-tan">Раздел 9</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-ink">Магазины с товарами</h1>
        <p className="mt-3 text-muted">
          Проверенные магазины для закупки оборудования, лосьонов и расходных материалов.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {shops.map((shop) => (
          <ShopCard key={shop.url} {...shop} />
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-8">
        {prev && (
          <a
            href={prev.href}
            className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-tan"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wide">Предыдущий</span>
              <span className="font-medium text-ink group-hover:text-tan">{prev.title}</span>
            </span>
          </a>
        )}
        <div className="mt-8 text-center">
          <p className="mb-4 text-muted">Это был последний раздел курса!</p>
          <a
            href="/finish"
            className="inline-flex items-center gap-2 rounded-full bg-tan px-8 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            К поздравительной странице 🎉
          </a>
        </div>
      </div>
    </article>
  )
}
