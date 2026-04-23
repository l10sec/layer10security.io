// Logo.jsx — stacked isometric diamonds + LAYER10 / SECURITY wordmark.
function Logo({ size = 'md', showText = true }) {
  const sizes = { sm: { svg: 28, text: 16 }, md: { svg: 36, text: 18 }, lg: { svg: 48, text: 24 } };
  const { svg, text } = sizes[size];
  return (
    <a href="#" className="l10-logo" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
      <svg viewBox="0 0 64 64" width={svg} height={svg} style={{ transition: 'transform .2s' }}>
        <defs>
          <linearGradient id="ll1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#c4b5fd"/></linearGradient>
          <linearGradient id="ll2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
          <linearGradient id="ll3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
        </defs>
        <polygon points="32,8 56,22 32,36 8,22" fill="url(#ll1)"/>
        <polygon points="32,18 56,32 32,46 8,32" fill="url(#ll2)"/>
        <polygon points="32,28 56,42 32,56 8,42" fill="url(#ll3)"/>
      </svg>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontWeight: 700, fontSize: text, letterSpacing: '0.04em' }}>
            <span style={{ color: 'var(--fg1)' }}>LAYER</span>
            <span style={{ color: 'var(--indigo-500)' }}>10</span>
          </span>
          <span style={{ fontSize: 10, color: 'var(--fg3)', letterSpacing: '0.18em', marginTop: 4, textTransform: 'uppercase' }}>Security</span>
        </div>
      )}
    </a>
  );
}
window.Logo = Logo;
