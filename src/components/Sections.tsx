import { type FormEvent, useEffect, useState } from 'react'
import './Sections.css'

const offerings = [
  {
    num: '01',
    title: 'Workshops',
    text: 'Hands-on sessions built around making, so ideas leave the page and become real work.',
  },
  {
    num: '02',
    title: 'Future-ready skills',
    text: 'A clear direction that connects creative instinct with professional discipline.',
  },
  {
    num: '03',
    title: 'Creative community',
    text: 'A small circle of learners who share the work, the questions, and the progress.',
  },
]

export default function Sections() {
  const [sent, setSent] = useState(false)
  const [motionOk, setMotionOk] = useState(true)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setMotionOk(!media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <section className="block" id="education">
        <div className="wrap">
          <div className="lead">
            <p className="kicker">Education</p>
            <h2>
              Learning with
              <br />
              craft and <em>clarity</em>
            </h2>
            <p className="intro">
              Programs move from foundation to practice, in a setting that feels considered, modern, and personal.
            </p>
          </div>
          <div className="offerings">
            {offerings.map((item) => (
              <article key={item.num}>
                <span>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block block--quiet" id="consultation">
        <div className="wrap consult">
          <div>
            <p className="kicker">Consultation</p>
            <h2>
              A path chosen
              <br />
              <em>with you</em>
            </h2>
            <p className="intro">
              A focused conversation about where you are, where you want to go, and the next step that actually fits.
            </p>
            <ol>
              <li>Clarify your goal and the right path</li>
              <li>Match workshops and programs to your level</li>
              <li>Continue on WhatsApp or Instagram</li>
            </ol>
            <a className="cta" href="https://wa.me/96550565737" target="_blank" rel="noopener noreferrer">
              <span>Book on WhatsApp</span>
              <span className="cta__mark" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
          <aside className="studio">
            {motionOk ? (
              <video
                className="studio__film"
                src="/workshop.mp4"
                poster="/hero.png"
                muted
                loop
                playsInline
                autoPlay
              />
            ) : (
              <img className="studio__film" src="/hero.png" alt="" />
            )}
            <div className="studio__scrim" aria-hidden="true" />
            <div className="studio__copy">
              <p className="aside-label">Vision Workshop</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="block" id="contact">
        <div className="wrap">
          <div className="lead">
            <p className="kicker">Contact</p>
            <h2>
              Start a
              <br />
              <em>conversation</em>
            </h2>
            <p className="intro">Write to us, or reach the academy directly.</p>
          </div>
          <div className="contact">
            <div className="details">
              <div>
                <span>Phone</span>
                <a href="tel:+96550565737">+965 5056 5737</a>
              </div>
              <div>
                <span>Location</span>
                <p>Salmiya, Kuwait City</p>
              </div>
              <div>
                <span>Social</span>
                <p className="links">
                  <a href="https://www.instagram.com/vjn.academy/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://linktr.ee/vjn.academy" target="_blank" rel="noopener noreferrer">
                    Linktree
                  </a>
                  <a href="https://wa.me/96550565737" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Interest
                <select name="interest" defaultValue="consult">
                  <option value="consult">Educational consultation</option>
                  <option value="workshop">Workshop</option>
                  <option value="general">General inquiry</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" required />
              </label>
              <button className="cta" type="submit">
                <span>Send message</span>
                <span className="cta__mark" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <p className="note">
                {sent
                  ? 'Thank you. This preview does not send the message yet.'
                  : 'Preview form — delivery can be connected after approval.'}
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="foot__brand">
          <img src="/logo.png" width="36" height="36" alt="" />
          <span>VJN Academy</span>
        </div>
        <p>Creative education · Salmiya, Kuwait</p>
        <p>© VJN Academy</p>
      </footer>
    </div>
  )
}
