import Link from 'next/link'
import { Section } from '@/lib/navigation'

interface TocCardProps {
  section: Section
}

export function TocCard({ section }: TocCardProps) {
  return (
    <Link
      href={section.href}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-white p-6 transition-all hover:border-tan hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige text-sm font-semibold text-tan">
          {section.number}
        </span>
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-tan">
          {section.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{section.description}</p>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-tan">
        Читать
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
