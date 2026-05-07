'use client'

import { resetProgress } from '@/lib/progress'

export function ResetProgress() {
  function handleReset() {
    resetProgress()
    window.location.reload()
  }

  return (
    <button
      onClick={handleReset}
      className="text-xs text-muted underline-offset-2 hover:text-tan hover:underline"
    >
      Сбросить прогресс
    </button>
  )
}
