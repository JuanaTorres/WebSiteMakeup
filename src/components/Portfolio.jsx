import './Portfolio.css'

const ITEMS = [
  { file: '/images/testimonials/1.png', label: 'Novias' },
  { file: '/images/testimonials/10.png', label: 'Editorial' },
  { file: '/images/testimonials/9.png', label: 'Social' },
  { file: '/images/testimonials/6.jpg', label: '15 años' },
  { file: '/images/testimonials/7.png', label: 'Pieles maduras' },
  { file: '/images/testimonials/5.png', label: 'Maquillaje artístico' },
]

export default function Portfolio() {
  return (
    <section id="portafolio" className="portfolio">
      <div className="container">
        <div className="portfolio__heading">
          <p className="eyebrow">Portafolio</p>
          <h2>Trabajos que hablan por sí solos</h2>
        </div>

        <div className="portfolio__grid">
          {ITEMS.map((item) => (
            <figure className="portfolio__item" key={item.file}>
              <img src={item.file} alt={item.label} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
