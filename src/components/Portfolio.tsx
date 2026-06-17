import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react';
import { PROJECTS, type Project } from '../data';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-media">
          <image-slot
            id={`modal-${project.id}`}
            fit="cover"
            label={`${project.title} drop a shot`}
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
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
                <image-slot
                  id={`pf-${p.id}`}
                  fit="cover"
                  label={`${p.title} drop a shot`}
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
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
