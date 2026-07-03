import { Spark } from './primitives';

const STATS: { fig: string; lbl: string }[] = [
  { fig: '6+', lbl: 'XR experiences shipped' },
  { fig: '15+', lbl: 'Events deployed' },
  { fig: '1,000+', lbl: 'Users in XR' },
  { fig: '100%', lbl: 'On-time delivery rate' },
];

export function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="mission-glow" aria-hidden="true" />
      <div className="wrap mission-grid">
        <div className="mission-text">
          <div className="eyebrow reveal">Our mission</div>
          <p className="mission-statement reveal">
            Democratizing <span className="serif-italic">millenary culture</span>, digitally, across our
            territory and beyond.
          </p>
          <p className="mission-lead reveal">
            We digitize what time and distance keep out of reach — the millenary cultures of Peru — and place
            them in everyone's hands through immersive XR. Heritage that once lived behind glass or beneath the
            earth, now explorable anywhere a headset or a pair of glasses can go.
          </p>
        </div>
        <div className="mission-model reveal">
          <model-viewer
            src="/models/aribalo.glb"
            alt="3D model rotating"
            auto-rotate=""
            auto-rotate-delay="0"
            rotation-per-second="30deg"
            camera-controls=""
            disable-zoom=""
            interaction-prompt="none"
            shadow-intensity="0"
            shadow-softness="0.8"
            environment-image="neutral"
            exposure="1.1"
            style={{ width: '100%', height: '100%', minHeight: '380px', borderRadius: '18px' }}
          />
        </div>
      </div>
      <div className="wrap">
        <div className="stats">
          {STATS.map(({ fig, lbl }) => (
            <div className="stat reveal" key={lbl}>
              <Spark size={16} />
              <div className="stat-fig">{fig}</div>
              <div className="stat-lbl">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
