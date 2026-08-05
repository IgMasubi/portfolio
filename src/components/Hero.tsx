import { useRef, useState, type CSSProperties } from 'react'
import { RevealSection } from './RevealSection'

const showreelSource = new URL('../web-media/showreel/Showreel26.mp4', import.meta.url).href

interface HeroProps {
  onPlaybackChange?: (playing: boolean) => void
}

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
  )
}

function SoundIcon({ muted }: { muted: boolean }) {
  return muted ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="m16.5 9.5 5 5m0-5-5 5" className="sound-stroke" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16.2 9.2a4 4 0 0 1 0 5.6M18.5 7a7 7 0 0 1 0 10" className="sound-stroke" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 10V5h5M14 5h5v5M19 14v5h-5M10 19H5v-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero({ onPlaybackChange }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      try {
        await video.play()
      } catch {
        setPlaying(false)
        onPlaybackChange?.(false)
      }
    } else {
      video.pause()
    }
  }

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  const toggleFullscreen = async () => {
    const video = videoRef.current
    if (!video) return

    const documentWithWebkit = document as Document & {
      webkitFullscreenElement?: Element
      webkitExitFullscreen?: () => Promise<void>
    }
    const videoWithWebkit = video as HTMLVideoElement & {
      webkitRequestFullscreen?: () => Promise<void>
      webkitEnterFullscreen?: () => void
    }
    const isFullscreen = Boolean(document.fullscreenElement || documentWithWebkit.webkitFullscreenElement)

    if (isFullscreen) {
      if (document.exitFullscreen) await document.exitFullscreen()
      else await documentWithWebkit.webkitExitFullscreen?.()
      return
    }

    if (video.requestFullscreen) await video.requestFullscreen()
    else if (videoWithWebkit.webkitRequestFullscreen) await videoWithWebkit.webkitRequestFullscreen()
    else videoWithWebkit.webkitEnterFullscreen?.()
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const timelineStyle = { '--seek-progress': `${progress}%` } as CSSProperties

  return (
    <RevealSection id="showreel" className="hero-section">
      <div className="showreel-stage">
        <video
          ref={videoRef}
          className="showreel-video"
          src={showreelSource}
          preload="auto"
          muted={muted}
          playsInline
          onClick={togglePlay}
          onLoadedData={(event) => {
            if (event.currentTarget.currentTime === 0) event.currentTarget.currentTime = 0.01
          }}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
          onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onPlay={() => {
            setPlaying(true)
            onPlaybackChange?.(true)
          }}
          onPause={() => {
            setPlaying(false)
            onPlaybackChange?.(false)
          }}
          onEnded={() => {
            setPlaying(false)
            onPlaybackChange?.(false)
          }}
          aria-label="Шоурил Игната Кобринюка"
        />

        <div className={`hero-copy${playing ? ' is-hidden' : ''}`}>
          <h1>Моушн</h1>
          <p>CGI, анимация и AI-визуал<br />для рекламы, выставок<br />и digital-проектов</p>
        </div>

        <div className="showreel-controls" onClick={(event) => event.stopPropagation()}>
          <button className="showreel-control-button" type="button" onClick={togglePlay} aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
            <PlayIcon playing={playing} />
          </button>
          <div className="showreel-timeline">
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.01"
              value={Math.min(currentTime, duration || 0)}
              style={timelineStyle}
              onChange={(event) => {
                const nextTime = Number(event.currentTarget.value)
                if (videoRef.current) videoRef.current.currentTime = nextTime
                setCurrentTime(nextTime)
              }}
              aria-label="Позиция видео"
            />
          </div>
          <button className="showreel-control-button" type="button" onClick={toggleSound} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>
            <SoundIcon muted={muted} />
          </button>
          <button className="showreel-control-button" type="button" onClick={toggleFullscreen} aria-label="Развернуть видео на весь экран">
            <FullscreenIcon />
          </button>
        </div>
      </div>
    </RevealSection>
  )
}
