import { useState } from 'react'
import { BADGES } from '../data.js'
import { useReveal } from '../useReveal.js'

export default function Badges() {
  const [open, setOpen] = useState(null)
  const [ref, visible] = useReveal()
  const current = BADGES.find((b) => b.id === open)

  return (
    <section className="section section--wide">
      <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
        <span className="section-kicker">Tu colección de insignias</span>
        <h2 className="section-title">Lo que te ganaste de verdad</h2>
        <p className="section-lede">
          No todas las insignias se cosen en un uniforme. Toca cada una para ver por
          qué es tuya.
        </p>
      </div>

      <div className="badges-grid">
        {BADGES.map((badge) => (
          <button
            key={badge.id}
            className={`badge${open === badge.id ? ' is-open' : ''}`}
            onClick={() => setOpen(badge.id)}
            aria-pressed={open === badge.id}
          >
            <span className="badge__icon" aria-hidden="true">{badge.icon}</span>
            <span className="badge__name">{badge.name}</span>
          </button>
        ))}
      </div>

      <div className="badge-detail">
        {current ? (
          <>
            <h3 className="badge-detail__title">{current.title}</h3>
            <p className="badge-detail__text">{current.text}</p>
          </>
        ) : (
          <p className="badge-detail__placeholder">Toca una insignia para leer su historia.</p>
        )}
      </div>
    </section>
  )
}
