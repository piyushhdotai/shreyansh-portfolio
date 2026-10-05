import { useEffect, useState } from 'react';

const BASE = 1503;
const KEY = 'visits';

// Just for the retro look: counts this browser's visits on top of a base number.
export default function VisitorCounter() {
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    try {
      const visits = Number(localStorage.getItem(KEY) || 0) + 1;
      localStorage.setItem(KEY, String(visits));
      setCount(BASE + visits);
    } catch {
      // storage blocked — keep the base number
    }
  }, []);

  return <span className="counter">{String(count).padStart(7, '0')}</span>;
}
