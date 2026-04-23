// Challenge.jsx — the manifesto.
function Challenge() {
  return (
    <section className="l10-challenge">
      <div className="l10-hero-bg grid-pattern" style={{ opacity: 0.2 }}/>
      <div className="l10-container" style={{ maxWidth: 780, position: 'relative' }}>
        <p className="l10-challenge-body">
          There are two problems in compliance: knowing your gaps, and closing them. The industry automated the first — evidence collection, audit reports, continuous monitoring. The second is still manual. Spreadsheets, tickets, quarterly consultant check-ins.
        </p>
        <div className="l10-challenge-pull">
          <p style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
            GRC platforms are compliance <em>reporters</em>.{' '}
            <span className="text-gradient">We are compliance <em>engineers</em>.</span>
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg3)', marginTop: 8, marginBottom: 0 }}>They generate the audit artifact. We generate the fix.</p>
        </div>
        <p className="l10-challenge-body">
          Automated evidence collection was the last decade's innovation. Automated remediation is this decade's. We don't document your gaps — we eliminate them.
        </p>
        <p className="l10-challenge-closer">
          They prove you're compliant. <span className="text-gradient">We make you compliant.</span>
        </p>
      </div>
    </section>
  );
}
window.Challenge = Challenge;
