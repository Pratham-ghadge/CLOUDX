const steps = [
  {
    num: '01',
    title: 'Scaffold the Project',
    tag: 'Terminal',
    desc: 'Create a new Vite + React project — the modern, fast alternative to Create React App.',
    code: `npm create vite@latest my-azure-app -- --template react
cd my-azure-app
npm install
npm run dev   # test at localhost:5173`,
  },
  {
    num: '02',
    title: 'Add Azure Routing Config',
    tag: 'Config',
    desc: 'Create this file in your /public folder so Azure correctly routes all React paths.',
    code: `// public/staticwebapp.config.json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*"]
  }
}`,
  },
  {
    num: '03',
    title: 'Push to GitHub',
    tag: 'Git',
    desc: 'Create a repository on GitHub and push your project. Azure connects directly to it.',
    code: `git init
git add .
git commit -m "Initial Vite React app"

# Create repo at github.com, then:
git remote add origin https://github.com/YOU/my-azure-app.git
git push -u origin main`,
  },
  {
    num: '04',
    title: 'Create Azure Static Web App',
    tag: 'Azure Portal',
    desc: 'Log into portal.azure.com and create your free Static Web App connected to GitHub.',
    code: `1. portal.azure.com → Search "Static Web Apps"
2. Click "+ Create"
3. Subscription: Free Trial
4. Plan type: ✅ FREE
5. Connect GitHub → select your repo
6. Build preset: "Vite"
   App location:  /
   Output location: dist       ← important for Vite!
7. Review + Create → Create`,
  },
  {
    num: '05',
    title: 'Auto-Deploy on Every Push',
    tag: 'GitHub Actions',
    desc: 'Azure creates a workflow file automatically. Every git push triggers a new deployment.',
    code: `# Azure auto-creates:
# .github/workflows/azure-static-web-apps-*.yml

# Future deploys — just push!
git add .
git commit -m "Update site"
git push    # → live in ~60 seconds ✓`,
  },
  {
    num: '06',
    title: 'Site is Live! 🎉',
    tag: 'Done',
    desc: 'Your Vite + React site is now live globally. Add a custom domain in the Azure Portal.',
    code: `# Your free Azure URL:
https://your-app-name.azurestaticapps.net

# Add custom domain (optional):
Portal → Your App → Custom Domains
→ Add → Follow DNS instructions
→ Free SSL auto-provisions ✓`,
  },
]

export default function Deploy() {
  return (
    <section id="deploy" className="section grid-bg" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <p className="section-eyebrow reveal">// Step by step</p>
        <h2 className="section-title reveal" style={{ marginBottom: '16px' }}>
          AZURE DEPLOY
        </h2>
        <h2
          className="section-title glow-cyan reveal"
          style={{ color: 'var(--cyan)', marginBottom: '56px' }}
        >
          GUIDE.
        </h2>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {steps.map(({ num, title, tag, desc, code }, i) => (
            <DeployStep key={num} num={num} title={title} tag={tag} desc={desc} code={code} delay={i * 0.07} />
          ))}
        </div>

        {/* Free tier table */}
        <div
          className="reveal"
          style={{
            marginTop: '56px',
            border: '1px solid var(--border)',
            background: 'var(--bg-2)',
            padding: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '3px', height: '36px', background: 'var(--lime)' }} />
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '1.6rem', letterSpacing: '0.06em',
            }}>FREE TIER INCLUDES</h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            background: 'var(--border)',
          }}>
            {[
              ['100 GB', 'Bandwidth / Month'],
              ['Free SSL', 'Auto-Renewed Cert'],
              ['∞', 'Custom Domains'],
              ['$0', 'Monthly Cost'],
            ].map(([val, label]) => (
              <div key={label} style={{
                background: 'var(--bg)', padding: '24px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1.8rem', color: 'var(--lime)',
                  marginBottom: '6px',
                }} className="glow-lime">{val}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #deploy .container > div:last-child > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function DeployStep({ num, title, tag, desc, code, delay }) {
  return (
    <div
      className="reveal"
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={e => e.currentTarget.querySelector('.step-inner').style.background = 'var(--bg-3)'}
      onMouseLeave={e => e.currentTarget.querySelector('.step-inner').style.background = 'var(--bg-2)'}
    >
      <div
        className="step-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '72px 1fr 1fr',
          gap: '32px',
          alignItems: 'start',
          padding: '32px',
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Number */}
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '3rem', color: 'rgba(99,220,255,0.15)',
          lineHeight: 1, transition: 'color 0.3s',
        }}>{num}</div>

        {/* Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.25rem', letterSpacing: '0.03em', color: 'var(--white)',
            }}>{title}</h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--lime)', border: '1px solid rgba(179,255,110,0.2)',
              padding: '3px 8px',
            }}>{tag}</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.875rem',
            color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300,
          }}>{desc}</p>
        </div>

        {/* Code block */}
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid rgba(99,220,255,0.08)',
          padding: '16px 20px',
        }}>
          <pre style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'rgba(99,220,255,0.75)', lineHeight: 1.7,
            whiteSpace: 'pre-wrap', overflowX: 'auto',
          }}>{code}</pre>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .step-inner { grid-template-columns: 56px 1fr !important; }
          .step-inner > div:last-child { grid-column: 2; }
        }
        @media (max-width: 560px) {
          .step-inner { grid-template-columns: 1fr !important; padding: 24px !important; }
        }
      `}</style>
    </div>
  )
}
