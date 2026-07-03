import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useTweaks, DEFAULTS } from './hooks/useTweaks';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Capabilities } from './components/Capabilities';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TweaksPanel } from './components/TweaksPanel';

export default function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Apply tweaks to <html> attributes and CSS vars
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', tweaks.theme === 'Daylight' ? 'day' : 'midnight');
    html.setAttribute('data-accent', tweaks.accent);
    html.setAttribute('data-font', tweaks.displayFont);
    html.setAttribute('data-tagstyle', tweaks.tagStyle);
    html.setAttribute('data-heromotion', tweaks.heroMotion);
    html.setAttribute('data-eyebrow', tweaks.eyebrowStyle);
    html.style.setProperty('--li', String(tweaks.lightIntensity / 100));
  }, [tweaks]);

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-bar');
    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = () =>
      document.querySelectorAll<HTMLElement>('.reveal:not(.snap):not(.in)');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );
    const observe = () => els().forEach(el => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  // Floating motes hero motion
  useEffect(() => {
    if (tweaks.heroMotion !== 'Floating motes') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'motes-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    hero.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      canvas.remove();
      return;
    }

    let animId = 0;
    const motes = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight + window.innerHeight,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.15,
      alpha: Math.random() * 0.5 + 0.1,
    }));
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      motes.forEach(m => {
        m.y -= m.speed;
        if (m.y < -10) {
          m.y = canvas.height + 10;
          m.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91,121,255,${m.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, [tweaks.heroMotion]);

  return (
    <>
      <div id="scroll-bar" aria-hidden="true" />
      <Nav theme={tweaks.theme} />
      <main>
        <Hero tweaks={tweaks} />
        <Mission />
        <Capabilities />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer theme={tweaks.theme} />
      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
      <Analytics />
    </>
  );
}
