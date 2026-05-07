const PREFIX = 'spray-tan-course:'

export function markVisited(sectionId: string): void {
  try {
    localStorage.setItem(`${PREFIX}${sectionId}`, '1')
  } catch {}
}

export function isVisited(sectionId: string): boolean {
  try {
    return localStorage.getItem(`${PREFIX}${sectionId}`) === '1'
  } catch {
    return false
  }
}

export function resetProgress(): void {
  try {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith(PREFIX))
    keys.forEach((k) => localStorage.removeItem(k))
  } catch {}
}
