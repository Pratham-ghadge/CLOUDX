import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    let rx = 0, ry = 0, mx = 0, my = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('mousemove', onMove)

    // Hover effect on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, [data-hover]')
    const addActive    = () => { cursor.classList.add('active');    ring.classList.add('active') }
    const removeActive = () => { cursor.classList.remove('active'); ring.classList.remove('active') }

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', addActive)
      el.addEventListener('mouseleave', removeActive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}
