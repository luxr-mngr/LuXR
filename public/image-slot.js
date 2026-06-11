class ImageSlot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._src = null;
  }

  static get observedAttributes() { return ['src', 'fit', 'label']; }

  connectedCallback() {
    this._render();
    this._bindDrop();
  }

  attributeChangedCallback() { this._render(); }

  _render() {
    const src = this.getAttribute('src') || this._src;
    const fit = this.getAttribute('fit') || 'cover';
    const label = this.getAttribute('label') || 'Image slot · drop a shot';
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; width:100%; height:100%; position:relative; overflow:hidden; }
        .ph {
          width:100%; height:100%; display:flex; flex-direction:column;
          align-items:center; justify-content:center; gap:10px;
          background: repeating-linear-gradient(
            135deg,
            rgba(46,85,242,0.06) 0px, rgba(46,85,242,0.06) 1px,
            transparent 1px, transparent 28px
          );
          position:relative;
        }
        .ph::after {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse at 50% 50%, rgba(46,85,242,0.18) 0%, transparent 70%);
          pointer-events:none;
        }
        .spark {
          width:28px; height:28px; opacity:.55;
        }
        .lbl {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing:.18em; text-transform:uppercase;
          color: rgba(46,85,242,0.7); text-align:center; padding:0 12px;
          position:relative; z-index:1;
        }
        .img { width:100%; height:100%; object-fit:${fit}; display:block; }
        :host(.drag-over) .ph { outline: 2px dashed rgba(46,85,242,0.8); }
      </style>
      ${src
        ? `<img class="img" src="${src}" />`
        : `<div class="ph">
            <svg class="spark" viewBox="0 0 24 24" fill="rgba(46,85,242,0.7)">
              <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z"/>
            </svg>
            <div class="lbl">${label}</div>
           </div>`
      }
    `;
  }

  _bindDrop() {
    this.addEventListener('dragover', e => { e.preventDefault(); this.classList.add('drag-over'); });
    this.addEventListener('dragleave', () => this.classList.remove('drag-over'));
    this.addEventListener('drop', e => {
      e.preventDefault();
      this.classList.remove('drag-over');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        this._src = url;
        this._render();
        this.dispatchEvent(new CustomEvent('slot-change', { detail: { src: url } }));
      }
    });
  }
}

customElements.define('image-slot', ImageSlot);
