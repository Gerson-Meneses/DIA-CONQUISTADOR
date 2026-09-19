import { useState } from 'react'
import { EMBLEM_PARTS } from '../data.js'
import { useReveal } from '../useReveal.js'

export default function Emblem() {
  const [active, setActive] = useState('triangle')
  const [ref, visible] = useReveal()
  const current = EMBLEM_PARTS.find((p) => p.id === active)

  return (
    <section className="emblem-section">
      <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`} style={{ maxWidth: 980, margin: '0 auto 3rem' }}>
        <span className="section-kicker">El Escudo habla</span>
        <h2 className="section-title">Cada color cuenta algo</h2>
        <p className="section-lede">
          Toca una palabra de la lista, para descubrir qué
          representa.
        </p>
      </div>

      <div className="emblem-layout">
        <img src="/c1.webp" alt="Escudo de Conquistadores" />

        <div className="emblem-panel">
          <span className="emblem-panel__label">{current.label}</span>
          <h3 className="emblem-panel__title">{current.title}</h3>
          <p className="emblem-panel__text">{current.text}</p>

          <div className="emblem-legend">
            {EMBLEM_PARTS.map((part) => (
              <button
                key={part.id}
                className={active === part.id ? 'is-active' : ''}
                onClick={() => setActive(part.id)}
              >
                <span className="emblem-legend__dot" style={{ background: part.color }} />
                {part.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
