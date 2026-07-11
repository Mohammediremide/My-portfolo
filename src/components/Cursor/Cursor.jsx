// ============================================================
// components/Cursor/Cursor.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// A subtle glowing dot that follows the pointer reinforces the
// "gold accent" identity established in index.css without
// adding any extra color anywhere else. It's purely decorative,
// so it's built to disable itself gracefully on touch devices
// (where there is no pointer to follow) and to respect
// prefers-reduced-motion.
// ============================================================

import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

function Cursor() {
  // A ref (not state) holds the DOM node directly, because we
  // want to move it via direct style mutation on every
  // mousemove event — going through setState for that would
  // trigger a full React re-render on every pixel of mouse
  // movement, which is unnecessary work for a purely visual
  // effect.
  const dotRef = useRef(null);

  // This IS state, because it controls whether the cursor
  // renders at all — a structural decision the component only
  // needs to make once (on mount), not on every mouse move.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Skip entirely on touch/coarse-pointer devices and for
    // visitors who've asked for reduced motion — the custom
    // cursor is decoration, not function, so it's safe to omit.
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!hasFinePointer || reducedMotion) return;
    setEnabled(true);

    const handleMove = (e) => {
      const dot = dotRef.current;
      if (!dot) return;
      // Direct style writes here, bypassing React's render
      // cycle, are the standard escape hatch for high-frequency
      // events like mousemove where re-rendering would be
      // wasteful.
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener('mousemove', handleMove);
    // Cleanup: remove the listener when the component unmounts
    // so it doesn't keep firing against a dead DOM reference.
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  if (!enabled) return null;

  return <div ref={dotRef} className="cursor-glow" aria-hidden="true" />;
}

export default Cursor;
