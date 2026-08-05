import { useEffect, useState } from 'react'

const links = [
  { id: 'showreel', label: 'Шоурил' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'info', label: 'Инфо' },
]

export function Header({ hidden = false }: { hidden?: boolean }) {
  const [active, setActive] = useState('showreel')

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55%', threshold: [0, 0.25, 0.5, 0.75] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header${hidden ? ' is-hidden' : ''}`}>
      <a className="brand" href="#showreel" aria-label="В начало страницы">Игнат Кобринюк</a>
      <nav aria-label="Основная навигация">
        {links.map(({ id, label }) => (
          <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
