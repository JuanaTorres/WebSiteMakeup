import './About.css'

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container about__grid">
        <div className="about__text">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="about__title">
            Más que maquillaje, <em>creo experiencias</em>
          </h2>
          <p className="about__paragraph">
            Soy Ana María Taborda, maquilladora profesional con más de 15 años
            de experiencia en el mundo de la belleza. Mi pasión es realzar la
            esencia única de cada mujer, brindando un servicio personalizado y
            de alta calidad.
          </p>

          <div className="about__badge">
            <span className="about__badge-icon">✓</span>
            <span>
              Certificada en <strong>Maquillaje de Novias</strong> por{' '}
              <strong>Caretas</strong>
            </span>
          </div>
          <div className="about__badge">
            <span className="about__badge-icon">✓</span>
            <span>
              Certificada en <strong>Maquillaje Profesional 2016</strong> por{' '}
              <strong>Caretas</strong>
            </span>
          </div>

          <a href="#contacto" className="btn btn-outline">
            Contactame
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about__media">
          <div className="about__frame">
            <img src="/images/logo/Maquillando 2.png" alt="Ana María Taborda" />
          </div>
          <span className="about__ring-text" aria-hidden="true">
            MAQUILLAJE PROFESIONAL · A DOMICILIO ·
          </span>
        </div>
      </div>
    </section>
  )
}
