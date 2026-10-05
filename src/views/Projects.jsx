import { projects, links } from '../data.js';

export default function Projects() {
  return (
    <>
      <h2 className="welcome">Projects</h2>
      {projects.map((p) => (
        <div key={p.name} className="card">
          <h3 className="card-title">
            {p.name} <span className="kind">[{p.kind}]</span>
          </h3>
          <p className="tagline">&quot;{p.tagline}&quot;</p>
          <p>{p.description}</p>
          <ul className="list">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <p className="tags">
            {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
          </p>
          <p className="card-links">
            <a href={p.url} target="_blank" rel="noreferrer">» Live demo</a>
            <a href={p.repo} target="_blank" rel="noreferrer">» Source code</a>
          </p>
        </div>
      ))}
      <p className="note">
        More coming soon! Follow along on{' '}
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>.
      </p>
    </>
  );
}
