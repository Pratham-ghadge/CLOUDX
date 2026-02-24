import { useState, useEffect } from 'react'

const links = ['Services', 'Stats', 'Stack', 'Deploy', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px',
    transition: 'background 0.4s ease, border-color 0.4s ease',
    background: scrolled ? 'rgba(5,6,15,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
  }

  const logoStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: '1.5rem',
    letterSpacing: '0.08em',
    color: 'var(--white)',
  }

  const linkStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    transition: 'color 0.25s',
    padding: '4px 0',
  }

  return (
    <>
      <nav style={navStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          CLOUD<span style={{ color: 'var(--cyan)' }}>X</span>
        </div>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {links.map(l => (
            <li key={l} className="desktop-nav-item">
              <a
                href={`#${l.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                data-hover
              >{l}</a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ fontSize: '0.68rem', padding: '10px 22px' }}
              data-hover
            >
              Get Started →
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border)',
            color: 'var(--white)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            padding: '8px 14px',
          }}
          data-hover
        >
          {open ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(5,6,15,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '2rem',
                letterSpacing: '0.1em',
                color: 'var(--white)',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--white)'}
              data-hover
            >{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-item { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
