import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import { PROJECTS, type Project } from '../data';

import yuyai1 from '../assets/yuyai1.png';
import yuyai2 from '../assets/yuyai2.png';
import museum1 from '../assets/museum1.png';
import museum2 from '../assets/museum2.png';
import museum3 from '../assets/museum3.png';
import museum4 from '../assets/museum4.png';
import vesto1 from '../assets/vesto1.png';
import vesto2 from '../assets/vesto2.png';
import vesto3 from '../assets/vesto3.png';
import oct1 from '../assets/oct1.png';
import oct2 from '../assets/oct2.png';
import horizon1 from '../assets/horizon1.png';
import horizon2 from '../assets/horizon2.png';

const PROJECT_IMAGES: Record<string, string[]> = {
  'sockethub-plugin': [yuyai2],
  'sockethub-app': [yuyai1],
  'museo-itinerante': [museum1, museum2, museum3, museum4],
  'vestigium': [vesto1, vesto2, vesto3],
  'oct-xr': [oct1, oct2],
  'horizon-pucp': [horizon1, horizon2],
};

function TiltCard({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = useCallback(
    (e: ReactMouseEvent) => {
      if (prefersReduced || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      ref.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    },
    [prefersReduced],
  );
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return (
    <div ref={ref} className="tilt-card" onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}>
      {children}
    </div>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const imgs = PROJECT_IMAGES[project.id] ?? [];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + imgs.length) % imgs.length);
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % imgs.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, project]);

  const btnStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.45)', border: 'none', color: 'white',
    width: 36, height: 36, borderRadius: '50%', cursor: 'pointer',
    fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-media" style={{ position: 'relative', overflow: 'hidden' }}>
          {imgs.length > 0 ? (
            <>
              <img src={imgs[idx]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {imgs.length > 1 && (
                <>
                  <button onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + imgs.length) % imgs.length); }} style={{ ...btnStyle, left: 12 }}>‹</button>
                  <button onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % imgs.length); }} style={{ ...btnStyle, right: 12 }}>›</button>
                  <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
                    {imgs.map((_, i) => (
                      <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); }} style={{
                        width: i === idx ? 20 : 6, height: 6, borderRadius: 3, padding: 0,
                        border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                        background: i === idx ? 'white' : 'rgba(255,255,255,0.35)',
                      }} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <image-slot id={`modal-${project.id}`} fit="cover" label={`${project.title} drop a shot`} style={{ width: '100%', height: '100%', display: 'block' }} />
          )}
        </div>
        <div className="modal-body">
          <div className="modal-client">{project.client}</div>
          <h2 className="display">{project.title}</h2>
          <p>{project.long}</p>
          <dl className="m-rows">
            <div className="m-row">
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div className="m-row">
              <dt>Tech</dt>
              <dd>{project.tech.join('   ')}</dd>
            </div>
            <div className="m-row">
              <dt>{project.isStatus ? 'Status' : 'Outcome'}</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
        </div>
        <button className="modal-close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M1 1 L13 13 M13 1 L1 13" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<Project | null>(null);
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat.includes(filter));

  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="pf-head">
          <div>
            <div className="eyebrow reveal">Selected work</div>
            <h2 className="reveal" style={{ marginTop: 16 }}>
              Experiences we've shipped.
            </h2>
          </div>
          <div className="pf-filter">
            {['All', 'XR', 'VR', 'App'].map(f => (
              <button
                key={f}
                className={`pf-filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="pf-grid">
          {visible.map(p => (
            <TiltCard key={p.id} onClick={() => setActive(p)}>
              <div className="pf-card-top">
                <div className={`pf-status${p.status === 'deployed' ? ' deployed' : ' dev'}`}>
                  <div className="status-dot" />
                  {p.status === 'deployed' ? 'Deployed' : 'In development'}
                </div>
                <button
                  className="pf-open"
                  onClick={e => {
                    e.stopPropagation();
                    setActive(p);
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M1 11 L11 1 M11 1 H4 M11 1 V8" />
                  </svg>
                </button>
              </div>
              <div className="pf-media">
                {PROJECT_IMAGES[p.id]?.[0]
                  ? <img src={PROJECT_IMAGES[p.id][0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <image-slot id={`pf-${p.id}`} fit="cover" label={`${p.title} drop a shot`} style={{ width: '100%', height: '100%', display: 'block' }} />
                }
              </div>
              <div className="pf-body">
                <div className="pf-client">{p.client}</div>
                <h3 className="display">{p.title}</h3>
                <p>{p.short}</p>
                <div className="pf-chips">
                  {p.tech.slice(0, 4).map(t => (
                    <span key={t} className="pf-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
