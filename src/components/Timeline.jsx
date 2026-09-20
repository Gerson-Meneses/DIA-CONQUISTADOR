import { TIMELINE } from '../data.js'
import { useReveal } from '../useReveal.js'

function TimelineItem({ item }) {
  const [ref, visible] = useReveal({ threshold: 0.4 })
  return (
    <li ref={ref} className={`timeline-item${visible ? ' is-visible' : ''}`}>
      <span className="timeline-item__year">{item.year}</span>
      <h3 className="timeline-item__title">{item.title}</h3>
      <p className="timeline-item__text">{item.text}</p>
    </li>
  )
}

export default function Timeline() {
  const [headRef, headVisible] = useReveal()
  return (
    <section id="historia" className="section">
      <div ref={headRef} className={`reveal${headVisible ? ' is-visible' : ''}`}>
        <span className="section-kicker">Esta historia comenzó hace...</span>
        <h2 className="section-title">76 años</h2>
        <p className="section-lede">
          El Club de Conquistadores no apareció de un día para otro en 1950. Fue el
          resultado de décadas de pequeñas decisiones, campamentos y personas dispuestas
          a guiar a otras. Como tú.
        </p>
      </div>

      <ol className="timeline">
        {TIMELINE.map((item) => (
          <TimelineItem key={item.year} item={item} />
        ))}
      </ol>
    </section>
  )
}
