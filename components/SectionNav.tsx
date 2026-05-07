import Link from 'next/link'
import { Section } from '@/lib/navigation'

interface SectionNavProps {
  prev?: Section
  next?: Section
}

export function SectionNav({ prev, next }: SectionNavProps) {
  return (
    <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-tan"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wide">Предыдущий</span>
              <span className="font-medium text-ink group-hover:text-tan">
                {prev.title}
              </span>
            </span>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {next && (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-tan"
          >
            <span className="flex flex-col items-end">
              <span className="text-xs uppercase tracking-wide">Следующий</span>
              <span className="font-medium text-ink group-hover:text-tan">
                {next.title}
              </span>
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
