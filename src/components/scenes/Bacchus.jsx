import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { useSceneProgress } from '../scene-utils.jsx'

// Front of the Temple of Bacchus: eight columns across, raised on a stepped podium.
const COLS = 8
const LEFT = 150
const SPAN = 700
const STEP = SPAN / (COLS - 1)

function Line({ d, p, from, to, width = 2 }) {
  const pathLength = useTransform(p, [from, to], [0, 1])
  return (
    <motion.path d={d} fill="none" stroke="var(--stone)" strokeWidth={width}
      strokeLinecap="round" strokeLinejoin="round" style={{ pathLength }} />
  )
}

export default function Bacchus() {
  const ref = useRef(null)
  const p = useSceneProgress(ref)
  const fill = useTransform(p, [0.7, 0.85], [0, 0.18])

  const podium = 'M60 560 H940 M80 540 H920 M100 520 H900 M120 500 H880 V560 M120 500 V560'
  const columns = Array.from({ length: COLS }, (_, i) => {
    const x = LEFT + i * STEP
    return `M${x - 18} 500 V230 M${x + 18} 500 V230 M${x - 26} 230 H${x + 26} M${x - 24} 500 H${x + 24}`
  })
  const beam = `M${LEFT - 40} 230 H${LEFT + SPAN + 40} M${LEFT - 40} 230 V190 H${LEFT + SPAN + 40} V230 M${LEFT - 50} 190 H${LEFT + SPAN + 50}`
  const pediment = `M${LEFT - 50} 190 L500 95 L${LEFT + SPAN + 50} 190`

  return (
    <section ref={ref} className="scene scene--medium" aria-labelledby="bacchus-title">
      <div className="scene__sticky">
        <div className="scene__grid scene__grid--flip wrap">
          <div className="scene__copy">
            <p className="eyebrow">Temple of Bacchus · mid-2nd century AD</p>
            <h2 id="bacchus-title" className="scene__title scene__title--words">
              Better kept than the Parthenon
            </h2>
            <p>
              The Temple of Bacchus is one of the best-preserved Roman temples anywhere,
              and larger than the Parthenon in Athens. Step through its doorway and look
              up: the ceiling is carved with gods, vines and lions.
            </p>
          </div>

          <svg className="scene__art" viewBox="0 0 1000 600" role="img"
            aria-label="Line drawing of the Temple of Bacchus front with eight columns, drawing itself as you scroll">
            <motion.path d={`M${LEFT - 50} 190 L500 95 L${LEFT + SPAN + 50} 190 V230 H${LEFT - 50} Z`}
              fill="var(--stone)" style={{ opacity: fill }} />
            <Line d={podium} p={p} from={0.02} to={0.2} />
            {columns.map((d, i) => (
              <Line key={i} d={d} p={p} from={0.15 + i * 0.04} to={0.3 + i * 0.04} />
            ))}
            <Line d={beam} p={p} from={0.5} to={0.62} />
            <Line d={pediment} p={p} from={0.6} to={0.72} width={2.5} />
          </svg>
        </div>
      </div>
    </section>
  )
}
