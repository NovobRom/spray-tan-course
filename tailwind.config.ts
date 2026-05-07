import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ink: '#2A2724',
        muted: '#6B6560',
        tan: '#8B6F47',
        beige: '#E8DDD0',
        border: '#D9D2C8',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['1.0625rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        prose: '70ch',
      },
      typography: ({ theme }: { theme: (key: string) => string }) => ({
        course: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.tan'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.tan'),
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.tan'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-th-borders': theme('colors.border'),
            '--tw-prose-td-borders': theme('colors.border'),
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            maxWidth: '70ch',
            h1: {
              fontFamily: 'var(--font-playfair)',
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '1.2',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.625rem',
              fontWeight: '700',
              lineHeight: '1.25',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.1875rem',
              fontWeight: '600',
              lineHeight: '1.35',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            'ul > li': {
              paddingLeft: '0.5rem',
            },
            'ul > li::marker': {
              color: theme('colors.tan'),
            },
            blockquote: {
              borderLeftColor: theme('colors.tan'),
              fontStyle: 'italic',
              color: theme('colors.ink'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
