'use client'

import { usePathname } from 'next/navigation'
import { Sidebar } from './Sidebar'

const HIDDEN_ON = ['/', '/finish']

export function SidebarWrapper() {
  const pathname = usePathname()
  if (HIDDEN_ON.includes(pathname)) return null
  return <Sidebar />
}
