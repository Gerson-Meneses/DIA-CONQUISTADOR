import { useReveal } from '../useReveal.js'

export default function Letter() {
  const [ref, visible] = useReveal()
  return (
    <section className="letter">
      <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
        <div className="letter__body">
          <p>Para Jenifer,</p>
          <p>
            Hoy se cumplen 76 años desde que un grupo de personas decidió que valía
            la pena organizar algo más grande que ellos mismos: un club para formar
            a otros en cuerpo, mente y espíritu.
          </p>
          <p>
            No sé si alguna vez pensaste en ti misma como parte de esa historia
            larga. Pero lo eres. Cada vez que preparaste una reunión, cada campamento
            en el que estuviste pendiente de todos menos de ti, cada consejo que
            diste sin que nadie te lo pidiera: eso también es Conquistadores.
          </p>
          <p>
            Gracias por ser la consejera que escucha antes de hablar, y que habla
            cuando hace falta.
          </p>
        </div>

        <p className="letter__signoff">Siempre adelante.</p>
        <p className="letter__date">19 · 09 · 2026</p>
        <p className="letter__motto">DÍA MUNDIAL DEL CONQUISTADOR · 76 AÑOS</p>
      </div>
    </section>
  )
}
