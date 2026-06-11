// app.jsx — root composition, scroll logic, theming

function App() {
  const [tweaks, setTweak_] = useTweaks(DEFAULTS);

  const setTweak = React.useCallback((key, val) => {
    setTweak_(key, val);
  }, [setTweak_]);

  // Apply tweaks to <html> attributes and CSS vars
  React.useEffect(() => {
    const html = document.documentElement;

    // Theme
    html.setAttribute('data-theme', tweaks.theme === 'Daylight' ? 'day' : 'midnight');

    // Accent
    html.setAttribute('data-accent', tweaks.accent);

    // Display font
    const fontMap = { 'Bodoni': 'Bodoni', 'Cormorant': 'Cormorant', 'Playfair': 'Playfair' };
    html.setAttribute('data-font', fontMap[tweaks.displayFont] || 'Bodoni');

    // Tag style
    html.setAttribute('data-tagstyle', tweaks.tagStyle);

    // Hero motion
    html.setAttribute('data-heromotion', tweaks.heroMotion);

    // Eyebrow style
    html.setAttribute('data-eyebrow', tweaks.eyebrowStyle);

    // Hero light intensity
    html.style.setProperty('--li', tweaks.lightIntensity / 100);
  }, [tweaks]);

  // Scroll progress + scroll spy
  React.useEffect(() => {
    const bar = document.getElementById('scroll-bar');
    let raf;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (bar) bar.style.width = pct + '%';
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => { window.removeEventListener('scroll', handler); cancelAnimationFrame(raf); };
  }, []);

  // Reveal on scroll
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.snap)');

    // If page can't scroll (preview / short content), reveal all immediately
    const canScroll = document.documentElement.scrollHeight > window.innerHeight + 10;
    if (!canScroll) {
      els.forEach(el => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Floating motes for "Floating motes" hero motion
  React.useEffect(() => {
    if (tweaks.heroMotion !== 'Floating motes') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    let canvas = hero.querySelector('.motes-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.className = 'motes-canvas';
      canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:-1;';
      hero.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    let animId;
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
        if (m.y < -10) { m.y = canvas.height + 10; m.x = Math.random() * canvas.width; }
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
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
