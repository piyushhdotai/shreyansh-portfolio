import { links } from '../data.js';

const buttons = [
  { key: 'github', label: '<> GitHub', className: 'b-github', href: links.github },
  { key: 'linkedin', label: 'LinkedIn', className: 'b-linkedin', href: links.linkedin },
  { key: 'speakezy', label: 'SpeakEzy: try it!', className: 'b-speakezy', href: links.speakezy },
  { key: 'email', label: '✉ E-mail me', className: 'b-email', href: links.email && `mailto:${links.email}` },
].filter((b) => b.href);

export default function SocialButtons() {
  return (
    <div className="badges">
      {buttons.map((b) => (
        <a
          key={b.key}
          href={b.href}
          className={`badge ${b.className}`}
          target={b.key === 'email' ? undefined : '_blank'}
          rel="noreferrer"
        >
          {b.label}
        </a>
      ))}
    </div>
  );
}
