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

export function Footer({ theme }: { theme: Tweaks['theme'] }) {
  const year = new Date().getFullYear();
  const links: [string, string][] = [
    ['', 'Home'],
    ['mission', 'Mission'],
    ['capabilities', 'Capabilities'],
    ['portfolio', 'Portfolio'],
    ['contact', 'Contact'],
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ cursor: 'pointer', display: 'inline-block', marginBottom: 16 }} onClick={() => goto(null)}>
              <Logo height={30} variant={theme === 'Daylight' ? 'blue' : 'white'} />
            </div>
            <p className="footer-blurb">
              An XR VR studio building immersive experiences in Unreal Engine 5, and the software, apps and AI
              that power them.
            </p>
          </div>
          <div>
            <div className="footer-col-head">Navigate</div>
            <ul className="footer-links">
              {links.map(([id, label]) => (
                <li key={label}>
                  <a
                    href={`#${id}`}
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
          </div>
          <div>
            <div className="footer-col-head">Capabilities</div>
            <ul className="footer-links">
              <li>
                <a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>
                  LuXR Studios XR / VR
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>
                  LuXR Solutions Software &amp; AI
                </a>
              </li>
              <li>
                <a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>
                  Animation Coming soon
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} LuXR Studios   Lima, Peru</span>
          <span>Unreal Engine 5   OpenXR   Android XR</span>
        </div>
      </div>
    </footer>
  );
}
