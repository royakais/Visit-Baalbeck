import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Baalbek</p>
        <p className="footer__ar" lang="ar" dir="rtl">بعلبك · مدينة الشمس</p>
        <p className="footer__note">
          An independent visitor guide made with love in the Beqaa Valley.
        </p>
        <nav className="footer__links" aria-label="Footer">
          {categories.map((c) => <Link key={c.slug} to={`/explore/${c.slug}`}>{c.name}</Link>)}
          <Link to="/map">Map</Link>
          <Link to="/credits">Credits</Link>
        </nav>
        <p className="footer__coords">34.006° N · 36.204° E · Beqaa Valley, Lebanon</p>
      </div>
    </footer>
  )
}
