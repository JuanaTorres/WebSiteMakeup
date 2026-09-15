import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', servicio: '', mensaje: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = `Hola Ana María, soy ${form.nombre}. Me interesa el servicio de ${form.servicio}. ${form.mensaje}`
    window.open(`https://wa.me/573168659131?text=${texto}`, '_blank')
  }

  return (
    <section id="contacto" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="eyebrow">Contacto</p>
          <h2>Agenda por mensaje</h2>
          <p className="contact__text">
            Escríbeme y cuéntame la fecha, el lugar y el tipo de evento.
            Trabajo a domicilio en Bogotá, Zipaquirá y municipios cercanos.
          </p>

          <ul className="contact__list">
            <li>
              <strong>Instagram</strong>
              <span>https://www.instagram.com/anatmaquillaje/</span>
            </li>
            <li>
              <strong>Cobertura</strong>
              <span>Bogotá · Chía · Zipaquirá · Cundinamarca</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </label>
          <label>
            Servicio de interés
            <select name="servicio" required value={form.servicio} onChange={handleChange}>
              <option value="">Selecciona una opción</option>
              <option value="Maquillaje de novia">Maquillaje de novia</option>
              <option value="Maquillaje de novia">Maquillaje de 15 años</option>
              <option value="Maquillaje social">Maquillaje social</option>
              <option value="Maquillaje editorial">Maquillaje editorial</option>
              <option value="Maquillaje para grados">Maquillaje para grados</option>
              <option value="Pieles maduras">Pieles maduras</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Fecha, lugar y detalles del evento"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
