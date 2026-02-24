import { useEffect, useRef } from 'react'

const style = {
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
}

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = 55
    const particles = Array.from({ length: COUNT }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      r:   Math.random() * 1.4 + 0.3,
      vx:  (Math.random() - 0.5) * 0.28,
      vy:  (Math.random() - 0.5) * 0.28,
      op:  Math.random() * 0.45 + 0.1,
      col: Math.random() > 0.55 ? '99,220,255' : '179,255,110',
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99,220,255,${(1 - d / 110) * 0.05})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Dots
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.col},${p.op})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} style={style} />
}
