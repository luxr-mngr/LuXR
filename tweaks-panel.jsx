// Tweaks panel — persisted in-page controls
const DEFAULTS = {
  theme: 'Midnight',
  accent: 'Electric',
  displayFont: 'Cormorant',
  tagline: 'Light into worlds.',
  tagStyle: 'Underline',
  heroMotion: 'Headline shimmer',
  eyebrowStyle: 'Wide',
  lightIntensity: 90,
};

const TAGLINES = [
  'Light into worlds.',
  'Step into the unreal.',
  'Reality, reimagined.',
  'Enter elsewhere.',
  'We build immersive XR.',
];

function useTweaks(defaults) {
  const stored = (() => {
    try { return JSON.parse(localStorage.getItem('luxr-tweaks') || '{}'); } catch { return {}; }
  })();
  const [vals, setVals] = React.useState({ ...defaults, ...stored });

  const set = React.useCallback((key, val) => {
    setVals(prev => {
      const next = { ...prev, [key]: val };
      try { localStorage.setItem('luxr-tweaks', JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  return [vals, set];
}

function TweakSection({ label, children }) {
  return (
    <div className="tweak-section">
      <span className="tweak-section-label">{label}</span>
      {children}
    </div>
  );
}

function TweakRadio({ options, value, onChange }) {
  return (
    <div className="tweak-radios">
      {options.map(o => (
        <div
          key={o}
          className={`tweak-radio${value === o ? ' active' : ''}`}
          onClick={() => onChange(o)}
        >
          <div className="tweak-dot" />
          {o}
        </div>
      ))}
    </div>
  );
}

function TweakSelect({ options, value, onChange }) {
  return (
    <select className="tweak-select" value={value} onChange={e => onChange(e.target.value)}>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function TweakSlider({ min, max, value, onChange, label }) {
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
        <span style={{ color:'var(--muted)' }}>{label}</span>
        <span style={{ color:'var(--accent-2)' }}>{value}%</span>
      </div>
      <input
        type="range" className="tweak-slider"
        min={min} max={max} value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function TweaksPanel({ tweaks, setTweak }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button className="tweaks-toggle" onClick={() => setOpen(o => !o)} title="Tweaks">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="3" cy="8" r="1.5"/>
          <circle cx="8" cy="4" r="1.5"/>
          <circle cx="13" cy="11" r="1.5"/>
          <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" opacity=".4"/>
        </svg>
      </button>
      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-title">Tweaks</div>

          <TweakSection label="Mode">
            <TweakRadio options={['Midnight','Daylight']} value={tweaks.theme} onChange={v => setTweak('theme', v)} />
          </TweakSection>

          <TweakSection label="Accent">
            <TweakSelect options={['Electric','Iridescent','Violet','Cyan']} value={tweaks.accent} onChange={v => setTweak('accent', v)} />
          </TweakSection>

          <TweakSection label="Hero light">
            <TweakSlider min={20} max={100} value={tweaks.lightIntensity} onChange={v => setTweak('lightIntensity', v)} label="Intensity" />
          </TweakSection>
        </div>
      )}
    </>
  );
}

Object.assign(window, { TweaksPanel, useTweaks, DEFAULTS });
