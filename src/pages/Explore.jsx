import { Link, useParams } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { placesIn } from '../data/places.js'
import Icon from '../components/Icon.jsx'
import PlaceCard from '../components/PlaceCard.jsx'
import PlaceMap from '../components/PlaceMap.jsx'
import { EmergencyNumbers, GettingHere, BeforeYouGo } from '../components/EssentialInfo.jsx'
import usePageTitle from '../usePageTitle.js'

export default function Explore() {
  const { slug } = useParams()
  const cat = categories.find((c) => c.slug === slug) ?? categories[0]
  const list = placesIn(cat.slug)
  const hasPins = list.some((p) => p.lat != null)
  usePageTitle(`${cat.name} · Baalbek`, cat.blurb)

  return (
    <main className="page">
      <header className="page__head">
        <div className="wrap page__head-inner">
          <Link to="/" className="back">← Baalbek</Link>
          <span className="page__icon"><Icon name={cat.icon} size={40} /></span>
          <h1 className="page__title">{cat.name}</h1>
          <p className="page__ar" lang="ar" dir="rtl">{cat.arabic}</p>
          <p className="page__lede">{cat.blurb}</p>
        </div>
      </header>

      <div className="wrap page__body">
        {cat.slug === 'essentials' && (
          <div className="info-grid">
            <EmergencyNumbers />
            <GettingHere />
            <BeforeYouGo />
          </div>
        )}

        {cat.slug === 'essentials' && <h2 className="section-label">Hospitals</h2>}
        <ul className="pgrid">
          {list.map((p) => <li key={p.slug}><PlaceCard place={p} /></li>)}
        </ul>

        {hasPins && (
          <section className="page__map" aria-labelledby="cat-map">
            <h2 id="cat-map" className="section-label">On the map</h2>
            <PlaceMap places={list} zoom={14} />
          </section>
        )}

        <nav className="page__others" aria-label="Other sections">
          {categories.filter((c) => c.slug !== cat.slug).map((c) => (
            <Link key={c.slug} to={`/explore/${c.slug}`}>{c.name}</Link>
          ))}
          <Link to="/map">Full map</Link>
        </nav>
      </div>
    </main>
  )
}
