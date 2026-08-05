import { useRef, useState } from 'react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  label: string
  preload?: 'none' | 'metadata' | 'auto'
}

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
  )
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4Zm12.2.2a4 4 0 0 1 0 5.6l1.4 1.4a6 6 0 0 0 0-8.4l-1.4 1.4Z" />
      {muted ? <path d="m17 10 4 4m0-4-4 4" className="sound-slash" /> : null}
    </svg>
  )
}

export function VideoPlayer({ src, poster, className = '', label, preload = 'metadata' }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = async () => {
    const video = ref.current
    if (!video) return
    if (video.paused) await video.play()
    else video.pause()
  }

  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <div className={`video-player ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        preload={preload}
        muted={muted}
        playsInline
        onClick={togglePlay}
        onLoadedData={(event) => {
          if (!poster && event.currentTarget.currentTime === 0) event.currentTarget.currentTime = 0.01
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        aria-label={label}
      />
      <div className="video-controls">
        <button type="button" onClick={togglePlay} aria-label={playing ? 'Пауза' : 'Воспроизвести'}>
          <PlayIcon playing={playing} /><span>{playing ? 'Pause' : 'Play'}</span>
        </button>
        <button type="button" onClick={toggleSound} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>
          <SoundIcon muted={muted} /><span>Sound</span>
        </button>
      </div>
    </div>
  )
}
