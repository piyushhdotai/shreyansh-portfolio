// All site content lives here — edit this file to update the portfolio.
import photo from '../images/WhatsApp Image 2026-10-06 at 12.40.57 AM.jpeg';

export const profile = {
  name: 'Shreyansh Singh',
  firstName: 'Shreyansh',
  photo,
  headline:
    '72 followers | B.Tech CS (AI) | Generative AI (AWS certified, did I mention?) | HTML • CSS • JavaScript | Python • Django | Solved Two Sum | Boyfriend (Heterosexual Relationship) | VCs love me | DM for work',
  location: 'Noida, Uttar Pradesh, India',
  lastUpdated: 'October 6, 2026',
};

// Leave a link empty ('') to hide its button everywhere on the site.
export const links = {
  github: 'https://github.com/shreyanshsingh1503',
  linkedin: 'https://www.linkedin.com/in/shreyansh-singh-022b78392/',
  linkedinPosts: 'https://www.linkedin.com/in/shreyansh-singh-022b78392/recent-activity/all/',
  speakezy: 'https://shreyanshsingh1503.github.io',
  email: '', // e.g. 'you@example.com'
};

export const stats = [
  { value: '72', label: 'followers on LinkedIn' },
  { value: '2', label: 'certificates (framed)' },
  { value: '1', label: 'girlfriend (verified)' },
  { value: '∞', label: 'cups of chai' },
];

export const marquee = [
  "Welcome to Shreyansh's homepage!",
  'VCs please stop DMing me',
  'Now raising a Series A for SpeakEzy (pre-revenue, pre-users)',
  'Just completed AWS Academy Generative AI Foundations (yes, again, I will keep mentioning it)',
  'Relationship status: Heterosexual',
  'Best viewed in Internet Explorer 6 at 1024x768',
];

export const work = [
  {
    org: 'Heterosexual Relationship',
    role: 'Boyfriend',
    period: 'Dec 2025 - Present',
  },
  {
    org: 'SpeakEzy',
    url: links.speakezy,
    role: 'Founder, CEO, CTO and only user',
    period: 'Mar 2026 - Present',
  },
  {
    org: 'LinkedIn',
    url: links.linkedin,
    role: 'Professional Certificate Poster',
    period: 'Dec 2025 - Present',
  },
  {
    org: 'Galgotias College of Engineering and Technology',
    url: 'https://www.galgotiacollege.edu/',
    role: 'B.Tech AI student (attendance: 75.01%)',
    period: '2025 - Present',
  },
];

export const writing = [
  { title: "I'm Happy To Share That I'm Happy To Share", where: 'LinkedIn' },
  { title: 'What Two Sum Taught Me About B2B Sales', where: 'LinkedIn' },
  { title: 'My Girlfriend Is My Biggest Investor (Emotionally)', where: 'LinkedIn' },
  { title: '5 Things the AWS Academy Badge Taught Me About Leadership', where: 'Essay' },
];

export const testimonials = [
  { quote: "He's my boyfriend.", by: 'His girlfriend' },
  { quote: 'Who?', by: 'Every VC he DMed' },
  { quote: 'Please stop posting certificates.', by: 'The LinkedIn algorithm' },
  { quote: 'Bhai mera certificate bhi post kar de.', by: 'Classmate' },
];

export const education = [
  {
    school: 'Galgotias College of Engineering and Technology',
    url: 'https://www.galgotiacollege.edu/',
    degree: 'Bachelor of Technology — B.Tech, Artificial Intelligence',
    period: '2025 - Present',
    note: 'Major: Artificial Intelligence. Minor: Reaching class before attendance is taken.',
  },
];

export const projects = [
  {
    name: 'SpeakEzy',
    tagline: 'Learn languages naturally',
    kind: 'Web App · Pre-seed',
    url: links.speakezy,
    repo: 'https://github.com/shreyanshsingh1503/shreyanshsingh1503.github.io',
    description:
      'A language learning web app that brings quizzes, real-life simulations, interview practice and AI coaching together in one place. Free to learn, no signup needed to start a quiz. Valuation: priceless.',
    features: [
      'MCQ quizzes with instant feedback and streak tracking',
      'Real-life simulations: practice in a café, airport, job setting or market with an AI native speaker',
      'Confidence tracker for grammar, vocabulary and fluency',
      'AI interview practice with a graded report',
      'Supports 6 languages* (*Spanish. The other 5 are Coming Soon™)',
      'Light and dark themes, because he is a professional',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Generative AI', 'Vibes'],
  },
];

export const certifications = [
  {
    name: 'Generative AI Foundations',
    issuer: 'AWS Academy',
    date: '2026',
    note: 'Completed the AWS Academy Generative AI Foundations training. Can now say "LLM" in meetings with full confidence.',
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Dec 22, 2025',
    note: 'Officially qualified to tell you that your password123 is weak.',
  },
  {
    name: 'Certified Boyfriend',
    issuer: 'Heterosexual Relationship',
    date: 'Dec 2025 - Present',
    note: 'Status: active. Renews daily, subject to replying on time.',
  },
];

export const skills = [
  { group: 'Web Development', items: ['HTML', 'CSS', 'JavaScript'] },
  { group: 'Backend', items: ['Python', 'Django'] },
  { group: 'AI', items: ['Generative AI', 'Opening ChatGPT in a new tab'] },
  { group: 'CS Fundamentals', items: ['Data Structures & Algorithms', 'Two Sum (expert)'] },
  { group: 'Soft Skills', items: ['Being a Boyfriend', 'Posting certificates', 'Replying "noted" professionally'] },
  { group: 'Keyboard', items: ['Ctrl+C', 'Ctrl+V', 'Ctrl+Z (frequently)'] },
];

export const funFacts = [
  '💘 Relationship status: Heterosexual (Boyfriend, Dec 2025 - Present)',
  '🧠 Has solved Two Sum. Multiple times. Same solution.',
  '🤖 Generative AI expert (has the AWS badge, did you see the AWS badge?)',
  '☕ Runs on chai and Stack Overflow',
  '💼 VCs love me (citation needed)',
  '📍 Based in Noida, accepting remote work from Silicon Valley',
];
