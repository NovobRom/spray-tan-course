import { ReactNode } from 'react'
import clsx from 'clsx'

interface CalloutProps {
  type?: 'note' | 'warning' | 'tip'
  children: ReactNode
}

const styles = {
  note: {
    wrapper: 'bg-beige border-tan',
    icon: '🤎',
  },
  warning: {
    wrapper: 'bg-amber-50 border-amber-500',
    icon: '❗',
  },
  tip: {
    wrapper: 'bg-green-50 border-green-600',
    icon: '✅',
  },
}

export function Callout({ type = 'note', children }: CalloutProps) {
  const s = styles[type]
  return (
    <div
      className={clsx(
        'my-6 rounded-r-lg border-l-4 px-5 py-4',
        s.wrapper
      )}
    >
      <div className="flex gap-3">
        <span className="mt-0.5 shrink-0 text-lg leading-none">{s.icon}</span>
        <div className="min-w-0 text-[1rem] leading-relaxed text-ink">
          {children}
        </div>
      </div>
    </div>
  )
}
