// Footer.jsx
const FOOTER_LINKS = {
  Product: ['Features', 'Data Protection', 'Architecture', 'Integrations'],
  Company: ['About', 'Contact'],
  Resources: ['Documentation', 'Security'],
};
const SOCIAL = [
  { icon: 'github', label: 'GitHub' },
  { icon: 'linkedin', label: 'LinkedIn' },
  { icon: 'twitter', label: 'Twitter' },
];

function Footer() {
  return (
    <footer className="l10-footer">
      <div className="l10-container">
        <div className="l10-footer-grid">
          <div className="l10-footer-brand">
            <div style={{marginBottom:22}}><Logo /></div>
            <p style={{fontSize:14, color:'var(--fg3)', maxWidth:320, marginBottom:20}}>
              AI Security Engineering platform. Find missing and misconfigured security controls, prove it with live data, and remediate them.
            </p>
            <div className="l10-footer-badge">
              <Icon name="shieldCheck" size={14}/>
              <span>30 Frameworks. One Fix.</span>
            </div>
            <div style={{display:'flex', gap:12, marginTop:22}}>
              {SOCIAL.map(s => (
                <a key={s.label} href="#" className="l10-footer-soc" aria-label={s.label}><Icon name={s.icon} size={18}/></a>
              ))}
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{fontWeight:600, marginBottom:16, fontSize:15}}>{cat}</h4>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
                {links.map(l => <li key={l}><a href="#" className="l10-footer-link">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="l10-footer-bottom">
          <p style={{fontSize:14, color:'var(--fg3)', margin:0}}>© 2026 Layer 10 Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
