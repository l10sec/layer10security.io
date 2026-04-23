// Architecture.jsx — stacked "CISO → Engine → Integration → Tools" diagram.
const ENGINE_MODULES = [
  { icon: 'barChart', label: 'Compliance Dashboard' },
  { icon: 'brain', label: 'AI Security Agents' },
  { icon: 'map', label: 'Roadmap Simulator' },
  { icon: 'fileCheck', label: '30-Framework Mapper' },
  { icon: 'shieldOff', label: 'Data Protection' },
];
const GATEWAY = [
  { icon: 'network', label: 'Auto-Discovery' },
  { icon: 'radio', label: 'Secure Transport' },
  { icon: 'keyRound', label: 'Encrypted Auth' },
];
const TOOLS = [
  { name: 'Endpoint Detection & Response', tools: 'EDR / Vulnerability Mgmt', icon: 'shield' },
  { name: 'Email Security', tools: 'Gateway / Behavioral AI', icon: 'mail' },
  { name: 'Identity & Access', tools: 'Directory / Governance', icon: 'user' },
  { name: 'Threat Intelligence', tools: 'CTI Platform / IOC Feeds', icon: 'search' },
  { name: 'XDR & Network', tools: 'XDR / Secure Web Gateway', icon: 'more' },
];

function Architecture() {
  return (
    <section id="architecture" className="l10-section">
      <div className="l10-hero-bg grid-pattern" style={{ opacity: 0.1 }}/>
      <div className="l10-container">
        <div className="l10-section-head">
          <div className="eyebrow">Architecture</div>
          <h2 className="l10-section-title">End-to-End <span className="text-gradient">Security Architecture</span></h2>
          <p className="l10-section-sub">From your security team to your security tools — a unified platform with AI at the core.</p>
        </div>
        <div className="glass l10-arch">
          <div style={{ textAlign: 'center' }}>
            <div className="l10-arch-top">
              <Icon name="users" size={22} style={{ color: 'var(--indigo-500)' }}/>
              <span style={{ fontWeight: 700, fontSize: 18 }}>CISO / Security Team</span>
            </div>
          </div>
          <div className="l10-arch-conn"/>
          <div>
            <div className="l10-arch-label"><Icon name="cpu" size={16} style={{color:'var(--violet-500)'}}/><span>LAYER 10 SECURITY</span></div>
            <div className="l10-arch-engine">
              {ENGINE_MODULES.map(m => (
                <div key={m.label} className="l10-arch-mod"><Icon name={m.icon} size={14} style={{color:'var(--violet-500)'}}/><span>{m.label}</span></div>
              ))}
            </div>
          </div>
          <div className="l10-arch-conn"/>
          <div>
            <div className="l10-arch-label"><Icon name="network" size={16} style={{color:'var(--indigo-500)'}}/><span>INTEGRATION LAYER</span></div>
            <div className="l10-arch-gateway">
              {GATEWAY.map(g => (
                <div key={g.label} className="l10-arch-gw"><Icon name={g.icon} size={14} style={{color:'var(--indigo-500)'}}/><span>{g.label}</span></div>
              ))}
            </div>
          </div>
          <div className="l10-arch-conn"/>
          <div>
            <div className="l10-arch-label"><Icon name="server" size={16} style={{color:'#22C55E'}}/><span>SECURITY TOOL INTEGRATIONS</span></div>
            <div className="l10-arch-tools">
              {TOOLS.map(t => (
                <div key={t.name} className="l10-arch-tool">
                  <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
                    <Icon name={t.icon} size={14} style={{color:'#22C55E'}}/>
                    <span style={{fontSize:12, fontWeight:600}}>{t.name}</span>
                  </div>
                  <p style={{fontSize:11, color:'var(--fg3)', margin:0}}>{t.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Architecture = Architecture;
