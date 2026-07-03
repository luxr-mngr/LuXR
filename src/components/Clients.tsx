import { CLIENTS } from '../data';

import pucpLogo from '../assets/marcas/PUCP.png';
import yuyayLogo from '../assets/marcas/yuyay.png';
import grupoAvatarLogo from '../assets/LOGOS/GRUPOAVATOR-LOGO.jpg';
import magdalenaLogo from '../assets/LOGOS/logo-magdalena-del-mar.png';

const CLIENT_LOGOS: Record<string, { src: string; dark?: boolean }> = {
  PUCP: { src: pucpLogo },
  Yuyay: { src: yuyayLogo, dark: true },
  'Grupo Avatar': { src: grupoAvatarLogo },
  'Municipalidad de Magdalena': { src: magdalenaLogo },
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
                  <div className={`client-logo${logo.dark ? ' client-logo-dark' : ''}`}>
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
