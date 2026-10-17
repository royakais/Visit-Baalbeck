import { Link, useParams, Navigate } from 'react-router-dom'
import { placeBySlug, placesIn, mapsLink, reviewsLink } from '../data/places.js'
import { categories } from '../data/categories.js'
import Photo from '../components/Photo.jsx'
import PlaceMap from '../components/PlaceMap.jsx'
import PlaceCard from '../components/PlaceCard.jsx'
import usePageTitle from '../usePageTitle.js'

const label = (k) => k.replaceAll('_', ' ')

export default function Place() {
  const { slug } = useParams()
  const place = placeBySlug(slug)
  usePageTitle(place ? `${place.name} · Baalbek` : 'Baalbek', place?.short)
  if (!place) return <Navigate to="/" replace />

  const cat = categories.find((c) => c.slug === place.category)
  const more = placesIn(place.category).filter((p) => p.slug !== place.slug).slice(0, 3)
  const isFood = place.category === 'eat' || place.category === 'stay'

  return (
    <main className="page">
      <article>
        <header className="place__head">
          <div className="wrap place__head-inner">
            <Link to={`/explore/${cat.slug}`} className="back">← {cat.name}</Link>
            <h1 className="place__title">{place.name}</h1>
            <p className="page__ar" lang="ar" dir="rtl">{place.arabic}</p>
            <p className="place__short">{place.short}</p>
          </div>
        </header>

        <div className="wrap">
          <Photo place={place} width={1800} className="place__photo" />
        </div>

        <div className="wrap place__body">
          <div className="place__text">
            {place.description.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}

            {place.tips?.length > 0 && (
              <aside className="tips" aria-label="Tips">
                <p className="eyebrow eyebrow--ink">Local tips</p>
                <ul>{place.tips.map((t) => <li key={t}>{t}</li>)}</ul>
              </aside>
            )}
          </div>

          <aside className="place__side">
            {place.facts && (
              <dl className="facts">
                {Object.entries(place.facts).map(([k, v]) => (
                  <div key={k}><dt>{label(k)}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            )}
            {place.verify && (
              <p className="verify">Hours, prices and opening status change often in Lebanon. Call or check before you go.</p>
            )}
            <div className="actions">
              <a className="btn" href={mapsLink(place)} target="_blank" rel="noreferrer">Directions in Google Maps</a>
              {isFood && (
                <a className="btn btn--ghost" href={reviewsLink(place)} target="_blank" rel="noreferrer">
                  See photos &amp; reviews
                </a>
              )}
            </div>
          </aside>
        </div>

        {place.lat != null && (
          <div className="wrap place__map">
            <PlaceMap places={[place]} height={340} zoom={16} />
            {place.approx && <p className="note">The pin is approximate.</p>}
          </div>
        )}
      </article>

      {more.length > 0 && (
        <section className="wrap more" aria-labelledby="more-title">
          <h2 id="more-title" className="section-label">More in {cat.name}</h2>
          <ul className="pgrid">
            {more.map((p) => <li key={p.slug}><PlaceCard place={p} /></li>)}
          </ul>
        </section>
      )}
    </main>
  )
}
