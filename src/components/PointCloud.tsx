import { useEffect, useRef } from 'react';

export function PointCloud() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const COUNT = 560;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const points: [number, number, number][] = [];
    const circles: SVGCircleElement[] = [];

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);

      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      svg.appendChild(c);
      circles.push(c);
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;

    const render = (t: number) => {
      const a = t * 0.1;
      const b = a * 0.35 + 0.4;
      const cosA = Math.cos(a),
        sinA = Math.sin(a);
      const cosB = Math.cos(b),
        sinB = Math.sin(b);

      for (let i = 0; i < COUNT; i++) {
        const [px, py, pz] = points[i];
        const x1 = px * cosA - pz * sinA;
        const z1 = px * sinA + pz * cosA;
        const y2 = py * cosB - z1 * sinB;
        const z2 = py * sinB + z1 * cosB;

        const depth = (z2 + 1) / 2;
        const c = circles[i];
        c.setAttribute('cx', String(500 + x1 * 168));
        c.setAttribute('cy', String(215 + y2 * 168));
        c.setAttribute('r', String(0.5 + depth * 2.1));
        c.setAttribute('opacity', String(0.1 + depth * 0.72));
        c.setAttribute('fill', depth > 0.62 ? 'var(--accent-2)' : 'var(--accent)');
      }
    };

    if (prefersReduced) {
      render(0.6);
      return;
    }

    let t = 0;
    const loop = () => {
      t += 0.016;
      render(t);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      circles.forEach(c => c.remove());
    };
  }, []);

  return <svg ref={svgRef} viewBox="0 0 1000 430" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />;
}
