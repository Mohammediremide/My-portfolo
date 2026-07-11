// ============================================================
// components/BackToTop/BackToTop.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// On a long single-page site, returning to the Hero shouldn't
// require manually scrolling back up. This button stays hidden
// until the visitor has scrolled past a threshold, then offers
// a one-click way back, animated in/out with Framer Motion.
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

// Pixels scrolled before the button appears. A named constant
// instead of a magic number so the threshold is easy to retune.
const SHOW_AFTER_PX = 480;

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Event handler for the click — kept as a named function
  // rather than inline in JSX so its intent ("scroll to top
  // smoothly") is self-documenting at the call site.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
