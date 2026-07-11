// ============================================================
// components/ScrollProgress/ScrollProgress.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// A thin bar at the top of the viewport that fills as the
// visitor scrolls gives a constant sense of "how much is left,"
// useful on a single long-scrolling page like this one where
// there's no pagination to signal progress otherwise.
// ============================================================

import { useState, useEffect } from 'react';
import './ScrollProgress.css';

function ScrollProgress() {
  // The fill percentage (0–100) is real state because it drives
  // a visual value the component renders directly in JSX.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Guard against division by zero on very short pages.
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };

    // { passive: true } tells the browser this listener never
    // calls preventDefault(), letting it optimize scroll
    // performance instead of waiting on the handler.
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        className="scroll-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
