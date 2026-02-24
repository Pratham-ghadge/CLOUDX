import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.target.reset()
  }

  const inputStyle = (name) => ({
    width: '100%',
    background: 'var(--bg)',
    border: `1px solid ${focused === name ? 'var(--cyan)' : 'var(--border)'}`,
    color: 'var(--white)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.82rem',
    padding: '14px 18px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  })

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.62rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-2)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ padding: '96px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <p className="section-eyebrow reveal">
  {'// Get in touch'}
</p>
            <h2 className="section-title reveal" style={{ marginBottom: '24px' }}>
              START YOUR<br />
              <span className="glow-cyan" style={{ color: 'var(--cyan)' }}>PROJECT.</span>
            </h2>
            <p className="reveal" style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '1rem', color: 'var(--muted)',
              lineHeight: 1.8, marginBottom: '40px',
            }}>
              Ready to deploy your Vite + React site on Azure for free?
              Let's build something fast and beautiful.
            </p>

            {/* Info rows */}
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                ['Stack',       'Vite + React + Pure CSS'],
                ['Platform',    'Microsoft Azure (Free)'],
                ['Deploy Time', '~60 seconds'],
                ['Cost',        '$0 / month forever'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--muted-2)', minWidth: '90px',
                  }}>{k}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                    color: 'var(--cyan)',
                  }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="reveal" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text" required placeholder="Your name"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email" required placeholder="you@email.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Project Type</label>
              <select
                style={{ ...inputStyle('type'), appearance: 'none', cursor: 'none' }}
                onFocus={() => setFocused('type')}
                onBlur={() => setFocused(null)}
              >
                <option style={{ background: 'var(--bg)' }}>Vite + React App</option>
                <option style={{ background: 'var(--bg)' }}>Portfolio Site</option>
                <option style={{ background: 'var(--bg)' }}>SaaS Dashboard</option>
                <option style={{ background: 'var(--bg)' }}>E-Commerce</option>
                <option style={{ background: 'var(--bg)' }}>Other</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                required rows={5} placeholder="Tell me about your project..."
                style={{ ...inputStyle('msg'), resize: 'vertical', minHeight: '120px' }}
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                background: sent ? '#22c55e' : 'var(--cyan)',
                color: 'var(--bg)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 400,
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '16px',
                border: 'none',
                width: '100%',
                transition: 'background 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => !sent && (e.target.style.background = 'var(--lime)')}
              onMouseLeave={e => !sent && (e.target.style.background = 'var(--cyan)')}
              data-hover
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
