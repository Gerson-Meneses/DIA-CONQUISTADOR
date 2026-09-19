import { useRef, useState, useEffect } from 'react'

const AUDIO_SRC = '/Somos Conquistadores.mp3'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false) // Iniciamos en false hasta que suene
  const [ready, setReady] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Función que intenta reproducir el audio al interactuar
    const arrancarAudio = () => {
      audio.play()
        .then(() => {
          setPlaying(true)
          // Una vez que se logra reproducir, removemos el evento de la página
          document.removeEventListener('click', arrancarAudio)
        })
        .catch((error) => {
          console.log("El navegador aún bloquea el audio:", error)
        })
    }

    // Intentar reproducir de inmediato por si el navegador ya da permisos
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Si falla (lo normal), esperamos al primer clic del usuario en la página
        document.addEventListener('click', arrancarAudio)
      })

    // Limpieza al desmontar el componente
    return () => {
      document.removeEventListener('click', arrancarAudio)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => setReady(false))
    }
  }

  return (
    <div className="audio-player">
      <audio 
        ref={audioRef} 
        src={AUDIO_SRC} 
        loop 
        preload="auto" 
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
