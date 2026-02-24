import { useState, useEffect, useRef } from 'react'

function Counter({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      let start = 0
      const step = end / 90
      const timer = setInterval(() => {
        start += step
        if (start >= end) { setCount(end); clearInterval(timer) }
        else setCount(Math.floor(start))
      }, 18)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const data = [
  { num: 99, suffix: '.9%', label: 'Uptime SLA' },
  { num: 30,  suffix: '+',   label: 'Azure Regions' },
  { num: 0,   prefix: '$', suffix: '',  label: 'Monthly Cost (Free)' },
  { num: 100, suffix: '',   label: 'Lighthouse Score' },
]

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        background: 'var(--bg-2)',
        padding: '80px 0',
        position: 'relative', zIndex: 1,
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          border: '1px solid var(--border)',
        }}>
          {data.map(({ num, suffix, prefix = '', label }, i) => (
            <div
              key={label}
              className="reveal"
              style={{
                padding: '48px 32px',
                textAlign: 'center',
                borderRight: i < data.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.3s ease',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div
                className="glow-lime"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
                  fontWeight: 800,
                  color: 'var(--lime)',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                <Counter end={num} suffix={suffix} prefix={prefix} />
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #stats .container > div {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
