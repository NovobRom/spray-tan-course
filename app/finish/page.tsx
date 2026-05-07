import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Поздравляю! — Spray Tan Course | li_zagar_tan',
  description: 'Ты успешно прошла курс по моментальному загару от li_zagar_tan!',
}

export default function FinishPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-5xl">🤎</p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-ink">
          Поздравляю!
        </h1>

        <div className="mt-8 rounded-2xl border border-border bg-white px-8 py-10 shadow-sm">
          <p className="font-serif text-xl italic leading-relaxed text-ink">
            Ты успешно освоила весь теоретический фундамент, необходимый для старта в профессии. Это была насыщенная и сложная работа, и ты отлично с ней справилась!
          </p>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink">
            Спасибо за твое время и стремление к знаниям. Теперь в твоем арсенале есть все, чтобы понимать, как работает процедура на самом глубоком, профессиональном уровне.
          </p>
          <p className="mt-6 font-serif text-xl font-semibold italic leading-relaxed text-tan">
            Но главный секрет мастерства – в действии.<br />
            Впереди нас ждет самый интересный и важный этап – практика.<br />
            Уже скоро мы будем воплощать все полученные знания в реальный навык и создавать красоту своими руками!
          </p>
          <p className="mt-6 text-2xl">🤎</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-ink transition-colors hover:border-tan hover:text-tan"
          >
            ← На главную
          </Link>
          <a
            href="https://www.instagram.com/li_zagar_tan/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-tan px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Instagram @li_zagar_tan
          </a>
        </div>
      </div>
    </div>
  )
}
