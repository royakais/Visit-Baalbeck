import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label="Baalbek home">
        Baalbek
      </Link>
      <nav className="nav__links" aria-label="Main">
        <Link to="/explore/ancient-sites">Sites</Link>
        <Link to="/explore/eat">Eat</Link>
        <Link to="/explore/stay">Stay</Link>
        <Link to="/explore/hidden-gems" className="hide-sm">Hidden gems</Link>
        <Link to="/map">Map</Link>
      </nav>
    </header>
  )
}
