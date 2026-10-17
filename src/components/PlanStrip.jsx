import { Link } from 'react-router-dom'
import { placeBySlug } from '../data/places.js'
import Photo from './Photo.jsx'

const featured = ['temple-of-bacchus', 'stone-of-the-pregnant-woman', 'temple-of-venus', 'palmyra-hotel']

export default function PlanStrip() {
  return (
    <>
      <section className="gallery" aria-labelledby="gallery-title">
        <div className="wrap">
          <h2 id="gallery-title" className="section-label section-label--light">Baalbek in pictures</h2>
          <ul className="gallery__row">
            {featured.map((slug) => {
              const p = placeBySlug(slug)
              return (
                <li key={slug}>
                  <Link to={`/place/${slug}`} className="gallery__item">
                    <Photo place={p} width={900} credit={false} />
                    <span className="gallery__name">{p.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="plan" aria-labelledby="plan-title">
        <div className="wrap">
          <h2 id="plan-title" className="section-label">Good to know</h2>
          <dl className="plan__grid">
            <div>
              <dt>Tickets</dt>
              <dd>Around $10 for the temple complex. Guides at the gate charge about $20.</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>About 9:00–18:00 in summer and 9:00–16:00 in winter. Allow 2 to 3 hours.</dd>
            </div>
            <div>
              <dt>From Beirut</dt>
              <dd>85 km. Shared van via Chtaura, taxi or day tour, 1.5 to 3 hours.</dd>
            </div>
            <div>
              <dt>Best time</dt>
              <dd>April to June and September to November. Summer reaches 35 °C.</dd>
            </div>
          </dl>
          <div className="plan__actions">
            <Link to="/explore/essentials" className="btn">Everything you need to know</Link>
            <Link to="/map" className="btn btn--ghost">Open the map</Link>
          </div>
        </div>
      </section>
    </>
  )
}
