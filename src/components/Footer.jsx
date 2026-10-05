import { links, profile } from '../data.js';
import VisitorCounter from './VisitorCounter.jsx';

export default function Footer() {
  const footerLinks = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'SpeakEzy', href: links.speakezy },
    { label: 'E-mail', href: links.email && `mailto:${links.email}` },
  ].filter((l) => l.href);

  return (
    <footer className="footer">
      <p>
        You are visitor # <VisitorCounter />
      </p>
      <p className="footer-links">
        {footerLinks.map((l) => (
          <span key={l.label}>
            <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            <span className="sep">|</span>
          </span>
        ))}
        <a className="guestbook" href={links.linkedin} target="_blank" rel="noreferrer">
          Sign my Guestbook!
        </a>
      </p>
      <p className="copyright">
        © 2026 {profile.name} · No VCs were harmed in the making of this website
      </p>
    </footer>
  );
}
