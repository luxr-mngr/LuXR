import { CAPS } from '../data';

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="cap-head">
          <div>
            <div className="eyebrow reveal">What we do</div>
            <h2 className="reveal" style={{ marginTop: 20 }}>
              Two studios.
              <br />
              One obsession with the unreal.
            </h2>
          </div>
          <p className="reveal" style={{ marginTop: 8 }}>
            From multi-user XR built in Unreal Engine 5 to the software and AI that runs behind it. LuXR
            designs, engineers and deploys immersive technology end to end.
          </p>
        </div>
        <div className="cap-grid">
          {CAPS.map(card => (
            <div className="cap-card reveal" key={card.idx}>
              {card.badge && <div className="cap-badge">{card.badge}</div>}
              <div className="cap-idx">{card.idx}</div>
              <h3 className="display">{card.title}</h3>
              <div className="cap-kicker">{card.kicker}</div>
              <p>{card.body}</p>
              <ul className="cap-list">
                {card.items.map(item => (
                  <li className="cap-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
