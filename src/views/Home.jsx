import { profile, stats, work, writing, testimonials, links } from '../data.js';
import SocialButtons from '../components/SocialButtons.jsx';

export default function Home() {
  return (
    <>
      <h2 className="welcome">Hi!! Welcome!</h2>
      <p className="bio">{profile.headline}</p>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <h3 className="section">★ Where I Work ★</h3>
      <ul className="list">
        {work.map((w) => (
          <li key={w.org}>
            {w.url ? (
              <a href={w.url} target="_blank" rel="noreferrer">{w.org}</a>
            ) : (
              <span className="org">{w.org}</span>
            )}
            : {w.role}
            <span className="date"> · {w.period}</span>
          </li>
        ))}
      </ul>

      <h3 className="section">✎ Writing Samples ✎</h3>
      <ul className="list">
        {writing.map((w) => (
          <li key={w.title}>
            <a href={links.linkedinPosts} target="_blank" rel="noreferrer">{w.title}</a> ({w.where})
          </li>
        ))}
      </ul>

      <h3 className="section">❝ What People Say ❞</h3>
      <ul className="testimonials">
        {testimonials.map((t) => (
          <li key={t.by}>
            &quot;{t.quote}&quot; <span className="date">— {t.by}</span>
          </li>
        ))}
      </ul>

      <h3 className="section">☎ Get In Touch ☎</h3>
      <SocialButtons />
    </>
  );
}
