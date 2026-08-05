import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'

export default function App() {
  const [showreelPlaying, setShowreelPlaying] = useState(false)
  const [headerRevealed, setHeaderRevealed] = useState(true)

  useEffect(() => {
    if (!showreelPlaying) return

    const revealHeader = () => setHeaderRevealed(true)
    window.addEventListener('scroll', revealHeader, { passive: true })
    return () => window.removeEventListener('scroll', revealHeader)
  }, [showreelPlaying])

  const handleShowreelPlayback = (playing: boolean) => {
    setShowreelPlaying(playing)
    setHeaderRevealed(!playing)
  }

  return (
    <>
      <Header hidden={showreelPlaying && !headerRevealed} />
      <main>
        <Hero onPlaybackChange={handleShowreelPlayback} />
        <Portfolio />
        <About />
      </main>
    </>
  )
}
