// Security.jsx — data protection section.
const TRUST_POINTS = [
  { icon: 'eye', title: 'Automatic Detection & Redaction', desc: 'IP addresses, hostnames, organization names, email addresses, and custom terms are identified and replaced with safe placeholders before any AI interaction.' },
  { icon: 'shieldCheck', title: 'Enterprise-Grade Protection', desc: 'Built on FedRAMP-authorized infrastructure with 150+ built-in data detectors. Your data stays within your trust boundary — always.' },
  { icon: 'fileSearch', title: 'Full Audit Trail', desc: 'Every detected sensitive data type and volume is logged. Know exactly what data flows through your AI pipeline — valuable for compliance reporting.' },
  { icon: 'lock', title: 'All AI Paths Covered', desc: 'Security advisor conversations, executive reports, roadmap narratives — every interaction with the AI model goes through data protection screening.' },
  { icon: 'settings', title: 'Configurable Per Client', desc: 'Toggle data protection on or off without code changes. Enterprise clients add custom sensitive term lists specific to their organization.' },
  { icon: 'barChart', title: 'Selective Redaction, Not Blocking', desc: 'Unlike tools that block prompts containing sensitive data, Layer 10 strips the sensitive tokens but preserves analytical context — the AI can still reason about your environment.' },
];

function Security() {
  return (
    <section id="security" className="l10-section" style={{ background: 'hsl(240 10% 15% / 0.2)' }}>
      <div className="l10-container">
        <div className="l10-section-head">
          <div className="eyebrow">Data Protection</div>
          <h2 className="l10-section-title">Your Sensitive Data <span className="text-gradient">Never Reaches the AI</span></h2>
          <p className="l10-section-sub">Get intelligent security guidance without exposing your environment. Sensitive information is automatically detected and redacted before every AI interaction.</p>
        </div>
        <div className="glass l10-sdp-flow">
          <div className="l10-sdp-step">
            <div className="l10-sdp-num" style={{ background: 'hsl(239 84% 67% / 0.2)', color: 'var(--indigo-500)' }}>1</div>
            <h4>Your Prompt</h4>
            <p>"The host at 10.128.0.4 running on acme-prod-db has 3 critical CVEs"</p>
          </div>
          <div className="l10-sdp-arrow">
            <div className="l10-sdp-line"/>
            <span className="l10-sdp-badge">SDP Redaction</span>
            <div className="l10-sdp-line"/>
          </div>
          <div className="l10-sdp-step">
            <div className="l10-sdp-num" style={{ background: 'hsl(263 70% 58% / 0.2)', color: 'var(--violet-500)' }}>2</div>
            <h4>What the AI Sees</h4>
            <p>"The host at <span style={{ color: 'var(--indigo-500)', fontWeight: 500 }}>[IP_ADDRESS]</span> running on <span style={{ color: 'var(--indigo-500)', fontWeight: 500 }}>[HOSTNAME]</span> has 3 critical CVEs"</p>
          </div>
        </div>
        <div className="l10-features-grid">
          {TRUST_POINTS.map(p => (
            <div key={p.title} className="glass l10-feat">
              <div className="l10-feat-ico" style={{ width: 40, height: 40 }}><Icon name={p.icon} size={20} style={{ color: 'var(--indigo-500)' }}/></div>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--fg3)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              <div className="l10-feat-underline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Security = Security;
