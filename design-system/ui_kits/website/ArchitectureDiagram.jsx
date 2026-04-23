// ArchitectureDiagram.jsx — 3-column "coverage / engine / stack" panel.
const DIAG_METRICS = [
  { label: 'Frameworks', value: '30' },
  { label: 'Controls', value: '3,400+' },
  { label: 'Security Tools', value: '72+' },
];
const DIAG_FEATURES = [
  { name: 'Identify Gaps', color: '#EF4444' },
  { name: 'Prove with Data', color: '#F59E0B' },
  { name: 'Remediate', color: '#22C55E' },
  { name: 'AI Agents', color: '#3B82F6' },
  { name: 'Compliance Scoring', color: '#3B82F6' },
  { name: 'Risk Prioritization', color: '#A855F7' },
];
const DIAG_TOOLS = ['EDR', 'Email Security', 'IAM', 'Threat Intel', 'XDR'];

function ArchitectureDiagram() {
  return (
    <div className="glass l10-diag">
      <div className="l10-diag-bar">
        <span className="l10-dot" style={{background:'#EF4444'}}/>
        <span className="l10-dot" style={{background:'#F59E0B'}}/>
        <span className="l10-dot" style={{background:'#22C55E'}}/>
        <span style={{ fontSize: 12, color: 'var(--fg3)', marginLeft: 12 }}>Layer 10 Security</span>
      </div>
      <div className="l10-diag-cols">
        <div>
          <div className="l10-diag-eyebrow" style={{ color: 'var(--indigo-500)' }}>Coverage</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DIAG_METRICS.map(m => (
              <div key={m.label} className="l10-diag-pill" style={{ background: 'hsl(239 84% 67% / 0.1)', borderColor: 'hsl(239 84% 67% / 0.3)' }}>
                <span style={{ color: 'hsl(239 84% 67% / 0.8)' }}>{m.label}</span>
                <span style={{ fontWeight: 700, color: 'var(--indigo-500)' }}>{m.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="l10-diag-eyebrow" style={{ textAlign: 'center', color: 'var(--fg1)' }}>Engine</div>
          <div className="l10-diag-engine">
            <div className="l10-diag-engine-head"><Icon name="shield" size={16} style={{ color: 'var(--violet-500)' }} /><span style={{ fontSize: 12, fontWeight: 600 }}>AI Security Engineering</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {DIAG_FEATURES.map(f => (
                <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                  <span className="l10-dot-sm l10-pulse" style={{ background: f.color, flexShrink: 0 }}/>
                  <span style={{ fontSize: 10.5, color: 'var(--fg3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="l10-diag-eyebrow" style={{ color: '#22C55E', textAlign: 'right' }}>Your Stack</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DIAG_TOOLS.map(t => (
              <div key={t} className="l10-diag-pill" style={{ background: 'hsl(142 71% 45% / 0.1)', borderColor: 'hsl(142 71% 45% / 0.3)', justifyContent: 'flex-end' }}>
                <span style={{ color: 'hsl(142 71% 55% / 0.85)' }}>{t}</span>
                <Icon name="server" size={14} style={{ color: 'hsl(142 71% 45% / 0.7)' }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="l10-diag-footer">
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span className="l10-dot-sm" style={{background:'#EF4444'}}/> Identify</span>
        <span style={{color:'var(--fg3)'}}>→</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span className="l10-dot-sm" style={{background:'#F59E0B'}}/> Prove</span>
        <span style={{color:'var(--fg3)'}}>→</span>
        <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span className="l10-dot-sm l10-pulse" style={{background:'#22C55E'}}/> Remediate</span>
      </div>
    </div>
  );
}
window.ArchitectureDiagram = ArchitectureDiagram;
