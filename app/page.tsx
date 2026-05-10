import type { Metadata } from 'next'
import Image from 'next/image'
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
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden lg:min-h-[700px]">
        <Image
          src="/images/course/hero-background.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[right_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 lg:from-black/60 lg:via-black/40 lg:to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-tan">
            Базовый курс с углублением
          </p>
          <h1 className="whitespace-nowrap font-serif text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Моментальный загар
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
      <section className="border-b border-border bg-beige px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink">
              Добро пожаловать в мир идеального загара! 
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
          <div className="order-first lg:order-last">
            <Image
              src="/images/course/welcome-portrait.jpg"
              alt="li_zagar_tan — автор курса"
              width={320}
              height={480}
              className="h-auto w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
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
