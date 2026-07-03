import { useState } from 'react';
import type { FormEvent } from 'react';
import { Spark, Arrow } from './primitives';

interface FormErrors {
  name?: string;
  email?: string;
  msg?: string;
}

export function Contact() {
  const [type, setType] = useState('XR Experience');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email required';
    if (!msg.trim()) e.msg = 'Message is required';
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap contact-wrap">
        <div className="contact-left">
          <div className="eyebrow reveal">Start a project</div>
          <h2 className="reveal">
            Let's build
            <br />
            something
            <br />
            <span className="serif-italic">immersive.</span>
          </h2>
          <p className="reveal">
            Tell us what you're imagining: an exhibition, a training simulation, a product, or an AI tool.
            We'll take it from concept to deployment.
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
              <span className="meta-val">Lima, Peru   Deployed globally</span>
            </div>
            <div className="meta-row">
              <span className="meta-lbl">Services</span>
              <span className="meta-val">LuXR Studios   LuXR Solutions</span>
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
              <p>
                Thanks, {name.split(' ')[0]}. We'll be in touch shortly to talk about your {type}.
              </p>
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
                  onChange={e => {
                    setName(e.target.value);
                    setErrors(er => ({ ...er, name: undefined }));
                  }}
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
                  onChange={e => {
                    setEmail(e.target.value);
                    setErrors(er => ({ ...er, email: undefined }));
                  }}
                />
                {errors.email && <span className="form-err">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">What do you need?</label>
                <div className="type-chips">
                  {['XR Experience', 'VR App', 'Web', 'App', 'AI Agent', 'Other'].map(t => (
                    <button
                      type="button"
                      key={t}
                      className={`type-chip${type === t ? ' active' : ''}`}
                      onClick={() => setType(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">About the project</label>
                <textarea
                  className={`form-input${errors.msg ? ' error' : ''}`}
                  placeholder="Tell us about what you're imagining..."
                  value={msg}
                  onChange={e => {
                    setMsg(e.target.value);
                    setErrors(er => ({ ...er, msg: undefined }));
                  }}
                />
                {errors.msg && <span className="form-err">{errors.msg}</span>}
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send message <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
