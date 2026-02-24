const cards = [
  { icon: '⚡', num: '01', title: 'Instant Deploy',   tag: 'CI/CD',        desc: 'Push to GitHub → live in 60 seconds. Azure GitHub Actions CI/CD builds and deploys automatically.' },
  { icon: '🌍', num: '02', title: 'Global CDN',       tag: 'Performance',   desc: 'Your site served from 30+ Azure edge locations worldwide. Sub-100ms load times for every visitor.' },
  { icon: '🔒', num: '03', title: 'Free SSL / HTTPS', tag: 'Security',      desc: 'Automatic TLS provisioning and renewal on every domain. Enterprise-grade security, zero configuration.' },
  { icon: '📦', num: '04', title: 'Custom Domains',   tag: 'Domains',       desc: 'Map unlimited custom domains to your Azure site. Full DNS control included at no extra charge.' },
  { icon: '🔥', num: '05', title: 'Serverless API',   tag: 'Backend',       desc: 'Add Azure Functions for backend logic. Full-stack Vite + React app, still within the free tier.' },
  { icon: '📊', num: '06', title: 'Analytics',        tag: 'Insights',      desc: 'Built-in Azure Monitor. Track performance, errors, and real user metrics out of the box.' },
]

export default function Services() {
  return (
    <section id="services" className="section grid-bg" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <p className="section-eyebrow reveal">// What you get free</p>
        <h2 className="section-title reveal" style={{ marginBottom: '56px' }}>
          FREE TIER<br />
          <span className="glow-cyan" style={{ color: 'var(--cyan)' }}>FEATURES.</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--border)',
          gap: '1px',
          background: 'var(--border)',
        }}>
          {cards.map(({ icon, num, title, tag, desc }, i) => (
            <ServiceCard key={title} icon={icon} num={num} title={title} tag={tag} desc={desc} delay={i * 0.08} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { #services .container > div { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { #services .container > div { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

function ServiceCard({ icon, num, title, tag, desc, delay }) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--bg-3)'
        e.currentTarget.querySelector('.arrow').style.borderColor = 'var(--cyan)'
        e.currentTarget.querySelector('.arrow').style.color = 'var(--cyan)'
        e.currentTarget.querySelector('.card-title').style.color = 'var(--cyan)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg)'
        e.currentTarget.querySelector('.arrow').style.borderColor = 'var(--border)'
        e.currentTarget.querySelector('.arrow').style.color = 'var(--muted)'
        e.currentTarget.querySelector('.card-title').style.color = 'var(--white)'
      }}
      data-hover
    >
      <div style={{ background: 'var(--bg)', padding: '40px', position: 'relative', height: '100%', transition: 'background 0.3s ease' }}>
        {/* Top bar shimmer on hover */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
          opacity: 0, transition: 'opacity 0.3s',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
          <span style={{ fontSize: '2rem' }}>{icon}</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--cyan)', opacity: 0.55,
            border: '1px solid rgba(99,220,255,0.12)',
            padding: '4px 10px',
          }}>{tag}</span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
          color: 'var(--muted-2)', letterSpacing: '0.14em',
          marginBottom: '10px',
        }}>{num}</div>

        <h3
          className="card-title"
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.35rem', letterSpacing: '0.02em',
            color: 'var(--white)', marginBottom: '14px',
            transition: 'color 0.3s',
          }}
        >{title}</h3>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.85rem',
          color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300,
        }}>{desc}</p>

        <div
          className="arrow"
          style={{
            position: 'absolute', bottom: '28px', right: '28px',
            width: '34px', height: '34px',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--muted)', fontSize: '0.9rem',
            transition: 'border-color 0.3s, color 0.3s',
          }}
        >→</div>
      </div>
    </div>
  )
}
