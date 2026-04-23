// UseCases.jsx
const USE_CASES = [
  { n: '01', icon: 'calendar', title: 'Roadmap Simulation', desc: "Generate a risk-prioritized roadmap, then iterate through conversation. Ask 'what if we delay endpoint controls to Q3?' and see the impact on capability coverage and compliance — before committing.", tags: ['What-If Scenarios','Capability Impact','Versioned Drafts'] },
  { n: '02', icon: 'clipboard', title: 'Compliance Audit Preparation', desc: 'Instantly see your readiness across 30 compliance frameworks. Export evidence packages showing which requirements are satisfied by your current controls.', tags: ['30 Frameworks','Gap Analysis','Evidence Export'] },
  { n: '03', icon: 'message', title: 'Live Security Posture', desc: 'Ask the AI agent about your vulnerability counts, email threats, or identity risks — it queries your actual security tools in real time and attributes findings to specific controls.', tags: ['Real-Time Queries','AI Agent','Live Telemetry'] },
  { n: '04', icon: 'layers', title: 'Automated Remediation', desc: 'AI agents propose specific fixes for each missing or misconfigured control. You review, approve, and the agent executes through your existing security tools. Every action creates an audit trail.', tags: ['Agent-Driven','Human-Approved','Audit Trail'] },
];

function UseCases() {
  return (
    <section id="use-cases" className="l10-section">
      <div className="l10-hero-bg grid-pattern" style={{ opacity: 0.15 }}/>
      <div className="l10-container">
        <div className="l10-section-head">
          <div className="eyebrow">Use Cases</div>
          <h2 className="l10-section-title">Built for <span className="text-gradient">Security Leaders</span></h2>
          <p className="l10-section-sub">From gap identification to verified remediation — Layer 10 powers data-driven compliance engineering.</p>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:24}}>
          {USE_CASES.map(u => (
            <div key={u.n} className="glass l10-usecase">
              <span className="l10-usecase-num">{u.n}</span>
              <div className="l10-usecase-ico"><Icon name={u.icon} size={30} style={{color:'var(--indigo-500)'}}/></div>
              <div style={{flex:1}}>
                <h3 style={{fontSize:20, fontWeight:700, margin:'0 0 8px'}}>{u.title}</h3>
                <p style={{fontSize:15, color:'var(--fg3)', lineHeight:1.6, margin:0}}>{u.desc}</p>
              </div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                {u.tags.map(t => <span key={t} className="l10-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.UseCases = UseCases;
