import { useEffect, useState } from 'react';
import { profile } from './data.js';
import Marquee from './components/Marquee.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import { pages } from './pages.js';

const currentPage = () => {
  const id = window.location.hash.replace('#', '');
  return pages.some((p) => p.id === id) ? id : 'home';
};

export default function App() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const onHashChange = () => {
      setPage(currentPage());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const { Component } = pages.find((p) => p.id === page);

  return (
    <div className="page">
      <h1 className="site-title">~*~ {profile.name}'s Homepage ~*~</h1>
      <Marquee />
      <p className="construction"><span>🚧 UNDER CONSTRUCTION SINCE 2025 · PLEASE EXCUSE OUR DUST 🚧</span></p>
      <p className="updated">
        <span className="blink">NEW!</span>&nbsp; Last updated: {profile.lastUpdated}
      </p>

      <div className="frame">
        <Sidebar active={page} />
        <main className="content">
          <Component />
        </main>
      </div>

      <Footer />
    </div>
  );
}
