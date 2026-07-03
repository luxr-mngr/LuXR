export function Spark({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`spark${className ? ' ' + className : ''}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--accent)">
        <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z" />
      </svg>
    </span>
  );
}

export function Arrow() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12 L12 2 M12 2 H5 M12 2 V9" />
    </svg>
  );
}

export function Logo({ height = 26, variant = 'white' }: { height?: number; variant?: 'white' | 'blue' }) {
  const filter = variant === 'white' ? 'brightness(0) invert(1)' : 'none';
  return (
    <img
      src="/logo.svg"
      alt="LuXR"
      style={{ height: height + 'px', width: 'auto', filter, display: 'block' }}
    />
  );
}
