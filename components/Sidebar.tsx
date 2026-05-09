'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { sections } from '@/lib/navigation'
import { isVisited } from '@/lib/progress'

export function Sidebar() {
  const pathname = usePathname()
  const [visited, setVisited] = useState<Record<string, boolean>>({})
  const [open, setOpen] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const state: Record<string, boolean> = {}
    sections.forEach((s) => {
      state[s.id] = isVisited(s.id)
    })
    setVisited(state)
  }, [pathname])

  // Close drawer and reset manual expansion on route change
  useEffect(() => {
    setOpen(false)
    setExpandedId(null)
  }, [pathname])

  const isExpanded = (sectionId: string, sectionHref: string) =>
    sectionId === expandedId || sectionHref === pathname

  const nav = (
    <nav className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b border-border px-5 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink hover:text-tan transition-colors"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-lg font-bold leading-tight">
            Spray Tan<br />
            <span className="text-tan">by li_zagar_tan</span>
          </span>
        </Link>
      </div>

      {/* Sections list */}
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-0.5 px-3">
          {sections.map((section) => {
            const isActive = pathname === section.href
            const hasVisited = visited[section.id]
            const hasSubs = section.subsections.length > 0
            const expanded = isExpanded(section.id, section.href)

            return (
              <li key={section.id}>
                <div
                  className={clsx(
                    'flex items-center gap-2 rounded-lg pr-1 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-beige text-tan'
                      : 'text-muted hover:bg-cream hover:text-ink'
                  )}
                >
                  <Link
                    href={section.href}
                    onClick={() => {
                      if (hasSubs) setExpandedId(section.id)
                      else setOpen(false)
                    }}
                    className="flex flex-1 items-center gap-2 px-3 py-2.5"
                  >
                    {/* Progress indicator */}
                    <span
                      className={clsx(
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold',
                        hasVisited
                          ? 'bg-tan text-white'
                          : isActive
                          ? 'bg-tan/20 text-tan'
                          : 'bg-border text-muted'
                      )}
                    >
                      {hasVisited ? '✓' : section.number}
                    </span>
                    <span className="leading-tight">{section.title}</span>
                  </Link>

                  {hasSubs && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedId((cur) => (cur === section.id ? null : section.id))
                      }
                      aria-label={expanded ? 'Свернуть подразделы' : 'Раскрыть подразделы'}
                      aria-expanded={expanded}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-xs text-muted transition-colors hover:bg-border/50 hover:text-ink"
                    >
                      <span
                        className={clsx(
                          'inline-block transition-transform',
                          expanded ? 'rotate-90' : 'rotate-0'
                        )}
                      >
                        ▸
                      </span>
                    </button>
                  )}
                </div>

                {hasSubs && expanded && (
                  <ul className="ml-10 mt-1 space-y-0.5">
                    {section.subsections.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={`${section.href}#${sub.id}`}
                          className="block rounded px-2 py-1 text-xs text-muted transition-colors hover:text-tan"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cream shadow-sm lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Открыть меню"
      >
        <span className="flex flex-col gap-1.5">
          <span
            className={clsx(
              'block h-0.5 w-5 bg-ink transition-transform',
              open && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-5 bg-ink transition-opacity',
              open && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block h-0.5 w-5 bg-ink transition-transform',
              open && '-translate-y-2 -rotate-45'
            )}
          />
        </span>
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {nav}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block lg:w-[280px] lg:shrink-0">
        <div className="sticky top-0 h-screen w-[280px] overflow-hidden border-r border-border bg-white">
          {nav}
        </div>
      </aside>
    </>
  )
}
