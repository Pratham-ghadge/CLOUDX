const items = ['Vite + React', 'Azure', 'Free Hosting', 'GitHub Actions', 'Global CDN', 'SSL', 'Custom Domains', 'Serverless', 'Fast', 'No Tailwind']

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            {i < doubled.length - 1 && <span className="marquee-dot">◆</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
