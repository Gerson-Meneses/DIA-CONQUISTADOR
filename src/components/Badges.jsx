import { useState } from 'react'
import { BADGES } from '../data.js'
import { useReveal } from '../useReveal.js'

export default function Badges() {
  const [flippedId, setFlippedId] = useState(null)
  const [ref, visible] = useReveal()

  const handleFlip = (id) => {
    // Si haces click en el mismo, se vuelve a voltear; si es otro, gira ese.
    setFlippedId(flippedId === id ? null : id)
  }

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
        {BADGES.map((badge) => {
          const isFlipped = flippedId === badge.id

          return (
            <div 
              key={badge.id} 
              className={`badge-card ${isFlipped ? 'is-flipped' : ''}`}
              onClick={() => handleFlip(badge.id)}
            >
              <div className="badge-card__inner">
                {/* Cara frontal */}
                <div className="badge-card__face badge-card__face--front">
                  <span className="badge__icon" aria-hidden="true">{badge.icon}</span>
                  <span className="badge__name">{badge.name}</span>
                </div>

                {/* Cara trasera (Texto) */}
                <div className="badge-card__face badge-card__face--back">
                  <h3 className="badge-card__title">{badge.title}</h3>
                  <p className="badge-card__text">{badge.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}