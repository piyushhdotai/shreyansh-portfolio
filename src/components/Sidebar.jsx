import { profile, links } from '../data.js';
import { pages } from '../pages.js';

const external = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'SpeakEzy', href: links.speakezy },
].filter((l) => l.href);

export default function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <img className="photo" src={profile.photo} alt={`Photo of ${profile.name}`} />
      <p className="nav-title">~ NaViGaTe ~</p>
      <nav className="nav">
        {pages.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={`nav-btn${active === p.id ? ' active' : ''}`}
            aria-current={active === p.id ? 'page' : undefined}
          >
            {p.label}
          </a>
        ))}
        {external.map((l) => (
          <a key={l.label} href={l.href} className="nav-btn" target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
