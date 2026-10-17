import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import Column from '../Column.jsx'
import { useSceneProgress, Person } from '../scene-utils.jsx'

const STANDING = [0, 1, 2, 3, 4, 5]
const X0 = 175
const GAP = 115

function RisingColumn({ p, i }) {
  const start = 0.04 + i * 0.07
  const scaleY = useTransform(p, [start, start + 0.16], [0, 1])
  return (
    <motion.g style={{ scaleY, originY: 1, transformBox: 'fill-box' }}>
      <g transform={`translate(${X0 + i * GAP} 150)`}>
        <Column />
      </g>
    </motion.g>
  )
}

export default function SixColumns() {
  const ref = useRef(null)
  const p = useSceneProgress(ref)

  const lintelY = useTransform(p, [0.5, 0.64], [-160, 0])
  const lintelO = useTransform(p, [0.5, 0.56], [0, 1])
  const ghosts = useTransform(p, [0.68, 0.8], [0, 1])
  const count = useTransform(p, [0.04, 0.6], [0, 6])
  const countText = useTransform(count, (v) => String(Math.round(v)))
  const copyO = useTransform(p, [0.08, 0.2], [0.25, 1])
  const lostO = useTransform(p, [0.68, 0.8], [0, 1])

  return (
    <section ref={ref} className="scene scene--tall" aria-labelledby="six-title">
      <div className="scene__sticky">
        <div className="scene__grid wrap">
          <motion.div className="scene__copy" style={{ opacity: copyO }}>
            <p className="eyebrow">Temple of Jupiter · 1st century AD</p>
            <h2 id="six-title" className="scene__title">
              <motion.span className="big-num">{countText}</motion.span>
              <span className="big-num__of">of 54</span>
            </h2>
            <p>
              Fifty-four columns once ringed the Temple of Jupiter. Six still stand,
              each about <span className="mono">20 m</span> tall and carrying their
              original stone beam, the entablature.
            </p>
            <motion.p className="scene__aside" style={{ opacity: lostO }}>
              The other forty-eight were brought down by earthquakes, the last great one in 1759.
            </motion.p>
          </motion.div>

          <svg className="scene__art" viewBox="0 0 1000 640" role="img"
            aria-label="The six columns of the Temple of Jupiter rising, with a person at their foot for scale">
            {/* ghost outlines of lost columns */}
            <motion.g style={{ opacity: ghosts }} fill="none" stroke="var(--stone)" strokeOpacity=".35" strokeDasharray="5 7">
              {[X0 - GAP, X0 + 6 * GAP].map((x) => (
                <rect key={x} x={x + 8} y="194" width="44" height="396" />
              ))}
            </motion.g>

            {STANDING.map((i) => <RisingColumn key={i} p={p} i={i} />)}

            <motion.g style={{ y: lintelY, opacity: lintelO }} fill="var(--stone)">
              <rect x={X0 - 34} y="92" width={5 * GAP + 128} height="16" />
              <rect x={X0 - 26} y="108" width={5 * GAP + 112} height="28" />
              <rect x={X0 - 34} y="136" width={5 * GAP + 128} height="14" />
              <g fill="var(--stone-shade)">
                {Array.from({ length: 34 }, (_, k) => (
                  <rect key={k} x={X0 - 22 + k * 20.5} y="92" width="9" height="7" />
                ))}
              </g>
            </motion.g>

            <rect x="0" y="590" width="1000" height="6" fill="var(--stone-shade)" opacity=".6" />
            <Person x={828} y={590} h={37} fill="var(--stone)" />
            <text x={835} y="540" textAnchor="middle" className="svg-label">you</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
