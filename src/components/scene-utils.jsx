import { useScroll, useReducedMotion, motionValue } from 'framer-motion'

const done = motionValue(1)

/** Scroll progress (0 → 1) through a tall sticky section.
 *  With reduced motion, every scene simply shows its finished state. */
export function useSceneProgress(ref) {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return reduce ? done : scrollYProgress
}

/** A 1.7 m person, drawn at `h` px tall, standing with feet at (x, y). Used for scale. */
export function Person({ x, y, h = 68, fill = 'currentColor' }) {
  const s = h / 68
  return (
    <g transform={`translate(${x} ${y - h}) scale(${s})`} fill={fill} aria-hidden="true">
      <circle cx="12" cy="7" r="6.5" />
      <rect x="5" y="15" width="14" height="27" rx="4" />
      <rect x="6" y="38" width="5" height="30" rx="2" />
      <rect x="13" y="38" width="5" height="30" rx="2" />
    </g>
  )
}

/** Mono measurement label with a dimension line. */
export function Measure({ x1, x2, y, label, color = 'currentColor' }) {
  return (
    <g stroke={color} fill={color} className="measure">
      <line x1={x1} y1={y} x2={x2} y2={y} strokeWidth="1" />
      <line x1={x1} y1={y - 6} x2={x1} y2={y + 6} strokeWidth="1" />
      <line x1={x2} y1={y - 6} x2={x2} y2={y + 6} strokeWidth="1" />
      <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" stroke="none">{label}</text>
    </g>
  )
}
