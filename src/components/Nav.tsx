import { useEffect, useState } from 'react';
import { Logo } from './primitives';
import type { Tweaks } from '../hooks/useTweaks';

const goto = (id: string | null) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
};

export function Nav({ theme }: { theme: Tweaks['theme'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const sy = window.scrollY + 80;
      let cur = '';
      ['mission', 'capabilities', 'portfolio', 'contact'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= sy) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links: [string, string][] = [
    ['', 'Home'],
    ['mission', 'Mission'],
    ['capabilities', 'Capabilities'],
    ['portfolio', 'Portfolio'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => goto(null)}>
        <Logo height={26} variant={theme === 'Daylight' ? 'blue' : 'white'} />
      </div>
      <ul className="nav-links">
        {links.map(([id, label]) => (
          <li key={label}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                goto(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="nav-cta"
        onClick={e => {
          e.preventDefault();
          goto('contact');
        }}
      >
        Start a project
      </a>
    </nav>
  );
}
