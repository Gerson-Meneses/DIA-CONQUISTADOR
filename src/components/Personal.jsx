import { useReveal } from '../useReveal.js'

export default function Personal() {
  const [ref, visible] = useReveal()
  return (
    <section className="personal">
      <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
        <p className="personal__intro">
          Pero el Escudo no cuenta tu historia. Detrás de cada pañolín hay una
          historia. Detrás de cada insignia, un esfuerzo. Detrás de cada campamento,
          un recuerdo. Y detrás de cada club, alguien que decidió acompañar a otros
          en el camino.
        </p>

        <div className="personal__name-card">
          <h2 className="personal__name">Jenifer Llacsahuache ♡</h2>
          <p className="personal__role">Mi consejera favorita</p>

          <div className="personal__facts">
            <p><strong>Rol —</strong> Consejera de Club de Conquistadores</p>
            <p><strong>La que enseña —</strong> con el ejemplo, antes que con palabras</p>
            <p><strong>La que deja —</strong> una huella en cada persona que pasa por su club</p>
          </div>
        </div>
      </div>
    </section>
  )
}
