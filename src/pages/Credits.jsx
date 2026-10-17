import { Link } from 'react-router-dom'
import { photos } from '../data/photos.js'
import usePageTitle from '../usePageTitle.js'

export default function Credits() {
  usePageTitle('Credits · Baalbek', 'Photo credits and sources for the Baalbek visitor guide.')
  return (
    <main className="page">
      <header className="page__head">
        <div className="wrap page__head-inner">
          <Link to="/" className="back">← Baalbek</Link>
          <h1 className="page__title">Credits</h1>
          <p className="page__lede">
            Photos come from Wikimedia Commons under free licenses. Maps use OpenStreetMap data.
            Illustrations on the home page are original and drawn to scale.
          </p>
        </div>
      </header>
      <div className="wrap page__body">
        <ul className="credits">
          {Object.entries(photos).map(([key, p]) => (
            <li key={key}>
              <a href={p.page} target="_blank" rel="noreferrer">{p.alt}</a>
              <span>{p.author}{p.license !== 'see file page' ? ` · ${p.license}` : ''}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
