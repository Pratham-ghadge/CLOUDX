export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      position: 'relative', zIndex: 1,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '1.3rem', letterSpacing: '0.1em',
        }}>
          CLOUD<span style={{ color: 'var(--cyan)' }}>X</span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontWeight: 300,
            fontSize: '0.6rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--muted-2)',
            marginLeft: '16px',
          }}>Vite + React · Azure Free</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#22c55e',
            animation: 'pulse 2.5s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>All systems operational</span>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          color: 'var(--muted-2)', letterSpacing: '0.1em',
        }}>© 2025 CloudX · Azure Static Web Apps</p>
      </div>
    </footer>
  )
}
