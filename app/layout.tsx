import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { SidebarWrapper } from '@/components/SidebarWrapper'
import { ResetProgress } from '@/components/ResetProgress'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s — Spray Tan Course | li_zagar_tan',
    default: 'Spray Tan Course by li_zagar_tan',
  },
  description: 'Профессиональный обучающий курс по моментальному загару от li_zagar_tan',
  openGraph: {
    title: 'Spray Tan Course by li_zagar_tan',
    description: 'Профессиональный обучающий курс по моментальному загару',
    images: ['/og-cover.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <div className="flex min-h-screen">
          <SidebarWrapper />
          <div className="flex min-h-screen flex-1 flex-col">
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border py-6 px-6 lg:px-10">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4 text-sm text-muted">
                  <a
                    href="https://www.instagram.com/li_zagar_tan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tan transition-colors"
                  >
                    Instagram: @li_zagar_tan
                  </a>
                  <span>·</span>
                  <span>© {new Date().getFullYear()} li_zagar_tan</span>
                </div>
                <ResetProgress />
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
