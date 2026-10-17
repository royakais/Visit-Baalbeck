import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Column from '../Column.jsx'

const COLS = [0, 1, 2, 3, 4, 5]

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const sunY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -140])
  const colsY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60])
  const textY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 120])
  const fade = useTransform(scrollY, [0, 420], [1, reduce ? 1 : 0])

  return (
    <section className="hero">
      <motion.div className="hero__sun" style={{ y: sunY }} aria-hidden="true" />

      <motion.div className="hero__text wrap" style={{ y: textY, opacity: fade }}>
        <p className="eyebrow">34.006° N · 36.204° E · Beqaa Valley, Lebanon</p>
        <h1 className="hero__title">Baalbek</h1>
        <p className="hero__ar" lang="ar" dir="rtl">بعلبك</p>
        <p className="hero__lede">
          Heliopolis, the City of the Sun. Home of the largest temples Rome ever built
          and stones so big no one has moved them since.
        </p>
      </motion.div>

      <motion.svg
        className="hero__ruin"
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMax meet"
        style={{ y: colsY }}
        role="img"
        aria-label="Silhouette of the six standing columns of the Temple of Jupiter"
      >
        <g transform="translate(220 0)">
          {/* entablature carried by the six columns */}
          <path d="M-30 18 h790 v16 h-790 z M-22 34 h774 v30 h-774 z M-30 64 h790 v12 h-790 z" fill="var(--silhouette)" />
          {COLS.map((i) => (
            <g key={i} transform={`translate(${i * 140} 76)`}>
              <Column fill="var(--silhouette)" shade="var(--silhouette-line)" />
            </g>
          ))}
        </g>
        <rect x="0" y="516" width="1200" height="4" fill="var(--silhouette)" />
      </motion.svg>

      <motion.p className="hero__cue" style={{ opacity: fade }}>
        Scroll to raise the temple
        <span aria-hidden="true" className="hero__cue-line" />
      </motion.p>
    </section>
  )
}
