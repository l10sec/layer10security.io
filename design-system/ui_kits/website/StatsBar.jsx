// StatsBar.jsx
const STATS = [
  { icon: 'shieldCheck', value: '30', label: 'Compliance Frameworks', sub: 'HIPAA, SOC 2, ISO 27001, CMMC, PCI-DSS...' },
  { icon: 'fileCheck', value: '3,400+', label: 'Control Mappings', sub: 'Cross-framework coverage' },
  { icon: 'plug', value: '72+', label: 'Security Tools', sub: 'Connected to your stack' },
  { icon: 'layers', value: '5', label: 'Security Domains', sub: 'EDR, IAM, Email, Threat Intel, IGA' },
];

function StatsBar() {
  return (
    <section className="l10-stats">
      <div className="l10-container">
        <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--fg3)', marginBottom: 24 }}>Built for Enterprise Security Teams</p>
        <div className="l10-stats-row">
          {STATS.map(s => (
            <div key={s.label} className="l10-stat">
              <div className="l10-stat-ico"><Icon name={s.icon} size={20} style={{ color: 'var(--indigo-500)' }}/></div>
              <div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{s.value} <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg3)' }}>{s.label}</span></p>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--fg3)' }}>{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StatsBar = StatsBar;
