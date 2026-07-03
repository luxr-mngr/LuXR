import { useEffect, useRef } from 'react';
import { Spark, Arrow } from './primitives';
import { PointCloud } from './PointCloud';
import type { Tweaks } from '../hooks/useTweaks';

const goto = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
};

export function Hero({ tweaks }: { tweaks: Tweaks }) {
  const lightRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const taglineMap: Record<string, string[]> = {
    'Light into worlds.': ['Light into', 'worlds.'],
    'Step into the unreal.': ['Step into', 'the unreal.'],
    'Reality, reimagined.': ['Reality,', 'reimagined.'],
    'Enter elsewhere.': ['Enter', 'elsewhere.'],
    'We build immersive XR.': ['We build', 'immersive XR.'],
  };
  const lines = taglineMap[tweaks.tagline] || [tweaks.tagline];

  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 120;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (lightRef.current)
          lightRef.current.style.transform = `translate(calc(-50% + ${x}px), ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handler);
    return () => {
      window.removeEventListener('mousemove', handler);
      cancelAnimationFrame(raf);
    };
  }, [prefersReduced]);

  useEffect(() => {
    if (h1Ref.current) h1Ref.current.classList.remove('in');
    const t = setTimeout(() => {
      if (h1Ref.current) h1Ref.current.classList.add('in');
    }, 60);
    return () => clearTimeout(t);
  }, [tweaks.tagline]);

  const sparkSize = Math.min(80, 0.09 * window.innerWidth + 30);

  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-light" ref={lightRef} aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-illo" aria-hidden="true">
        <PointCloud />
      </div>

      <div className="wrap hero-inner">
        <div className="hero-eyebrow eyebrow reveal snap">
          XR<span className="sep" />VR<span className="sep" />Extended Reality Studio
        </div>

        <h1 className="display hero-h1" ref={h1Ref}>
          <span className="hero-h1-wrap">
            {lines.map((line, i) => (
              <span className="ln" key={i}>
                <span style={{ transitionDelay: `${120 + i * 90}ms` }}>{line}</span>
              </span>
            ))}
            <span className="hero-spark" style={{ top: 0, right: -(sparkSize + 8) }}>
              <Spark size={sparkSize} className="twinkle" />
            </span>
          </span>
        </h1>

        <p className="hero-sub reveal snap">
          An XR VR studio crafting immersive experiences in{' '}
          <strong style={{ color: 'var(--text)', whiteSpace: 'nowrap' }}>Unreal Engine 5</strong>,
          built in Lima, Peru, deployed globally.
        </p>

        <div className="tags reveal snap">
          {['Unreal Engine 5', 'OpenXR', 'Android XR', 'Meta Quest', 'Photogrammetry', 'Hand Tracking'].map(t => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="hero-cta-row reveal snap">
          <button className="btn btn-primary" onClick={() => goto('portfolio')}>
            View our work <Arrow />
          </button>
          <button className="btn btn-ghost" onClick={() => goto('contact')}>
            Start a project <Arrow />
          </button>
        </div>
      </div>

      <div className="hero-meta">
        <span>Lima, Peru   Deployed globally</span>
        <div className="scroll-cue">
          <span>Scroll</span>
          <div className="scroll-bar" />
        </div>
      </div>
    </section>
  );
}
