// Icon.jsx — tiny Lucide-style wrapper.
// Paths lifted from lucide-static@0.462.0.
const ICONS = {
  arrowRight: 'M5 12h14 M12 5l7 7-7 7',
  shieldCheck: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  brain: 'M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0-4 4 4 4 0 0 0 4 4v2a4 4 0 0 0 8 0v-2a4 4 0 0 0 4-4 4 4 0 0 0-4-4V6a4 4 0 0 0-4-4z',
  activity: 'M22 12h-4l-3 9-6-18-3 9H2',
  network: 'M9 2h6v6H9z M2 16h6v6H2z M16 16h6v6h-6z M5 16v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4 M12 8v2',
  map: 'M1 6l8-4 6 4 8-4v16l-8 4-6-4-8 4z M9 2v16 M15 6v16',
  fileCheck: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 15l2 2 4-4',
  target: 'M12 2a10 10 0 1 0 10 10 M12 6a6 6 0 1 0 6 6 M12 10a2 2 0 1 0 2 2',
  shieldOff: 'M20 13c0 5-8 9-8 9a16.7 16.7 0 0 1-4.1-2.3 M9.6 4.6A3 3 0 0 1 12 4l8 3v6a9.5 9.5 0 0 1-.4 2.7 M2 2l20 20',
  cpu: 'M4 4h16v16H4z M8 8h8v8H8z M4 9h-2 M4 15h-2 M22 9h-2 M22 15h-2 M9 4v-2 M15 4v-2 M9 22v-2 M15 22v-2',
  server: 'M3 4h18v6H3z M3 14h18v6H3z M7 7h.01 M7 17h.01',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8',
  radio: 'M4.9 4.9a10 10 0 0 1 14.2 0 M7.8 7.8a6 6 0 0 1 8.5 0 M10.6 10.6a2 2 0 0 1 2.8 0 M12 22v-6',
  keyRound: 'M21 2l-10 10 M15 5a4 4 0 1 1 4 4 M8.5 15.5a4 4 0 1 0-4-4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  mail: 'M4 4h16v16H4z M22 6l-10 7L2 6',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16 M21 21l-4.3-4.3',
  more: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2 M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2 M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2',
  barChart: 'M3 3v18h18 M7 14l4-4 4 4 5-5',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
  fileSearch: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M11.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M16 18l-2.5-2.5',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M19.4 15a1.65 1.65 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.65 1.65 0 0 0-1.8-.3 1.65 1.65 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.65 1.65 0 0 0-1-1.5 1.65 1.65 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.65 1.65 0 0 0 .3-1.8 1.65 1.65 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.65 1.65 0 0 0 1.5-1 1.65 1.65 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.65 1.65 0 0 0 1.8.3H9a1.65 1.65 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.65 1.65 0 0 0 1 1.5 1.65 1.65 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.65 1.65 0 0 0-.3 1.8V9a1.65 1.65 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.65 1.65 0 0 0-1.5 1z',
  lock: 'M5 11h14v11H5z M8 11V7a4 4 0 1 1 8 0v4',
  calendar: 'M3 4h18v18H3z M3 10h18 M8 2v4 M16 2v4',
  clipboard: 'M9 2h6v4H9z M9 4H5v18h14V4h-4 M9 12l2 2 4-4',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  layers: 'M12 2l10 6-10 6L2 8zM2 14l10 6 10-6 M2 11l10 6 10-6',
  menu: 'M3 6h18 M3 12h18 M3 18h18',
  x: 'M18 6L6 18 M6 6l12 12',
  plug: 'M18 20V10 M6 20V10 M2 10h20 M12 2v3 M8 5h8',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20 M2 12h20 M12 2a15 15 0 0 1 0 20 M12 2a15 15 0 0 0 0 20',
  scan: 'M3 7V5a2 2 0 0 1 2-2h2 M17 3h2a2 2 0 0 1 2 2v2 M21 17v2a2 2 0 0 1-2 2h-2 M7 21H5a2 2 0 0 1-2-2v-2 M7 12h10',
  github: 'M9 19c-5 1.5-5-2.5-7-3 M15 22v-4a3.4 3.4 0 0 0-1-2.6c3 0 6-2 6-5.5a5 5 0 0 0-1-3.5 5 5 0 0 0-.1-3.5S17 3 15 4.3a13 13 0 0 0-6 0C7 3 5.6 2.9 5.6 2.9a5 5 0 0 0-.1 3.5 5 5 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5a3.4 3.4 0 0 0-1 2.6V22',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6 M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4',
  twitter: 'M22 4a12 12 0 0 1-3.5 1.7A4 4 0 0 0 12 9v1A10 10 0 0 1 3 5s-4 9 5 13a11 11 0 0 1-7 2c9 5 20 0 20-11.5a8 8 0 0 0-.2-1.8A8 8 0 0 0 22 4z'
};

function Icon({ name, size = 20, stroke = 1.8, className = '', style = {} }) {
  const d = ICONS[name];
  if (!d) return null;
  const parts = d.split(' M');
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}
         fill="none" stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round" style={style}>
      {parts.map((p, i) => <path key={i} d={i === 0 ? p : 'M' + p} />)}
    </svg>
  );
}

window.Icon = Icon;
