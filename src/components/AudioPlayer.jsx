import { useRef, useState } from 'react'

// Coloca tu archivo de audio en la carpeta `public/` con el nombre `audio.mp3`
// (o cambia AUDIO_SRC más abajo por otro nombre/ruta).
const AUDIO_SRC = '/Somos Conquistadores.mp3'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(true)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      return
    }

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setReady(false))
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        autoplay
        src={AUDIO_SRC}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onError={() => setReady(false)}
      />
      <button
        className={`audio-player__btn${playing ? ' is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        title={ready ? undefined : 'Agrega tu archivo en public/audio.mp3'}
      >
        {playing ? '⏸' : '♪'}
      </button>
    </div>
  )
}
