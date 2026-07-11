// ============================================================
// components/Loader/Loader.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// A blank white/black flash while fonts and the initial layout
// settle reads as unpolished. This component covers the screen
// with a branded reveal for a short, fixed duration, then
// removes itself — giving the rest of the page time to paint
// underneath it without the visitor seeing that happen.
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

// How long the loader stays visible, in milliseconds. Kept as a
// named constant rather than a magic number buried in the
// effect below, so it's easy to tune later.
const LOADER_DURATION_MS = 1800;

function Loader() {
  // isLoading controls whether the overlay is in the DOM at all.
  // Starting at `true` means visitors always see the reveal on a
  // hard refresh, which is the intended behavior for a "premium"
  // loading moment — this isn't meant to run on client-side route
  // changes (there are none; this is a single-page scroll site).
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout schedules the state flip after the fixed
    // duration. The cleanup function (the return) cancels that
    // timer if the component unmounts early — without it, calling
    // setIsLoading on an unmounted component would warn in the
    // console.
    const timer = setTimeout(() => setIsLoading(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array: run once, on mount, only.

  return (
    // AnimatePresence lets Framer Motion animate a component OUT
    // before removing it from the DOM. Without it, the loader
    // would just vanish instantly when isLoading flips to false.
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          // Exit animation: fade and lift away.
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="loader-mark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            DC
          </motion.div>
          <motion.div
            className="loader-bar-track"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="loader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: 'left' }}
              transition={{ duration: LOADER_DURATION_MS / 1000 - 0.4, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
