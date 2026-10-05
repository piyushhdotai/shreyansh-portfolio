import { certifications, links } from '../data.js';

export default function Certifications() {
  return (
    <>
      <h2 className="welcome">Certificates</h2>
      {certifications.map((c) => (
        <div key={c.name} className="card">
          <h3 className="card-title">🏆 {c.name}</h3>
          <p>
            <b>{c.issuer}</b> <span className="date">· {c.date}</span>
          </p>
          <p>{c.note}</p>
        </div>
      ))}
      <p className="note">
        See the certificates on my{' '}
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
      </p>
    </>
  );
}
