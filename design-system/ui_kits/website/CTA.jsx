// CTA.jsx
function CTA() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const submit = e => { e.preventDefault(); if (email) { setSubmitted(true); setTimeout(() => { setSubmitted(false); setEmail(''); }, 3000); } };
  return (
    <section id="demo" className="l10-section l10-cta">
      <div className="l10-cta-blob"/>
      <div className="l10-container" style={{position:'relative', zIndex:1, maxWidth: 780, textAlign:'center'}}>
        <h2 className="l10-section-title">See Your Security Roadmap in Action</h2>
        <p className="l10-section-sub" style={{maxWidth:560, margin:'0 auto 40px'}}>
          Book a personalized demo to see how Layer 10 finds your missing controls, proves it with live data, and remediates them across 30 frameworks.
        </p>
        <form onSubmit={submit} style={{display:'flex', gap:12, maxWidth:480, margin:'0 auto', flexWrap:'wrap'}}>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your work email" required
                 style={{flex:1, minWidth:200, height:48, padding:'0 16px', borderRadius:10, background:'var(--bg2)', border:'1px solid var(--bg3)', color:'var(--fg1)', fontSize:15, fontFamily:'var(--font-sans)'}}/>
          <button className="btn btn-hero" type="submit">
            {submitted ? 'Thanks — we\'ll be in touch' : 'Request a Demo'}
            {!submitted && <Icon name="arrowRight" size={16}/>}
          </button>
        </form>
      </div>
    </section>
  );
}
window.CTA = CTA;
