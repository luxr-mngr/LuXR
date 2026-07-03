import { CLIENTS } from '../data';

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
          {CLIENTS.map(c => (
            <div className="client-cell reveal" key={c.nm}>
              <div className="client-nm">{c.nm}</div>
              <div className="client-role">{c.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
