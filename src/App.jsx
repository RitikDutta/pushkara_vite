import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

const sectionData = [
  {
    id: 'craft',
    label: 'Separate chapters',
    heading: 'Sections stay distinct so each story lands cleanly.',
    copy:
      'Roomy padding, crisp hierarchy, and GSAP entrances make every block feel intentional instead of blending together.',
    tags: ['Distinct layout', 'Readable pacing', 'Launch-ready hero'],
    palette: 'sunrise',
    callouts: [
      {
        title: 'Spacing',
        text: 'Generous gutters keep narratives apart so you never lose the thread.',
      },
      {
        title: 'Flow',
        text: 'ScrollTrigger reveals copy as you reach it, guiding readers line by line.',
      },
      {
        title: 'Tone',
        text: 'Badges and subheads set context fast, then hand off to visuals.',
      },
    ],
  },
  {
    id: 'flow',
    label: 'Parallax rhythm',
    heading: 'Layered media moves at a different speed than the copy.',
    copy:
      'Soft parallax on the media panes adds depth without fighting readability. Each panel scrubs with the scroll.',
    tags: ['ScrollTrigger scrub', 'Depth without chaos', 'Motion cues'],
    palette: 'aqua',
    callouts: [
      {
        title: 'Dual speed',
        text: 'Content pins while visuals drift, hinting at dimension.',
      },
      {
        title: 'Control',
        text: 'Scrubbed timelines stay synced to user intent—not autoplay.',
      },
      {
        title: 'Polish',
        text: 'Glow gradients and grid shards add texture behind the text.',
      },
    ],
  },
  {
    id: 'details',
    label: 'GSAP-first hero',
    heading: 'Hero copy animates in with a choreographed cadence.',
    copy:
      'Kicker, headline, and actions each have their own beat so the entrance feels deliberate and memorable.',
    tags: ['Sequenced intro', 'Micro-interactions', 'Reusable hooks'],
    palette: 'lilac',
    callouts: [
      {
        title: 'Timeline',
        text: 'Line-by-line hero animation primes the rest of the page.',
      },
      {
        title: 'Reusability',
        text: 'Drop-in classes for future hero headlines and ctas.',
      },
      {
        title: 'Consistency',
        text: 'Shared easing and timing keep everything in the same universe.',
      },
    ],
  },
]

function App() {
  const appRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

      tl.from('.hero-kicker', { y: 16, opacity: 0 })
        .from('.hero-title span', { y: 60, opacity: 0, stagger: 0.08 }, '-=0.25')
        .from('.hero-sub', { y: 22, opacity: 0 }, '-=0.4')
        .from('.hero-actions a', { y: 12, opacity: 0, stagger: 0.1 }, '-=0.3')

      gsap.to('.orb', {
        y: -14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 3,
      })

      sectionsRef.current.forEach((section, index) => {
        if (!section) return

        const content = section.querySelector('.section-inner')
        const media = section.querySelector('.parallax-media')

        if (content) {
          gsap.fromTo(
            content,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 76%',
              },
            },
          )
        }

        if (media) {
          gsap.fromTo(
            media,
            { y: index % 2 === 0 ? -70 : -40 },
            {
              y: index % 2 === 0 ? 70 : 40,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          )
        }
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page" ref={appRef}>
      <header className="shell nav">
        <div className="logo-mark">Pushkara</div>
        <div className="nav-links">
          <a href="#hero">Hero</a>
          <a href="#craft">Sections</a>
          <a href="#cta">CTA</a>
        </div>
      </header>

      <main className="shell">
        <section className="hero" id="hero">
          <div className="hero-content">
            <p className="hero-kicker">GSAP hero, clear sections</p>
            <h1 className="hero-title">
              <span>Give each section</span>
              <span>room to breathe</span>
              <span>with layered motion.</span>
            </h1>
            <p className="hero-sub">
              A hero that enters smoothly, sections that stay separate, and parallax motion that follows your scroll
              instead of competing with it.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#craft">
                See the flow
              </a>
              <a className="btn ghost" href="#cta">
                Build it out
              </a>
            </div>
            <ul className="hero-pills">
              <li>Hero choreography</li>
              <li>Parallax sections</li>
              <li>Readable pacing</li>
            </ul>
          </div>

          <div className="hero-visual parallax-media">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="hero-card">
              <p className="card-label">Launch-ready</p>
              <p className="card-title">Motion that guides, never overwhelms.</p>
              <div className="card-metrics">
                <div>
                  <span className="metric">0.3s</span>
                  <span className="metric-label">Hero beat</span>
                </div>
                <div>
                  <span className="metric">scrub</span>
                  <span className="metric-label">Parallax</span>
                </div>
              </div>
            </div>
            <div className="hero-bars">
              <span className="bar bar-one" />
              <span className="bar bar-two" />
              <span className="bar bar-three" />
            </div>
          </div>
        </section>

        {sectionData.map((section, idx) => (
          <section
            className={`section ${idx % 2 === 1 ? 'section-reverse' : ''}`}
            id={section.id}
            key={section.id}
            ref={(el) => (sectionsRef.current[idx] = el)}
          >
            <div className="section-inner">
              <p className="badge">{section.label}</p>
              <h2>{section.heading}</h2>
              <p className="section-copy">{section.copy}</p>
              <div className="chips">
                {section.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`section-media parallax-media ${section.palette}`}>
              <div className="media-grid">
                {section.callouts.map((item) => (
                  <div className="media-card" key={item.title}>
                    <p className="media-label">{item.title}</p>
                    <p className="media-text">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="media-accent" />
            </div>
          </section>
        ))}

        <section
          className="section cta"
          id="cta"
          ref={(el) => (sectionsRef.current[sectionData.length] = el)}
        >
          <div className="section-inner">
            <p className="badge">Next steps</p>
            <h2>Ready for a hero that moves?</h2>
            <p className="section-copy">
              Blend parallax with clean section boundaries and a hero that sets the tone. Let&apos;s wire it into your
              brand story next.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#hero">
                Back to top
              </a>
              <a className="btn ghost" href="mailto:hello@example.com">
                Build together
              </a>
            </div>
          </div>
          <div className="section-media parallax-media twilight">
            <div className="mesh">
              <span className="mesh-line" />
              <span className="mesh-line" />
              <span className="mesh-line" />
              <span className="mesh-line" />
            </div>
            <div className="mesh-dots">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
