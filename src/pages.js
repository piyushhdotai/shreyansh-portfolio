import Home from './views/Home.jsx';
import About from './views/About.jsx';
import Education from './views/Education.jsx';
import Projects from './views/Projects.jsx';
import Certifications from './views/Certifications.jsx';
import Skills from './views/Skills.jsx';

export const pages = [
  { id: 'home', label: 'Home', Component: Home },
  { id: 'about', label: 'About Me', Component: About },
  { id: 'education', label: 'Education', Component: Education },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'certifications', label: 'Certificates', Component: Certifications },
  { id: 'skills', label: 'Skills', Component: Skills },
];
