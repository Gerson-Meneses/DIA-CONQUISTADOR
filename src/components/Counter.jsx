import { useEffect, useState } from 'react'
import { useReveal } from '../useReveal.js'

export default function Counter() {
  const [ref, visible] = useReveal({ threshold: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!visible) return
    const target = 76
    const duration = 1400
    const start = performance.now()

    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible])

  return (
    <section ref={ref} className="counter">
      <div className="counter__years">{value}</div>
      <p className="counter__range">1950 — 2026</p>
      <p className="counter__caption">
        Desde que la Asociación General adoptó el Club de Conquistadores como
        ministerio mundial en San Francisco, hasta esta tarde de septiembre en la que
        alguien pensó en dedicarte esta página.
      </p>
    </section>
  )
}
