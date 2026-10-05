import { profile, links, funFacts } from '../data.js';
import SocialButtons from '../components/SocialButtons.jsx';

export default function About() {
  return (
    <>
      <h2 className="welcome">About Me</h2>
      <p className="bio">
        Hi, I&apos;m <b>{profile.firstName}</b>! I&apos;m a B.Tech Computer Science (AI) student at
        Galgotias College of Engineering and Technology, based in {profile.location}.
      </p>
      <p className="bio">
        I love building things for the web with HTML, CSS and JavaScript, and I work with Python
        and Django on the backend. These days I&apos;m especially into Generative AI. I recently
        finished the AWS Academy Generative AI Foundations training, and I&apos;m using what I
        learn in my projects, like{' '}
        <a href={links.speakezy} target="_blank" rel="noreferrer">SpeakEzy</a>, a language
        learning app with an AI coach.
      </p>
      <p className="bio">
        I also keep sharpening my problem solving with Data Structures &amp; Algorithms. When I&apos;m
        not coding, I&apos;m busy being a boyfriend in a fully heterosexual relationship (Dec 2025 -
        Present). VCs love me. They just don&apos;t know it yet.
      </p>

      <h3 className="section">★ Fun Facts ★</h3>
      <ul className="list">
        {funFacts.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <h3 className="section">☎ Get In Touch ☎</h3>
      <SocialButtons />
    </>
  );
}
