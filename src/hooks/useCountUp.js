// ============================================================
// hooks/useCountUp.js
// ------------------------------------------------------------
// WHY THIS HOOK EXISTS:
// The Stats section needs several numbers to count up from 0
// once they scroll into view. That "animate a number over time"
// logic is reusable and has nothing to do with markup, which is
// exactly what a custom hook is for: extracting stateful logic
// out of a component so it can be reused (here, once per stat
// card) without copy-pasting the same effect four times.
// ============================================================

import { useState, useEffect, useRef } from 'react';

// `target` is the final number to count up to. `shouldStart`
// lets the calling component control WHEN the animation begins
// (in Stats, that's "once this card has scrolled into view") —
// the hook itself has no opinion on scroll position.
export function useCountUp(target, shouldStart, duration = 1500) {
  const [value, setValue] = useState(0);

  // Tracks whether the animation has already run, so re-renders
  // (e.g. shouldStart flickering) don't restart it from zero.
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    // requestAnimationFrame drives the count-up instead of
    // setInterval, because it syncs to the browser's repaint
    // cycle — smoother and automatically paused when the tab
    // isn't visible, unlike a fixed-interval timer.
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — starts fast, settles gently rather than
      // ticking at a constant linear rate.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target, duration]);

  return value;
}
