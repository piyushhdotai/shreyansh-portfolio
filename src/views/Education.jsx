import { education } from '../data.js';

export default function Education() {
  return (
    <>
      <h2 className="welcome">Education</h2>
      {education.map((e) => (
        <div key={e.school} className="card">
          <h3 className="card-title">
            <a href={e.url} target="_blank" rel="noreferrer">{e.school}</a>
          </h3>
          <p>{e.degree}</p>
          <p className="date">{e.period}</p>
          {e.note && <p className="tagline">{e.note}</p>}
        </div>
      ))}
    </>
  );
}
