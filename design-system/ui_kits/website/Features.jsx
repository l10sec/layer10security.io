// Features.jsx
const FEATURES = [
  { icon: 'brain', title: 'AI Security Agents', desc: 'Intelligent agents that query your security tools, identify missing or misconfigured controls, and propose remediation steps — all grounded in live data, not assumptions.', hl: ['Evidence-based', 'Per-control intelligence', 'Human-approved remediation'] },
  { icon: 'network', title: 'Security Stack Integration', desc: 'Connect 72+ security tools across EDR, email security, identity, and threat intelligence. One integration layer with automatic tool discovery and control attribution.', hl: [] },
  { icon: 'fileCheck', title: 'Compliance Mapping', desc: 'One security control maps to requirements across 30 compliance frameworks simultaneously. Fix one gap, satisfy HIPAA, SOC 2, ISO 27001, CMMC, and PCI-DSS at once.', hl: [] },
  { icon: 'map', title: 'Roadmap Simulator', desc: 'Generate and iterate on security roadmaps through conversation. Run what-if scenarios — adjust budgets, shift timelines, reprioritize controls — and see the capability impact before you commit.', hl: ['What-if simulations', 'Capability impact analysis', 'Versioned drafts'] },
  { icon: 'activity', title: 'Live Control Intelligence', desc: "Every security control shows real-time commentary backed by live data from your tools. Not just 'In Progress' — but exactly what's missing, what's misconfigured, and what to fix.", hl: ['Per-control evidence', 'Data source attribution', 'Actionable next steps'] },
  { icon: 'target', title: 'Risk-Based Prioritization', desc: 'Weight controls by business impact — data sensitivity, regulatory exposure, threat landscape. Focus resources where they reduce the most risk.', hl: [] },
  { icon: 'shieldOff', title: 'Sensitive Data Protection', desc: 'Your sensitive data never reaches the AI. Automatically detects and redacts IP addresses, hostnames, organization names, email addresses, and custom terms before every AI interaction.', hl: ['150+ built-in detectors', 'Full audit trail', 'Enterprise-grade encryption'] },
];

function Features() {
  return (
    <section id="features" className="l10-section">
      <div className="l10-blob l10-blob-a" />
      <div className="l10-blob l10-blob-b" />
      <div className="l10-container">
        <div className="l10-section-head">
          <div className="eyebrow">Capabilities</div>
          <h2 className="l10-section-title">Purpose-Built for <span className="text-gradient">Security Leaders</span></h2>
          <p className="l10-section-sub">Every feature designed to help CISOs track, prioritize, and improve their security posture.</p>
        </div>
        <div className="l10-features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="glass l10-feat">
              <div className="l10-feat-ico"><Icon name={f.icon} size={24} style={{ color: 'var(--indigo-500)' }}/></div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--fg3)', lineHeight: 1.6, margin: '0 0 16px' }}>{f.desc}</p>
              {f.hl.length > 0 && (
                <ul className="l10-feat-hl">
                  {f.hl.map(h => <li key={h}><span className="l10-feat-hl-dot"/>{h}</li>)}
                </ul>
              )}
              <div className="l10-feat-underline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
