import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/Callout'
import { CourseImage } from '@/components/CourseImage'

function slugify(text: unknown): string {
  if (typeof text !== 'string') return ''
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        id={slugify(children)}
        className="font-serif text-2xl font-bold text-ink mt-10 mb-4 scroll-mt-8"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        id={slugify(children)}
        className="font-serif text-[1.2rem] font-semibold text-ink mt-8 mb-3 scroll-mt-8"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-base font-semibold text-ink mt-6 mb-2"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p className="my-4 leading-[1.75] text-[1.0625rem] text-ink" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="my-4 space-y-2 pl-6 list-disc marker:text-tan" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="my-4 space-y-2 pl-6 list-decimal marker:text-tan" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed text-[1.0625rem]" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-6 border-l-4 border-tan pl-4 italic text-ink/80"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-border" />,
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-ink" {...props}>
        {children}
      </strong>
    ),
    // Custom course components available in all MDX files
    Callout,
    CourseImage,
    ...components,
  }
}
