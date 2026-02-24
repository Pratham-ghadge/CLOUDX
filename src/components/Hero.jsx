import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Parallax orbs on mouse move
    const hero = heroRef.current
    const orb1 = hero.querySelector('[data-orb="1"]')
    const orb2 = hero.querySelector('[data-orb="2"]')

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e
      const cx = window.innerWidth  / 2
      const cy = window.innerHeight / 2
      orb1.style.transform = `translate(${(x - cx) * 0.03}px, ${(y - cy) * 0.03}px)`
      orb2.style.transform = `translate(${(x - cx) * -0.02}px, ${(y - cy) * -0.02}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="grid-bg"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Decorative orbs */}
      <div
        data-orb="1"
        style={{
          position: 'absolute', top: '20%', right: '12%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,220,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 7s ease-in-out infinite',
          transition: 'transform 0.6s ease',
          pointerEvents: 'none',
        }}
      />
      <div
        data-orb="2"
        style={{
          position: 'absolute', bottom: '20%', left: '8%',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(179,255,110,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'floatB 9s ease-in-out infinite',
          transition: 'transform 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Scanline effect */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99,220,255,0.008) 2px, rgba(99,220,255,0.008) 4px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          border: '1px solid rgba(99,220,255,0.18)',
          background: 'rgba(99,220,255,0.05)',
          padding: '8px 18px', marginBottom: '32px',
          animation: 'fadeIn 0.8s ease both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--lime)', display: 'inline-block',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--cyan)',
          }}>
            ✦ Free Hosting · Microsoft Azure
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(3.8rem, 10vw, 9.5rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          marginBottom: '36px',
          animation: 'fadeUp 0.8s 0.15s ease both',
        }}>
          <span style={{ display: 'block', color: 'var(--white)' }}>BUILD.</span>
          <span className="glow-cyan" style={{ display: 'block', color: 'var(--cyan)' }}>DEPLOY.</span>
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.15)' }}>REPEAT.</span>
        </h1>

        {/* Sub + CTA */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '48px', alignItems: 'flex-start',
          animation: 'fadeUp 0.8s 0.3s ease both',
        }}>
          <p style={{
            maxWidth: '440px',
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
            fontWeight: 300,
          }}>
            A <span style={{ color: 'var(--white)', fontWeight: 500 }}>Vite + React</span> website
            hosted <span style={{ color: 'var(--lime)', fontWeight: 500 }}>completely free</span> on
            Azure Static Web Apps — blazing fast, globally distributed, zero cost.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#deploy" className="btn btn-primary" data-hover>
              Deploy Guide →
            </a>
            <a href="#services" className="btn btn-outline" data-hover>
              Explore ↓
            </a>
          </div>
        </div>

        {/* Tech chips */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '10px',
          marginTop: '56px',
          animation: 'fadeUp 0.8s 0.45s ease both',
        }}>
          {['Vite 5', 'React 18', 'Pure CSS', 'Azure Static Web Apps', 'GitHub Actions', 'Free SSL', 'Global CDN'].map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.01)',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
        background: 'var(--bg-2)',
        clipPath: 'polygon(0 100%, 100% 20%, 100% 100%)',
      }} />
    </section>
  )
}
