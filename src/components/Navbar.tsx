import { Fragment, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const links = [
  { label: 'Education', href: '#education' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Contact us', href: '#contact' },
]

export default function Navbar() {
  const [ink, setInk] = useState(false)

  useEffect(() => {
    const onScroll = () => setInk(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={ink ? 'nav nav--ink' : 'nav'}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.68, 0.32, 1] }}
    >
      <a className="nav__brand" href="#top">
        <img className="nav__mark" src="/logo.png" width="41" height="41" alt="" />
        <span className="nav__word">VJN Academy</span>
      </a>
      <div className="nav__set">
        {links.map((link, i) => (
          <Fragment key={link.label}>
            {i > 0 && <span className="nav__dot" aria-hidden="true" />}
            <a className="nav__link" href={link.href}>
              {link.label}
            </a>
          </Fragment>
        ))}
      </div>
    </motion.nav>
  )
}
