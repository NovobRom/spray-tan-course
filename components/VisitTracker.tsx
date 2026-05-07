'use client'

import { useEffect } from 'react'
import { markVisited } from '@/lib/progress'

export function VisitTracker({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    markVisited(sectionId)
  }, [sectionId])

  return null
}
