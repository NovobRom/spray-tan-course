interface ShopCardProps {
  url: string
  name: string
  description?: string
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

export function ShopCard({ url, name, description }: ShopCardProps) {
  const domain = getDomain(url)
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
          alt=""
          width={24}
          height={24}
          className="rounded"
          loading="lazy"
        />
        <div>
          <h3 className="font-medium text-ink">{name}</h3>
          <p className="text-xs text-muted">{domain}</p>
        </div>
      </div>
      {description && (
        <p className="text-sm text-muted">{description}</p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 rounded-lg bg-tan px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Перейти
        <span aria-hidden>↗</span>
      </a>
    </div>
  )
}
