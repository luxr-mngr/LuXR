import { useState } from 'react';
import type { ReactNode } from 'react';
import type { Tweaks } from '../hooks/useTweaks';

function TweakSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="tweak-section">
      <span className="tweak-section-label">{label}</span>
      {children}
    </div>
  );
}

function TweakRadio({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
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

function TweakSlider({
  min,
  max,
  value,
  onChange,
  label,
}: {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ color: 'var(--muted)' }}>{label}</span>
        <span style={{ color: 'var(--accent-2)' }}>{value}%</span>
      </div>
      <input
        type="range"
        className="tweak-slider"
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function TweaksPanel({
  tweaks,
  setTweak,
}: {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(key: K, val: Tweaks[K]) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="tweaks-toggle" onClick={() => setOpen(o => !o)} title="Tweaks">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="3" cy="8" r="1.5" fill="currentColor" />
          <circle cx="8" cy="4" r="1.5" fill="currentColor" />
          <circle cx="13" cy="11" r="1.5" fill="currentColor" />
          <line x1="0" y1="8" x2="16" y2="8" strokeOpacity=".4" />
        </svg>
      </button>
      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-title">Tweaks</div>
          <TweakSection label="Mode">
            <TweakRadio
              options={['Midnight', 'Daylight']}
              value={tweaks.theme}
              onChange={v => setTweak('theme', v as Tweaks['theme'])}
            />
          </TweakSection>
          <TweakSection label="Hero light">
            <TweakSlider
              min={20}
              max={100}
              value={tweaks.lightIntensity}
              onChange={v => setTweak('lightIntensity', v)}
              label="Intensity"
            />
          </TweakSection>
        </div>
      )}
    </>
  );
}
