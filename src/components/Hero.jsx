import { useMemo } from 'react'

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        top: Math.random() * 70,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 4,
      })),
    []
  )

  return (
    <svg className="hero__stars" aria-hidden="true">
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={`${s.left}%`}
          cy={`${s.top}%`}
          r={s.size}
          fill="#f7f2e7"
          opacity={0.5}
        >
          <animate
            attributeName="opacity"
            values="0.15;0.9;0.15"
            dur={`${3 + s.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}

function Ridge() {
  return (
    <svg
      className="hero__ridge"
      viewBox="0 0 1000 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon
        points="0,260 0,150 120,190 260,100 400,170 520,60 650,150 780,110 900,180 1000,140 1000,260"
        fill="#0b1a28"
      />
      <polygon
        points="0,260 0,200 150,220 300,170 450,210 600,160 750,205 900,190 1000,215 1000,260"
        fill="#071018"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <StarField />
      <Ridge />
      <div className="hero__content">
        <span className="hero__eyebrow">Día Mundial del Conquistador</span>
        <div className="hero__number">76</div>
        <p className="hero__number-label">años del Ministerio de Conquistadores</p>
        <h1 className="hero__title">
          ¡Habla, <span>Señor!</span>
        </h1>
        <div>
          <p className="speak__verse">
            «Habla, Señor, que tu siervo escucha.»
            <span className="speak__verse-ref">1 Samuel 3:10</span>
          </p>
        </div>
        <p className="hero__date">19 · 09 · 2026</p>

       
      </div>

      {/* Cambiado a una estructura de botón/enlace interactivo más fuerte */}
      <div className="hero__scroll-container">
        <a href="#historia" className="hero__scroll-btn">
          <span className="hero__scroll-glow" />
          Un repaso por la Historia
          <svg className="hero__scroll-arrow" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
