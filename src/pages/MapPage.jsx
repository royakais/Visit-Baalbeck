import { useState } from 'react'
import { Link } from 'react-router-dom'
import { places } from '../data/places.js'
import { categories } from '../data/categories.js'
import PlaceMap, { categoryColour } from '../components/PlaceMap.jsx'
import usePageTitle from '../usePageTitle.js'

export default function MapPage() {
  const [active, setActive] = useState('all')
  usePageTitle('Map of Baalbek', 'Every temple, restaurant, hotel and hidden gem in Baalbek on one map.')
  const shown = places.filter((p) => active === 'all' || p.category === active || p.alsoIn?.includes(active))

  return (
    <main className="page">
      <header className="page__head">
        <div className="wrap page__head-inner">
          <Link to="/" className="back">← Baalbek</Link>
          <h1 className="page__title">The map</h1>
          <p className="page__lede">Every place in this guide. Tap a pin to open it.</p>
        </div>
      </header>
      <div className="wrap page__body">
        <div className="chips" role="group" aria-label="Filter by category">
          <button type="button" className="chip" aria-pressed={active === 'all'} onClick={() => setActive('all')}>All</button>
          {categories.map((c) => (
            <button key={c.slug} type="button" className="chip" aria-pressed={active === c.slug}
              onClick={() => setActive(c.slug)}>
              <span className="chip__dot" style={{ background: categoryColour[c.slug] }} aria-hidden="true" />
              {c.name}
            </button>
          ))}
        </div>
        <PlaceMap key={active} places={shown} height={600} zoom={14} />
        <p className="note">Some places have no pin yet because their exact location still needs checking. You will find them in their sections.</p>
      </div>
    </main>
  )
}
