// parts2.jsx — TiltCard, Modal, Portfolio, Clients, Contact, Footer

const PROJECTS = [
  {
    id: 'sockethub-plugin',
    client: 'YUYAY',
    title: 'SocketHub Plugin',
    cat: ['VR'],
    status: 'deployed',
    platform: 'Meta Quest (VR)',
    short: 'A custom Unreal Engine 5 plugin for real-time local WebSocket control of multiple Meta Quest headsets from a single host tablet.',
    long: 'A custom Unreal Engine 5 plugin enabling real-time local WebSocket communication between a command tablet (host server) and multiple Meta Quest headsets (clients), handling level transitions, live audio transmission, and multi-user session control for cultural heritage immersive experiences.',
    tech: ['Unreal Engine 5','Custom UE5 Plugin','WebSocket','Blueprint / C++'],
    outcome: 'Real-time operator control over multiple simultaneous headsets from a single host device.',
  },
  {
    id: 'sockethub-app',
    client: 'YUYAY',
    title: 'SocketHub App',
    cat: ['App'],
    status: 'deployed',
    platform: 'Tablet (Android / iOS)',
    short: 'A companion tablet app acting as host server, managing multiple Quest clients, triggering transitions and transmitting live audio in real time.',
    long: 'A companion tablet application serving as the host server for YUYAY\'s immersive cultural heritage experiences, allowing operators to manage multiple Meta Quest clients simultaneously, trigger level transitions, and transmit live audio commands in real time.',
    tech: ['WebSocket','Mobile App','Real-time Audio'],
    outcome: 'Centralized session-control dashboard for multi-headset VR deployments.',
  },
  {
    id: 'museo-itinerante',
    client: 'Mochica Cultural Heritage',
    title: 'Museo Itinerante VR',
    cat: ['XR','VR'],
    status: 'deployed',
    platform: 'XR (Meta Quest)',
    short: 'A traveling XR experience showcasing 10 photogrammetry-digitized Mochica artifacts, deployed across museums in Lima and festivals in Arequipa.',
    long: 'A traveling XR experience showcasing 10 photogrammetry-digitized Mochica cultural artifacts, deployed across museums in Lima and festivals in Arequipa. LuXR led the transition from VR to XR, integrated full hand tracking for all artifact interactions, and expanded the collection with audio descriptions and contextual multimedia for each piece.',
    tech: ['Unreal Engine 5','Photogrammetry','Hand Tracking','OpenXR'],
    outcome: 'Live multi-city deployment across cultural venues in Lima and Arequipa, Peru.',
  },
  {
    id: 'vestigium',
    client: 'Peruvian Archaeology',
    title: 'VestigiumXR',
    cat: ['XR'],
    status: 'dev',
    platform: 'Wired XR Glasses (Android XR)',
    short: 'An XR platform for exploring and manipulating high-fidelity photogrammetry-digitized Peruvian artifacts otherwise unexhibited or inaccessible.',
    long: 'An XR platform for exploring and manipulating high-fidelity photogrammetry-digitized Peruvian archaeological artifacts that are otherwise unexhibited or physically inaccessible. Designed for museum visitors and the general public, VestigiumXR brings multiple Peruvian collections into immersive spatial experiences, letting users pick up, examine, and interact with artifacts at full scale.',
    tech: ['Unreal Engine 5','OpenXR','Photogrammetry Pipeline','Android XR'],
    outcome: 'In active development, targeting Android XR / Project Aura.',
    isStatus: true,
  },
  {
    id: 'oct-xr',
    client: 'PUCP · Biomedical',
    title: 'OCT XR',
    cat: ['XR','VR'],
    status: 'deployed',
    platform: 'XR (Meta Quest)',
    short: 'A didactic XR experience teaching users to operate an Optical Coherence Tomography device through interactive simulation.',
    long: 'A didactic XR experience that teaches users how to operate an Optical Coherence Tomography (OCT) device, interacting with fictional eye models, performing simulated measurements, and visualizing real-time results. Developed at PUCP and showcased at international events as an interactive demonstration of biomedical research.',
    tech: ['Unreal Engine 5','Interactive Simulation','Blueprint'],
    outcome: 'Deployed at international academic and research events representing PUCP\'s biomedical engineering research.',
  },
  {
    id: 'horizon-pucp',
    client: 'PUCP',
    title: 'Horizon PUCP',
    cat: ['VR'],
    status: 'deployed',
    platform: 'VR (Meta Quest)',
    short: 'A multi-disciplinary VR showcase presenting research from PUCP\'s schools of engineering, psychology, physics and archaeology.',
    long: 'A multi-disciplinary VR showcase presenting research projects from PUCP\'s schools of Mechatronics Engineering, Psychology, Civil Engineering, Physics, and Archaeology, giving attendees an immersive, interactive window into the university\'s research capabilities.',
    tech: ['Unreal Engine 5','Multi-scene Architecture','Blueprint'],
    outcome: 'Live deployment at multiple PUCP institutional and public events across disciplines.',
  },
];

// ─── TiltCard ─────────────────────────────────────────────────
function TiltCard({ children, onClick }) {
  const ref = React.useRef(null);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = React.useCallback((e) => {
    if (prefersReduced) return;
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  }, [prefersReduced]);

  const handleLeave = React.useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return (
    <div
      ref={ref}
      className="tilt-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ─── Modal ─────────────────────────────────────────────────────
function Modal({ project, onClose }) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-media">
          <image-slot id={`modal-${project.id}`} fit="cover" label={`${project.title} · drop a shot`} style={{ width:'100%', height:'100%', display:'block' }} />
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
              <dd>{project.tech.join(' · ')}</dd>
            </div>
            <div className="m-row">
              <dt>{project.isStatus ? 'Status' : 'Outcome'}</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
        </div>
        <button className="modal-close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M1 1 L13 13 M13 1 L1 13"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Portfolio ─────────────────────────────────────────────────
function Portfolio() {
  const [filter, setFilter] = React.useState('All');
  const [active, setActive] = React.useState(null);

  const filters = ['All','XR','VR','App'];

  const visible = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat.includes(filter));

  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="pf-head">
          <div>
            <div className="eyebrow reveal">Selected work</div>
            <h2 className="reveal" style={{ marginTop: 16 }}>Experiences we've shipped.</h2>
          </div>
          <div className="pf-filter">
            {filters.map(f => (
              <button
                key={f}
                className={`pf-filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >{f}</button>
            ))}
          </div>
        </div>

        <div className="pf-grid">
          {visible.map(project => (
            <TiltCard key={project.id} onClick={() => setActive(project)}>
              <div className="pf-card-top">
                <div className={`pf-status${project.status === 'deployed' ? ' deployed' : ' dev'}`}>
                  <div className="status-dot" />
                  {project.status === 'deployed' ? 'Deployed' : 'In development'}
                </div>
                <button className="pf-open" onClick={e => { e.stopPropagation(); setActive(project); }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M1 11 L11 1 M11 1 H4 M11 1 V8"/>
                  </svg>
                </button>
              </div>

              <div className="pf-media">
                <image-slot id={`pf-${project.id}`} fit="cover" label={`${project.title} · drop a shot`} style={{ width:'100%', height:'100%', display:'block' }} />
              </div>

              <div className="pf-body">
                <div className="pf-client">{project.client}</div>
                <h3 className="display">{project.title}</h3>
                <p>{project.short}</p>
                <div className="pf-chips">
                  {project.tech.slice(0,4).map(t => (
                    <span key={t} className="pf-chip">{t}</span>
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

// ─── Clients ──────────────────────────────────────────────────
const CLIENTS = [
  { nm: 'PUCP',            role: 'University & research' },
  { nm: 'Yuyay',           role: 'Immersive heritage' },
  { nm: 'Grupo Avatar',    role: 'XR research group' },
  { nm: 'Museo Itinerante',role: 'Traveling exhibition' },
  { nm: 'Lima',            role: 'Museum deployments' },
  { nm: 'Arequipa',        role: 'Festival deployments' },
];

function Clients() {
  return (
    <section className="section clients">
      <div className="wrap clients-wrap">
        <div className="clients-left">
          <div className="eyebrow reveal">Partners &amp; venues</div>
          <h2 className="reveal">Deployed with institutions that shape culture.</h2>
          <p className="reveal">From university research showcases to traveling museum exhibitions across Peru.</p>
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

// ─── Contact ──────────────────────────────────────────────────
const SERVICE_TYPES = ['XR Experience','VR App','Web','App','AI Agent','Other'];

function Contact() {
  const [type, setType] = React.useState('XR Experience');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email required';
    if (!msg.trim()) errs.msg = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const firstName = name.split(' ')[0];

  return (
    <section className="section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap contact-wrap">
        <div className="contact-left">
          <div className="eyebrow reveal">Start a project</div>
          <h2 className="reveal">
            Let's build<br />something<br /><span className="serif-italic">immersive.</span>
          </h2>
          <p className="reveal">
            Tell us what you're imagining: an exhibition, a training simulation, a product, or an AI tool. We'll take it from concept to deployment.
          </p>
          <div className="contact-meta reveal">
            <div className="meta-row">
              <span className="meta-lbl">Email</span>
              <span className="meta-val">
                <a href="mailto:luxr.core+contact@gmail.com">luxr.core+contact@gmail.com</a>
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-lbl">Studio</span>
              <span className="meta-val">Lima, Peru · Deployed globally</span>
            </div>
            <div className="meta-row">
              <span className="meta-lbl">Services</span>
              <span className="meta-val">LuXR Studios · LuXR Solutions</span>
            </div>
          </div>
        </div>

        <div className="reveal">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">
                <Spark size={36} className="twinkle" />
              </div>
              <h3>Message received. ✦</h3>
              <p>Thanks, {firstName}. We'll be in touch shortly to talk about your {type}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Your name</label>
                <input
                  className={`form-input${errors.name ? ' error' : ''}`}
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={e => { setName(e.target.value); setErrors(er => ({...er, name:undefined})); }}
                />
                {errors.name && <span className="form-err">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className={`form-input${errors.email ? ' error' : ''}`}
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setErrors(er => ({...er, email:undefined})); }}
                />
                {errors.email && <span className="form-err">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">What do you need?</label>
                <div className="type-chips">
                  {SERVICE_TYPES.map(t => (
                    <button
                      type="button"
                      key={t}
                      className={`type-chip${type === t ? ' active' : ''}`}
                      onClick={() => setType(t)}
                    >{t}</button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">About the project</label>
                <textarea
                  className={`form-input${errors.msg ? ' error' : ''}`}
                  placeholder="Tell us about what you're imagining..."
                  value={msg}
                  onChange={e => { setMsg(e.target.value); setErrors(er => ({...er, msg:undefined})); }}
                />
                {errors.msg && <span className="form-err">{errors.msg}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}>
                Send message <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer({ theme }) {
  const logoVariant = theme === 'Daylight' ? 'blue' : 'white';
  const year = new Date().getFullYear();

  const goto = (id) => {
    if (!id) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" onClick={() => goto(null)} style={{ cursor:'pointer', display:'inline-block' }}>
              <Logo height={30} variant={logoVariant} />
            </div>
            <p className="footer-blurb">
              An XR · VR studio building immersive experiences in Unreal Engine 5, and the software, apps and AI that power them.
            </p>
          </div>

          <div>
            <div className="footer-col-head">Navigate</div>
            <ul className="footer-links">
              {[['','Home'],['mission','Mission'],['capabilities','Capabilities'],['portfolio','Portfolio'],['contact','Contact']].map(([id,label]) => (
                <li key={label}>
                  <a href={`#${id}`} onClick={e => { e.preventDefault(); goto(id); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-head">Capabilities</div>
            <ul className="footer-links">
              <li><a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>LuXR Studios · XR / VR</a></li>
              <li><a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>LuXR Solutions · Software &amp; AI</a></li>
              <li><a href="#capabilities" onClick={e => { e.preventDefault(); goto('capabilities'); }}>Animation · Coming soon</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} LuXR Studios · Lima, Peru</span>
          <span>Unreal Engine 5 · OpenXR · Android XR</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TiltCard, Modal, Portfolio, Clients, Contact, Footer });
