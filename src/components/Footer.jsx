import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__monogram">AM</span>
          <div>
            <strong>ANA MARÍA TABORDA</strong>
            <p>Maquilladora profesional a domicilio</p>
          </div>
        </div>

        <nav className="footer__links">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer__social">
          <a href="https://www.instagram.com/anatmaquillaje/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://wa.me/573168659131" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} Ana María Taborda. Todos los derechos reservados.</span>
        <span>Certificada en Maquillaje de Novias · Caretas</span>
      </div>
    </footer>
  )
}
