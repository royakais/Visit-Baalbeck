import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { useSceneProgress, Person, Measure } from '../scene-utils.jsx'

// Drawn to scale: 15 px = 1 m. Each trilithon block is about 19 m long and 4 m high.
const M = 15
const X0 = 60
const GROUND = 540
const BLOCK_W = 19 * M
const BLOCK_H = 4 * M
const COURSE_H = 3.5 * M
const LOWER_TOP = GROUND - 2 * COURSE_H
const TRI_Y = LOWER_TOP - BLOCK_H

function Block({ p, i }) {
  const start = 0.12 + i * 0.18
  const x = useTransform(p, [start, start + 0.16], [1100, 0])
  const o = useTransform(p, [start, start + 0.04], [0, 1])
  return (
    <motion.g style={{ x, opacity: o }}>
      <rect x={X0 + i * (BLOCK_W + 2)} y={TRI_Y} width={BLOCK_W} height={BLOCK_H}
        fill="var(--stone)" stroke="var(--stone-shade)" strokeWidth="1.5" />
      <rect x={X0 + i * (BLOCK_W + 2)} y={TRI_Y} width={BLOCK_W} height="6" fill="var(--stone-shade)" opacity=".5" />
    </motion.g>
  )
}

export default function Trilithon() {
  const ref = useRef(null)
  const p = useSceneProgress(ref)
  const lowerO = useTransform(p, [0, 0.1], [0, 1])
  const labelsO = useTransform(p, [0.66, 0.74], [0, 1])
  const tonnes = useTransform(p, [0.12, 0.66], [0, 2400])
  const tonnesText = useTransform(tonnes, (v) => (Math.round(v / 10) * 10).toLocaleString('en-US'))

  const lower = []
  for (let r = 0; r < 2; r++) {
    const w = 4.6 * M
    const offset = r % 2 ? w / 2 : 0
    for (let x = X0 - offset; x < X0 + 3 * BLOCK_W; x += w) {
      const left = Math.max(x, X0)
      const right = Math.min(x + w, X0 + 3 * BLOCK_W + 4)
      lower.push(<rect key={`${r}-${x}`} x={left} y={GROUND - (r + 1) * COURSE_H}
        width={right - left - 2} height={COURSE_H - 2} />)
    }
  }

  return (
    <section ref={ref} className="scene scene--tall" aria-labelledby="tri-title">
      <div className="scene__sticky">
        <div className="scene__grid scene__grid--flip wrap">
          <div className="scene__copy">
            <p className="eyebrow">The Trilithon · western podium wall</p>
            <h2 id="tri-title" className="scene__title">
              <motion.span className="big-num">{tonnesText}</motion.span>
              <span className="big-num__of">tonnes</span>
            </h2>
            <p>
              Three limestone blocks, each about <span className="mono">19 m</span> long
              and <span className="mono">800 t</span>, were raised about seven metres off the ground
              and set side by side with joints so fine you have to look twice to find them.
            </p>
            <motion.p className="scene__aside" style={{ opacity: labelsO }}>
              Nobody is sure how Roman builders did it. They are still among the largest
              stones ever used in a building.
            </motion.p>
          </div>

          <svg className="scene__art" viewBox="0 0 1000 600" role="img"
            aria-label="The three giant trilithon blocks sliding into place on top of the temple's lower wall, drawn to scale with a person">
            <motion.g style={{ opacity: lowerO }} fill="var(--stone-deep)" stroke="var(--stone-shade)" strokeWidth="1">
              {lower}
            </motion.g>
            {[0, 1, 2].map((i) => <Block key={i} p={p} i={i} />)}

            <motion.g style={{ opacity: labelsO }} className="svg-measure">
              <Measure x1={X0} x2={X0 + BLOCK_W} y={TRI_Y - 22} label="≈ 19 m · 800 t" color="var(--stone)" />
              <Measure x1={X0 + BLOCK_W + 2} x2={X0 + 2 * BLOCK_W + 2} y={TRI_Y - 22} label="≈ 19 m · 800 t" color="var(--stone)" />
              <Measure x1={X0 + 2 * BLOCK_W + 4} x2={X0 + 3 * BLOCK_W + 4} y={TRI_Y - 22} label="≈ 19 m · 800 t" color="var(--stone)" />
            </motion.g>

            <rect x="0" y={GROUND} width="1000" height="5" fill="var(--stone-shade)" opacity=".6" />
            <Person x={X0 + 3 * BLOCK_W + 30} y={GROUND} h={1.7 * M} fill="var(--stone)" />
            <text x={X0 + 3 * BLOCK_W + 36} y={GROUND - 34} textAnchor="middle" className="svg-label">you</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
