import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__monogram">AM</span>
          <span className="navbar__brand">
            <strong>ANA MARÍA TABORDA</strong>
            <small>Maquilladora Profesional</small>
          </span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href="https://www.instagram.com/anatmaquillaje/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="navbar__icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://wa.me/573168659131"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="navbar__icon"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 12a8 8 0 1 1-3.6-6.7L20 4l-1 3.6A7.96 7.96 0 0 1 20 12Z" />
              <path d="M9 10c.3 2 2 3.7 4 4l1-1.3c.1-.2.4-.3.6-.2l1.7.7c.2.1.3.3.3.5-.1 1.2-1.2 2-2.4 1.8-3-.5-5.4-2.9-5.9-5.9C8.1 8.4 8.9 7.3 10.1 7.2c.2 0 .4.1.5.3l.7 1.7c.1.2 0 .5-.2.6L10 10Z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#contacto" className="btn btn-primary navbar__cta">
            Agenda tu cita
          </a>
        </div>

        <button
          className="navbar__burger"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
