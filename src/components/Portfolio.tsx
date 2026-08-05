import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../data/projects'
import type { Project, ProjectCategory, ProjectGalleryItem } from '../types'
import { RevealSection } from './RevealSection'
import { VideoPlayer } from './VideoPlayer'

type Filter = 'ALL' | ProjectCategory
const filters: { value: Filter; label: string }[] = [
  { value: 'ALL', label: 'ВСЕ' },
  { value: '3D', label: '3D' },
  { value: '2D', label: '2D' },
  { value: 'AI', label: 'AI' },
]
const PROJECT_EXIT_DURATION_MS = 334

function GalleryMedia({ media, project, index }: { media: ProjectGalleryItem; project: Project; index: number }) {
  return typeof media === 'string' ? (
    <img src={media} alt={`Материал проекта ${project.title} — ${index + 1}`} loading="lazy" />
  ) : (
    <video
      src={media.src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`Анимированный материал проекта ${project.title} — ${index + 1}`}
    />
  )
}

function DefaultProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail">
      <h2>{project.title}</h2>
      <div className="project-description">
        {project.description.map((line) => <p key={line}>{line}</p>)}
      </div>
      {project.media.video ? (
        <VideoPlayer
          key={project.id}
          className="project-video"
          src={project.media.video}
          poster={project.media.poster}
          preload="none"
          label={`Видео проекта ${project.title}`}
        />
      ) : (
        <img className="project-video media-placeholder" src={project.media.poster} alt="" />
      )}
      {project.media.gallery.length > 0 ? (
        <div className="project-gallery">
          {project.media.gallery.map((media, index) => (
            <GalleryMedia key={`${project.id}-${index}`} media={media} project={project} index={index} />
          ))}
        </div>
      ) : null}
    </article>
  )
}

function MantalisProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail project-detail--mantalis">
      <h2>{project.title}</h2>
      <div className="project-description">
        {project.description.map((line) => <p key={line}>{line}</p>)}
      </div>
      <div className="mantalis-media">
        <VideoPlayer
          key={project.id}
          className="mantalis-main-video"
          src={project.media.video ?? ''}
          poster={project.media.poster}
          preload="none"
          label={`Видео проекта ${project.title}`}
        />
        <div className="mantalis-side-media">
          {project.media.gallery.map((media, index) => (
            <GalleryMedia key={`${project.id}-${index}`} media={media} project={project} index={index} />
          ))}
        </div>
      </div>
    </article>
  )
}

function OrtolineProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail project-detail--ortoline">
      <h2>{project.title}</h2>
      <div className="project-description">
        {project.description.map((line) => <p key={line}>{line}</p>)}
      </div>
      <div className="ortoline-media">
        {project.media.gallery.map((media, index) => (
          typeof media === 'string' ? (
            <img key={`${project.id}-${index}`} src={media} alt={`Материал проекта ${project.title} — ${index + 1}`} loading="lazy" />
          ) : (
            <VideoPlayer
              key={`${project.id}-${index}`}
              className="ortoline-video"
              src={media.src}
              preload="metadata"
              label={`Видео проекта ${project.title} — ${index + 1}`}
            />
          )
        ))}
      </div>
    </article>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  if (project.media.layout === 'mantalis') return <MantalisProjectDetail project={project} />
  if (project.media.layout === 'ortoline') return <OrtolineProjectDetail project={project} />
  return <DefaultProjectDetail project={project} />
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('ALL')
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const [renderedId, setRenderedId] = useState(projects[0].id)
  const [phase, setPhase] = useState<'idle' | 'in' | 'out'>('idle')
  const listRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLSpanElement>(null)
  const transitionTimer = useRef<number | null>(null)

  const filtered = useMemo(
    () => filter === 'ALL' ? projects : projects.filter((project) => project.categories.includes(filter)),
    [filter],
  )

  const updateListVisuals = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const maxScroll = list.scrollHeight - list.clientHeight
    const maxTop = Math.max(0, list.clientHeight - 129)
    const thumbTop = maxScroll > 0 ? (list.scrollTop / maxScroll) * maxTop : 0
    if (thumbRef.current) thumbRef.current.style.transform = `translateY(${thumbTop}px)`

    const listRect = list.getBoundingClientRect()
    Array.from(list.children).forEach((item) => {
      const card = item as HTMLElement
      const rect = card.getBoundingClientRect()
      const visibleFromTop = rect.bottom - listRect.top
      const visibleFromBottom = listRect.bottom - rect.top
      const edgeVisibility = Math.min(visibleFromTop, visibleFromBottom) / 170
      card.style.setProperty('--edge-opacity', String(Math.max(0, Math.min(1, edgeVisibility))))
    })
  }, [])

  useEffect(() => {
    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
    }
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => updateListVisuals())
    return () => cancelAnimationFrame(frame)
  }, [filtered, updateListVisuals])

  const selectProject = (id: string) => {
    if (id === selectedId) return
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
    setSelectedId(id)
    setPhase('out')
    transitionTimer.current = window.setTimeout(() => {
      setRenderedId(id)
      setPhase('in')
      transitionTimer.current = null
    }, PROJECT_EXIT_DURATION_MS)
  }

  const changeFilter = (nextFilter: Filter) => {
    setFilter(nextFilter)
    const nextProjects = nextFilter === 'ALL'
      ? projects
      : projects.filter((project) => project.categories.includes(nextFilter))
    if (!nextProjects.some((project) => project.id === selectedId)) selectProject(nextProjects[0]?.id ?? projects[0].id)
  }

  const selected = projects.find((project) => project.id === renderedId) ?? projects[0]

  return (
    <RevealSection id="portfolio" className="portfolio-section">
      <div className="portfolio-layout">
        <div className="project-browser">
          <div className="filters" role="group" aria-label="Фильтр проектов">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                className={filter === value ? 'active' : ''}
                onClick={() => changeFilter(value)}
                aria-pressed={filter === value}
              >{label}</button>
            ))}
          </div>
          <div className="project-list" ref={listRef} onScroll={updateListVisuals}>
            {filtered.map((project) => (
              <button
                type="button"
                key={project.id}
                className={`project-card ${selectedId === project.id ? 'active' : ''}`}
                onClick={() => selectProject(project.id)}
                aria-current={selectedId === project.id ? 'true' : undefined}
              >
                <span className="active-bar" aria-hidden="true" />
                <img src={project.media.listPoster ?? project.media.poster} alt="" loading="lazy" />
                <span className="project-card-copy">
                  <strong>{project.title}</strong>
                  {project.year ? <small>{project.year}</small> : null}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="project-scroll-track" aria-hidden="true">
          <span ref={thumbRef} />
        </div>
        <div className={`detail-transition ${phase}`}>
          <ProjectDetail project={selected} />
        </div>
      </div>
    </RevealSection>
  )
}
