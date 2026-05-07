import Image from 'next/image'
import clsx from 'clsx'

interface CourseImageProps {
  src: string
  alt: string
  caption?: string
  fullWidth?: boolean
  width?: number
  height?: number
}

export function CourseImage({
  src,
  alt,
  caption,
  fullWidth = false,
  width = 800,
  height = 600,
}: CourseImageProps) {
  return (
    <figure
      className={clsx(
        'my-8',
        fullWidth ? 'w-full' : 'mx-auto max-w-lg'
      )}
    >
      <div
        className={clsx(
          'overflow-hidden rounded-lg',
          fullWidth ? 'w-full' : ''
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-contain"
          quality={90}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
