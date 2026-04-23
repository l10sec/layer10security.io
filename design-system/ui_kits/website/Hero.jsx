// Hero.jsx
const HERO_BADGES = [
  { icon: 'shieldCheck', label: '30 Frameworks', sub: 'One Fix, All Satisfied' },
  { icon: 'brain', label: 'AI Agents', sub: 'Find, Prove, Remediate' },
  { icon: 'activity', label: 'Live Telemetry', sub: 'Evidence, Not Assumptions' },
];

function Hero() {
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="l10-hero">
      <div className="l10-hero-bg grid-pattern" />
      <div className="l10-hero-blob1" />
      <div className="l10-hero-blob2" />
      <div className="l10-container l10-hero-grid">
        <div>
          <div className="l10-hero-pill glass">
            <span className="l10-dot-sm l10-pulse" style={{background:'var(--violet-500)', boxShadow:'0 0 10px var(--violet-500)'}}/>
            <span style={{ fontSize: 13, color: 'var(--fg3)' }}>AI Security Engineering</span>
          </div>
          <h1 className="l10-hero-title">
            From Compliance Gap to <span className="text-gradient">Verified Remediation</span>
          </h1>
          <p className="l10-hero-sub">
            AI agents that identify missing controls, detect misconfigurations, and remediate them through your security stack.
          </p>
          <p className="l10-hero-desc">
            We find your missing and misconfigured security controls, prove it with live data from your tools, and remediate them. One fix, 30 frameworks satisfied.
          </p>
          <div className="l10-hero-ctas">
            <button className="btn btn-hero" onClick={() => go('#demo')}>See It In Action <Icon name="arrowRight" size={16}/></button>
            <button className="btn btn-outline" onClick={() => go('#architecture')}>How It Works</button>
          </div>
          <div className="l10-hero-badges">
            {HERO_BADGES.map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icon name={b.icon} size={20} style={{ color: 'var(--indigo-500)' }}/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-mono)', lineHeight: 1.25 }}>{b.label}</p>
                  <p style={{ margin: 0, fontSize: 11, color: 'var(--fg3)', lineHeight: 1.3 }}>{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div><ArchitectureDiagram /></div>
      </div>
    </section>
  );
}
window.Hero = Hero;
