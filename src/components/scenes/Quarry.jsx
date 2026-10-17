import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { useSceneProgress, Person } from '../scene-utils.jsx'

// Drawn to scale: 30 px = 1 m.
// Hajar al-Hibla: about 20.5 m × 4 m, roughly 1,000 t.
// The stone found beneath it in 2014: about 19.6 m × 6 m, roughly 1,650 t.
const M = 30

export default function Quarry() {
  const ref = useRef(null)
  const p = useSceneProgress(ref)

  const riseY = useTransform(p, [0.02, 0.32], [320, 0])
  const riseO = useTransform(p, [0.02, 0.1], [0, 1])
  const personO = useTransform(p, [0.32, 0.4], [0, 1])
  const label1 = useTransform(p, [0.34, 0.42], [0, 1])
  const cover = useTransform(p, [0.5, 0.74], [1, 0.1])
  const label2 = useTransform(p, [0.68, 0.76], [0, 1])
  const tonnes = useTransform(p, [0.02, 0.32, 0.5, 0.74], [0, 1000, 1000, 1650])
  const tonnesText = useTransform(tonnes, (v) => (Math.round(v / 10) * 10).toLocaleString('en-US'))
  const nameA = useTransform(p, [0.5, 0.62], [1, 0])
  const nameB = useTransform(p, [0.56, 0.68], [0, 1])

  return (
    <section ref={ref} className="scene scene--tall" aria-labelledby="quarry-title">
      <div className="scene__sticky">
        <div className="scene__grid wrap">
          <div className="scene__copy">
            <p className="eyebrow">The Roman quarry · Hajar al-Hibla</p>
            <h2 id="quarry-title" className="scene__title">
              <motion.span className="big-num">{tonnesText}</motion.span>
              <span className="big-num__of">tonnes</span>
            </h2>
            <div className="swap">
              <motion.p style={{ opacity: nameA }}>
                In the quarry on the edge of town lies the <em>Stone of the Pregnant Woman</em>,
                cut by Roman masons and never moved. It weighs about a thousand tonnes.
              </motion.p>
              <motion.p style={{ opacity: nameB }}>
                In 2014, archaeologists dug beneath it and found an even bigger block,
                about <span className="mono">1,650 t</span>: the largest stone block known from the ancient world.
              </motion.p>
            </div>
          </div>

          <svg className="scene__art" viewBox="0 0 1000 680" role="img"
            aria-label="The Stone of the Pregnant Woman rising from the quarry, then a larger stone revealed beneath it, drawn to scale with a person">
            {/* earth and the excavated pit */}
            <rect x="0" y="400" width="1000" height="280" fill="var(--earth)" />
            <path d="M120 400 L170 480 L860 480 L900 400 Z" fill="var(--pit)" />

            {/* the 2014 stone, under the pit floor */}
            <g>
              <rect x="210" y="482" width={19.6 * M} height={6 * M}
                fill="var(--stone)" stroke="var(--stone-shade)" strokeWidth="1.5" />
              <motion.rect x="200" y="481" width={19.6 * M + 20} height={6 * M + 4}
                fill="var(--earth)" style={{ opacity: cover }} />
              <motion.text x={210 + 9.8 * M} y="600" textAnchor="middle" className="svg-label svg-label--dark" style={{ opacity: label2 }}>
                found 2014 · ≈ 19.6 m · 1,650 t
              </motion.text>
            </g>

            {/* Hajar al-Hibla, tilted as it lies today */}
            <motion.g style={{ y: riseY, opacity: riseO }}>
              <g transform="translate(180 480) rotate(-11)">
                <rect x="0" y={-4 * M} width={20.5 * M} height={4 * M}
                  fill="var(--stone)" stroke="var(--stone-shade)" strokeWidth="1.5" />
                <rect x="0" y={-4 * M} width={20.5 * M} height="8" fill="var(--stone-shade)" opacity=".5" />
                <motion.g style={{ opacity: label1 }}>
                  <text x={10.25 * M} y={-1.6 * M} textAnchor="middle" className="svg-label svg-label--dark">
                    Hajar al-Hibla · ≈ 20.5 m · 1,000 t
                  </text>
                </motion.g>
                <motion.g style={{ opacity: personO }}>
                  <g transform={`translate(${4 * M} ${-4 * M}) rotate(11)`}>
                    <Person x={-6} y={0} h={1.7 * M} fill="var(--silhouette)" />
                  </g>
                </motion.g>
              </g>
            </motion.g>
          </svg>
        </div>
      </div>
    </section>
  )
}
