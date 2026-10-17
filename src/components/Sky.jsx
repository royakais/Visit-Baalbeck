import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

/** The page's sky. It moves from night to dawn to a golden afternoon as you scroll,
 *  so the whole home page reads like one day over Baalbek. */
export default function Sky() {
  const { scrollYProgress: p } = useScroll()
  const stops = [0, 0.22, 0.45, 0.68, 0.86]
  const top = useTransform(p, stops, ['#0e0b1f', '#1d1736', '#3b2550', '#7c4252', '#b8694a'])
  const bottom = useTransform(p, stops, ['#231a3d', '#4a2d55', '#9a5158', '#d48a55', '#e8b06e'])
  const bg = useMotionTemplate`linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`
  const stars = useTransform(p, [0, 0.25], [1, 0])

  return (
    <motion.div className="sky" style={{ background: bg }} aria-hidden="true">
      <motion.div className="sky__stars" style={{ opacity: stars }} />
    </motion.div>
  )
}
