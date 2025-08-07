import clsx from 'clsx'
import { useId } from 'react'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M8 4L24 4L24 28L8 28L8 4ZM12 8L20 8L20 12L12 12L12 8ZM12 16L20 16L20 20L12 20L12 16ZM12 24L16 24L16 26L12 26L12 24Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 200 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="40"
        y="22"
        className={clsx(
          'text-sm font-semibold',
          invert ? 'fill-white' : 'fill-neutral-950',
        )}
      >
        Maître Julia GADILHE
      </text>
    </svg>
  )
}
