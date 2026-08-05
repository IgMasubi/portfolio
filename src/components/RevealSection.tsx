import { useEffect, useRef, type PropsWithChildren } from 'react'

interface RevealSectionProps extends PropsWithChildren {
  id: string
  className?: string
}

const TOP_EXIT_DISTANCE = 0.58
const BOTTOM_FADE_START = 0.42
const BOTTOM_FADE_END = 0.9

export function RevealSection({ id, className = '', children }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight
      const visibility = rect.top <= 0
        ? 1 + rect.top / (viewport * TOP_EXIT_DISTANCE)
        : (viewport * BOTTOM_FADE_END - rect.top)
          / (viewport * (BOTTOM_FADE_END - BOTTOM_FADE_START))
      const clampedVisibility = Math.max(0, Math.min(1, visibility))
      element.style.setProperty('--section-opacity', clampedVisibility.toFixed(3))
      element.style.setProperty('--section-shift', `${((1 - clampedVisibility) * 22).toFixed(1)}px`)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <section ref={ref} id={id} className={`page-section ${className}`}>{children}</section>
}
