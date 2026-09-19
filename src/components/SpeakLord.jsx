import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../useReveal.js'

const HOLD_MS = 1600

export default function SpeakLord() {
  const [ref, visible] = useReveal()
  const [progress, setProgress] = useState(0)
  const [shown, setShown] = useState(false)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  const clear = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
    startRef.current = null
  }

  const tick = (now) => {
    if (!startRef.current) startRef.current = now
    const elapsed = now - startRef.current
    const pct = Math.min((elapsed / HOLD_MS) * 100, 100)
    setProgress(pct)
    if (pct >= 100) {
      setShown(true)
      clear()
      return
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  const start = () => {
    if (shown) return
    clear()
    rafRef.current = requestAnimationFrame(tick)
  }

  const stop = () => {
    if (shown) return
    clear()
    setProgress(0)
  }

  useEffect(() => clear, [])

  return (
    <section className="speak">
      <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
        <p className="speak__line">Hay muchas voces alrededor.</p>
        <p className="speak__line">Pero hay una que vale la pena escuchar.</p>
      </div>

      <div className="speak__button-wrap">
        <button
          className="speak__button"
          onMouseDown={start}
          onMouseUp={stop}
          onMouseLeave={stop}
          onTouchStart={start}
          onTouchEnd={stop}
          aria-label="Mantén presionado para escuchar"
        >
          <span className="speak__button-fill" style={{ '--p': progress }} />
          <span className="speak__button-inner">
            {shown ? 'Escuchado' : 'Escuchar'}
          </span>
        </button>
        <span className="speak__hint">
          {shown ? '' : 'mantén presionado'}
        </span>
      </div>

      <div className={`speak__reveal${shown ? ' is-shown' : ''}`}>
        <p className="speak__verse">
          «Habla, Señor, que tu siervo escucha.»
          <span className="speak__verse-ref">1 Samuel 3:10</span>
        </p>
      </div>
    </section>
  )
}
