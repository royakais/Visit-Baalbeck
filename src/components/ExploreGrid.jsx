import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../data/categories.js'
import Icon from './Icon.jsx'

export default function ExploreGrid() {
  return (
    <section className="explore" aria-labelledby="explore-title">
      <div className="wrap">
        <div className="explore__head">
          <p className="eyebrow eyebrow--ink">Plan your visit</p>
          <h2 id="explore-title" className="explore__title">Explore Baalbek</h2>
          <p className="explore__lede">
            Beyond the temples: where to eat, where to sleep, the corners locals love,
            and everything you need if something goes wrong.
          </p>
        </div>

        <ul className="explore__grid">
          {categories.map((c, i) => (
            <motion.li key={c.slug}
              initial={{ y: 24 }} whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] }}>
              <Link to={`/explore/${c.slug}`} className="card">
                <span className="card__icon"><Icon name={c.icon} /></span>
                <span className="card__name">{c.name}</span>
                <span className="card__ar" lang="ar" dir="rtl">{c.arabic}</span>
                <span className="card__blurb">{c.blurb}</span>
                <span className="card__go" aria-hidden="true">Explore →</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
