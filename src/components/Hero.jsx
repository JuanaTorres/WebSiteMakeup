import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div
        className="hero__image"
        style={{ backgroundImage: "url('/images/about/AAA.jpeg')" }}
      />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Realza tu belleza,</p>
        <h1 className="hero__title">
          Refleja tu <em>esencia</em>
        </h1>
        <p className="hero__text">
          Maquillaje profesional para cada ocasión. Con técnicas personalizadas
          que resaltan tu belleza natural.
        </p>
        <a href="#servicios" className="btn btn-primary">
          Conoce mis servicios
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
