const techs = [
  { name: 'Vite 5',                role: 'Build Tool',        color: '#bd93f9' },
  { name: 'React 18',              role: 'UI Framework',      color: '#63dcff' },
  { name: 'Pure CSS',              role: 'Styling',           color: '#b3ff6e' },
  { name: 'GitHub Actions',        role: 'CI/CD Pipeline',    color: '#f8b500' },
  { name: 'Azure Static Web Apps', role: 'Free Hosting',      color: '#0078d4' },
  { name: 'Azure Functions',       role: 'Serverless API',    color: '#ff6b6b' },
]

export default function Stack() {
  return (
    <section id="stack" style={{ background: 'var(--bg-2)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ padding: '96px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <p className="section-eyebrow reveal">// Tech stack</p>
            <h2 className="section-title reveal" style={{ marginBottom: '24px' }}>
              BUILT WITH<br />
              <span className="glow-lime" style={{ color: 'var(--lime)' }}>THE BEST.</span>
            </h2>
            <p className="reveal" style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '1rem', color: 'var(--muted)',
              lineHeight: 1.8, marginBottom: '36px',
            }}>
              Every layer chosen for speed, DX, and zero cost on Azure's free tier.
              No Tailwind. No unnecessary build steps. Just Vite + React + pure CSS.
            </p>
            <a href="#deploy" className="btn btn-primary reveal" data-hover>
              Deploy Guide →
            </a>
          </div>

          {/* Right – tech list */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {techs.map(({ name, role, color }) => (
              <div
                key={name}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 24px',
                  background: 'var(--bg)',
                  borderLeft: '2px solid transparent',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = color
                  e.currentTarget.style.background = 'var(--bg-3)'
                  e.currentTarget.querySelector('.tech-name').style.color = color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.background = 'var(--bg)'
                  e.currentTarget.querySelector('.tech-name').style.color = 'var(--white)'
                }}
                data-hover
              >
                <div>
                  <div
                    className="tech-name"
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 700,
                      fontSize: '1.1rem', letterSpacing: '0.04em',
                      color: 'var(--white)', transition: 'color 0.3s',
                    }}
                  >{name}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--muted-2)', letterSpacing: '0.1em',
                    marginTop: '3px',
                  }}>{role}</div>
                </div>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: color, opacity: 0.5,
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #stack .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
