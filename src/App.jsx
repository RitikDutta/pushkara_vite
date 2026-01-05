import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

const heroLines = ['Pushkara A2 Bilona Ghee —', 'Golden Goodness from Aravalli']
const productImages = ['/1.png', '/2.png']

function App() {
  const appRef = useRef(null)
  const heroRef = useRef(null)
  const productRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

      tl.from('.pill', { y: 18, opacity: 0 })
        .from(
          '.hero-title .char',
          { y: 90, opacity: 0, stagger: 0.028, ease: 'elastic.out(1, 0.6)' },
          '-=0.12',
        )
        .from('.hero-sub', { y: 22, opacity: 0 }, '-=0.18')
        .from('.hero-actions .btn', { y: 14, opacity: 0, stagger: 0.08 }, '-=0.12')

      if (productRef.current) {
        gsap.from(productRef.current.querySelector('.product-copy'), {
          y: 60,
          opacity: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productRef.current,
            start: 'top 78%',
          },
        })

        gsap.from('.product-image', {
          y: 80,
          opacity: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productRef.current,
            start: 'top 78%',
          },
        })
      }
    }, appRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const heroEl = heroRef.current
    const parallaxEl = heroEl?.querySelector('.hero-parallax')
    if (!parallaxEl) return

    const handle = () => {
      const scrolled = window.scrollY
      const height = window.innerHeight
      const offset = Math.min(scrolled, height)
      parallaxEl.style.transform = `translateY(${offset * -0.35}px)`
    }

    handle()
    window.addEventListener('scroll', handle)
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [])

  const prevImage = () => setActiveImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  const nextImage = () => setActiveImage((prev) => (prev + 1) % productImages.length)

  return (
    <div className="page" ref={appRef}>
      <div className="topbar">
        <div className="shell topbar-inner">
          <div className="topbar-left">
            Pushkara Organic · Bilona A2 Ghee from Aravalli hills · <a href="mailto:care@pushkara.com">Talk to us</a>
          </div>
          <div className="topbar-right">
            <span className="meta">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6 12 13 2 6" />
              </svg>
              care@pushkara.com
            </span>
            <span className="meta">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v6l4 2" />
              </svg>
              Mon–Sat · 8am–6pm
            </span>
          </div>
        </div>
      </div>

      <div className="navwrap">
        <header className="nav">
          <div className="shell nav-inner">
            <a className="brand" href="#hero">
              <span className="logo" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 4c-7.2 0-12.7 4.2-14.9 10.3C3.7 18 6.6 20 9.7 20c6 0 10.3-5.1 10.3-16z"
                    stroke="rgba(102,64,18,.95)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 16c3.5-3.5 7.4-5.5 12-6"
                    stroke="rgba(102,64,18,.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="word">Pushkara</span>
            </a>

            <nav className="navlinks" aria-label="Primary">
              <a className="link" href="#hero">
                Home
              </a>
              <a className="link" href="#product">
                Product
              </a>
              <a className="link" href="#product">
                Benefits
              </a>
              <a className="link" href="mailto:care@pushkara.com">
                Contact
              </a>
            </nav>

            <div className="nav-actions">
              <button className="cart" type="button" aria-label="Cart">
                <span className="badge" aria-hidden="true">
                  2
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6h15l-2 9H7L6 6Z"
                    fill="none"
                    stroke="rgba(102,64,18,.9)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6 5 3H2"
                    fill="none"
                    stroke="rgba(102,64,18,.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    fill="none"
                    stroke="rgba(102,64,18,.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <a className="btn primary" href="#product">
                View Product
              </a>
              <button
                className="hamburger"
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span />
              </button>
            </div>
          </div>

          <div className={`shell mobile-panel ${menuOpen ? 'open' : ''}`}>
            <div className="card">
              <a href="#hero">Home</a>
              <a href="#product">Product</a>
              <a href="#product">Benefits</a>
              <a href="mailto:care@pushkara.com">Contact</a>
              <div className="mobile-cta">
                <a className="btn primary" href="mailto:care@pushkara.com">
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main>
        <section className="hero" id="hero" ref={heroRef}>
          <div className="hero-parallax" aria-hidden="true" />
          <div className="hero-inner shell">
            <div className="hero-content">
              <div className="pill">Nature-Friendly Living Starts Here</div>

              <h1 className="hero-title" aria-label="Pushkara A2 Bilona Ghee — Golden Goodness from Aravalli">
                {heroLines.map((line) => (
                  <span className="hero-line" key={line}>
                    {line.split('').map((char, idx) => (
                      <span className="char" key={`${line}-${idx}`}>
                        {char === ' ' ? '\u00a0' : char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              <p className="hero-sub">
                Pushkara Organic provides A2 Desi Cow Ghee sourced from the Aravalli hills, churned curd to butter, then
                slow-cooked in mud pots for chemical-free purity, vitamins A/E/D/K2, and Omega-3s.
              </p>

              <div className="hero-actions">
                <a className="btn primary" href="#product">
                  View the jar
                </a>
                <a className="btn ghost" href="mailto:care@pushkara.com">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <svg className="scribble" viewBox="0 0 600 600" aria-hidden="true">
            <path
              d="M70 470c60-120 160-240 300-300 90-40 170-35 220 10
               M95 520c70-150 190-290 350-340 70-22 120-14 155 5"
              fill="none"
              stroke="rgba(230,190,92,.9)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="watermark">AGRICULTURE</div>
        </section>

        <section className="product" id="product" ref={productRef}>
          <div className="shell product-grid">
            <div className="product-copy">
              <p className="badge">Pushkara Product</p>
              <h2>Bilona A2 Desi Cow Ghee · 1L jar</h2>
              <p className="product-lead">
                Sourced from Aravalli-raised A2 cows, churned into curd butter, and slow-cooked in mud pots. Chemical-free,
                heritage-first, and rich with vitamins A, E, D, K2 plus Omega-3s.
              </p>
              <div className="product-price">
                <span className="price">₹1,199</span>
                <span className="size">1L · glass jar</span>
              </div>
              <div className="product-actions">
                <a className="btn primary" href="mailto:care@pushkara.com">
                  Enquire now
                </a>
                <a className="btn ghost" href="mailto:care@pushkara.com">
                  Order via email
                </a>
              </div>
              <div className="product-note">
                Packed with vitamins (A, E, D, K2) and Omega-3 fatty acids that support bone density, heart health, and
                glowing skin. Safe for all ages and friendly for lactose-intolerant diets.
              </div>
            </div>
            <div className="product-visual parallax-media">
              <img
                className="product-image"
                src={productImages[activeImage]}
                alt={`Pushkara ghee jar view ${activeImage + 1}`}
              />
              <div className="product-controls">
                <button className="btn ghost" type="button" onClick={prevImage}>
                  ‹
                </button>
                <div className="product-dots">
                  {productImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`dot ${idx === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`Show product image ${idx + 1}`}
                    />
                  ))}
                </div>
                <button className="btn ghost" type="button" onClick={nextImage}>
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
