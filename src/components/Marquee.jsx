import { marquee } from '../data.js';

export default function Marquee() {
  const text = marquee.map((m) => `★ ${m} `).join('') + '★';
  return (
    <div className="marquee" aria-label={marquee.join('. ')}>
      <div className="marquee-track" aria-hidden="true">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
