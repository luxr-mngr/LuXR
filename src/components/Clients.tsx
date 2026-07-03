import { CLIENTS } from '../data';

import pucpLogo from '../assets/marcas/PUCP.png';
import yuyayLogo from '../assets/marcas/yuyay.png';
import grupoAvatarLogo from '../assets/LOGOS/GRUPOAVATOR-LOGO.jpg';
import magdalenaLogo from '../assets/LOGOS/logo-magdalena-del-mar.png';
import minCulturaLogo from '../assets/LOGOS/logo-min-cul.png';

// `tile` picks the backdrop each logo needs to stay legible, independent of
// the site's own light/dark theme: most marks are drawn for a white plate,
// but a light/white-only mark (like Yuyay's) needs a dark one instead.
const CLIENT_LOGOS: Record<string, { src: string; tile?: 'light' | 'dark' }> = {
  PUCP: { src: pucpLogo, tile: 'light' },
  Yuyay: { src: yuyayLogo, tile: 'dark' },
  'Grupo Avatar': { src: grupoAvatarLogo, tile: 'light' },
  'Municipalidad de Magdalena': { src: magdalenaLogo, tile: 'light' },
  'Ministerio de Cultura': { src: minCulturaLogo, tile: 'light' },
};

export function Clients() {
  return (
    <section className="section clients">
      <div className="wrap clients-wrap">
        <div className="clients-left">
          <div className="eyebrow reveal">Partners &amp; venues</div>
          <h2 className="reveal">Deployed with institutions that shape culture.</h2>
          <p className="reveal">
            From university research showcases to traveling museum exhibitions across Peru.
          </p>
        </div>
        <div className="client-grid">
          {CLIENTS.map(c => {
            const logo = CLIENT_LOGOS[c.nm];
            return (
              <div className="client-cell reveal" key={c.nm}>
                {logo && (
                  <div className={`client-logo${logo.tile === 'dark' ? ' client-logo-dark' : ''}`}>
                    <img src={logo.src} alt={`${c.nm} logo`} />
                  </div>
                )}
                <div className="client-nm">{c.nm}</div>
                <div className="client-role">{c.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
