import { motion } from 'framer-motion'
import './Hero.css'

const EASE = [0.22, 0.68, 0.32, 1] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img className="hero__still" src="/hero.png" alt="" />
        <div className="hero__scrim" />
      </div>
      <div className="hero__frame">
        <div className="hero__copy">
          <motion.h1 className="hero__title" {...rise(0.16)}>
            <span className="hero__line">Skills that build</span>
            <span className="hero__line">
              a <em>creative future</em>
            </span>
          </motion.h1>
          <motion.p className="hero__lede" {...rise(0.32)}>
            Workshops, guided practice, and one-to-one consultation for people building a creative path.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
