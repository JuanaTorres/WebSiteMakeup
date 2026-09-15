import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Juana Torres',
    role: 'Grado universitario',
    text: 'Ana María entendió exactamente lo que quería. Mi maquillaje duró todo el día, incluso me dió consejos que me permitio aretocar el maquillaje en la noche y me sentí radiante.',
  },
  {
    name: 'Laura Díaz',
    role: 'Maquillaje prueba de novia',
    text: 'Fue una experiencia maravillosa. Ani me consintió y se preocupó por el cuidado de mi piel, tanto de mi cara como de mi pecho. Cada paso era minuciosamente detallado. Su talento es espectacular.',
  },
  {
    name: 'Lina Bello',
    role: 'Modelo de maquillaje',
    text: 'Muy profesional y puntual, llegó a domicilio y me dejó un look elegante y natural.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <div className="testimonials__heading">
          <p className="eyebrow">Testimonios</p>
          <h2>Lo que dicen mis clientas</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <article className="testimonial-card" key={t.name}>
              <p className="testimonial-card__stars" aria-hidden="true">
                ★★★★★
              </p>
              <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-card__author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
