import { useEffect } from 'react';
import Cursor     from './components/Cursor';
import Particles  from './components/Particles';
import Nav        from './components/Nav';
import Hero       from './components/Hero';
import Stats      from './components/Stats';
import Services   from './components/Services';
import Stack      from './components/Stack';
import Marquee    from './components/Marquee';
import Deploy     from './components/Deploy';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

// ── Scroll Reveal Hook ───────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      <Cursor />
      <Particles />

      <Nav />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Stack />
        <Marquee />
        <Deploy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;