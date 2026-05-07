import type { Metadata } from 'next'
import Link from 'next/link'
import { sections } from '@/lib/navigation'
import { TocCard } from '@/components/TocCard'

export const metadata: Metadata = {
  title: 'Spray Tan Course by li_zagar_tan',
  description: 'Базовый курс с углублением: всё о моментальном загаре — теория, практика, уход и бизнес.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink px-6 py-20 text-center lg:px-12 lg:py-28">
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-tan">
            Базовый курс с углублением
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Моментальный<br />загар
          </h1>
          <p className="mt-4 font-serif text-3xl italic text-tan sm:text-4xl">
            Spray Tan
          </p>
          <p className="mt-3 text-sm tracking-widest text-white/60">
            by @li_zagar_tan
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-tan px-8 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
          >
            Начать курс
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Welcome block */}
      <section className="border-b border-border bg-beige px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-ink">
            Добро пожаловать в мир идеального загара! ❤️
          </h2>
          <p className="mt-4 text-lg italic leading-relaxed text-muted">
            Привет! Я рада, что ты здесь, и спасибо за доверие!<br />
            Ты стоишь на пороге удивительной профессии, которая дарит людям не просто красивый оттенок кожи, а уверенность в себе и счастливые улыбки!
          </p>
          <p className="mt-5 leading-relaxed text-ink">
            ЭТОТ КУРС — ЭТО КВИНТЭССЕНЦИЯ МОЕГО ОПЫТА, УПАКОВАННАЯ В ЧЕТКУЮ И ПОНЯТНУЮ СИСТЕМУ. Я ВЛОЖИЛА СЮДА ВСЮ ДУШУ И ЗНАНИЯ, ЧТОБЫ ТВОЙ СТАРТ В ПРОФЕССИИ БЫЛ МАКСИМАЛЬНО ЛЕГКИМ, УВЕРЕННЫМ И ЭФФЕКТИВНЫМ! ЗДЕСЬ ТЫ НАЙДЕШЬ ТО, ЧТО РЕАЛЬНО РАБОТАЕТ И ПРИНОСИТ ДЕНЬГИ В ЭТОЙ ПРОФЕССИИ.
          </p>
          <blockquote className="mt-6 border-l-4 border-tan pl-5 font-serif text-xl italic text-ink">
            &ldquo;Моментальный загар — это искусство дарить красоту и уверенность&rdquo; и я научу тебя всем его тонкостям
          </blockquote>
          <p className="mt-6 font-semibold text-ink">
            ВПЕРЕДИ МНОГО ПОЛЕЗНОЙ И ЭКСКЛЮЗИВНОЙ ИНФОРМАЦИИ. НАЧНЕМ! 🚀
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section className="px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 font-serif text-3xl font-bold text-ink">Содержание курса</h2>
          <p className="mb-10 text-muted">9 разделов — от теории до практики</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <TocCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
