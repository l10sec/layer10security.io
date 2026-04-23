// Navigation.jsx — fixed top nav, glass on scroll.
const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Data Protection', href: '#security' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Use Cases', href: '#use-cases' },
];

function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = href => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };
  return (
    <header className={`l10-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="l10-nav-inner">
        <Logo />
        <nav className="l10-nav-links">
          {NAV_ITEMS.map(n => (
            <button key={n.label} onClick={() => go(n.href)} className="l10-nav-link">{n.label}</button>
          ))}
        </nav>
        <div className="l10-nav-cta">
          <button className="btn btn-hero" style={{ height: 38, padding: '0 18px', fontSize: 14 }} onClick={() => go('#demo')}>Request Demo</button>
        </div>
        <button className="l10-nav-menu" onClick={() => setOpen(!open)}><Icon name={open ? 'x' : 'menu'} size={22} /></button>
      </div>
      {open && (
        <div className="l10-nav-mobile glass">
          {NAV_ITEMS.map(n => <button key={n.label} onClick={() => go(n.href)} className="l10-nav-link">{n.label}</button>)}
          <button className="btn btn-hero" onClick={() => go('#demo')}>Request Demo</button>
        </div>
      )}
    </header>
  );
}
window.Navigation = Navigation;
