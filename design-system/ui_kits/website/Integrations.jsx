// Integrations.jsx
const INTEGRATION_CATEGORIES = [
  { icon: 'shield', title: 'Endpoint Detection & Response', tools: ['EDR Platforms', 'Vulnerability Scanners'], c: 'primary' },
  { icon: 'users', title: 'Identity & Access Management', tools: ['Directory Services', 'Identity Governance'], c: 'secondary' },
  { icon: 'mail', title: 'Email Security', tools: ['Email Gateways', 'Behavioral AI Detection'], c: 'accent' },
  { icon: 'brain', title: 'Threat Intelligence', tools: ['Threat Intel Platforms', 'IOC Feeds'], c: 'primary' },
  { icon: 'scan', title: 'Extended Detection & Response', tools: ['XDR Platforms', 'SIEM Solutions'], c: 'secondary' },
  { icon: 'globe', title: 'Network Security', tools: ['Secure Web Gateways', 'ZTNA'], c: 'accent' },
  { icon: 'plug', title: 'Any Security Tool', tools: ['Connect any security tool via our open integration protocol'], c: 'primary' },
];
const CAT_COLOR = {
  primary: { bg: 'hsl(239 84% 67% / 0.1)', fg: 'var(--indigo-500)', br: 'hsl(239 84% 67% / 0.2)' },
  secondary: { bg: 'hsl(263 70% 58% / 0.1)', fg: 'var(--violet-500)', br: 'hsl(263 70% 58% / 0.2)' },
  accent: { bg: 'hsl(172 66% 50% / 0.1)', fg: 'var(--teal-400)', br: 'hsl(172 66% 50% / 0.2)' },
};

function Integrations() {
  return (
    <section id="integrations" className="l10-section" style={{ background: 'hsl(240 10% 15% / 0.2)' }}>
      <div className="l10-container">
        <div className="l10-section-head">
          <div className="eyebrow">Integrations</div>
          <h2 className="l10-section-title">Connect Your <span className="text-gradient">Security Stack</span></h2>
          <p className="l10-section-sub">Live telemetry from your security tools. One integration layer, every domain, automatic discovery.</p>
        </div>
        <div className="l10-integrations-grid">
          {INTEGRATION_CATEGORIES.map(cat => {
            const cc = CAT_COLOR[cat.c];
            return (
              <div key={cat.title} className="glass l10-feat" style={{padding:22}}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:14}}>
                  <div style={{width:40,height:40,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:cc.bg,border:`1px solid ${cc.br}`,color:cc.fg}}>
                    <Icon name={cat.icon} size={20}/>
                  </div>
                  <h3 style={{fontSize:14, fontWeight:700, margin:0}}>{cat.title}</h3>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:8}}>
                  {cat.tools.map(t => (
                    <div key={t} style={{display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--fg3)'}}>
                      <span style={{width:4, height:4, borderRadius:999, background:'var(--fg3)'}}/>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Integrations = Integrations;
