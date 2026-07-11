// ============================================================
// components/Stats/Stats.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// Numbers are faster to scan than prose. This section pulls
// from the shared statHighlights data and renders each one as a
// counter that animates up once it scrolls into view, using the
// useCountUp hook to keep the animation logic out of the markup.
// ============================================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statHighlights } from '../../data/skills.js';
import { useCountUp } from '../../hooks/useCountUp.js';
import './Stats.css';

// A single stat card is broken into its own inner component
// (rather than inlined in a .map()) because it needs its own
// ref and its own useInView call — each card scrolls into view
// at a different moment, so the "has this card been seen yet"
// state can't be shared across all four.
function StatCard({ value, suffix, label }) {
  const ref = useRef(null);
  // useInView watches the ref'd element and returns true once
  // it's entered the viewport. `once: true` keeps it from
  // flipping back to false if the visitor scrolls away.
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useCountUp(value, isInView);

  return (
    <div ref={ref} className="stat-card glass-panel">
      <span className="stat-value">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container stats-grid">
        {statHighlights.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // A small staggered delay per card index gives the
            // grid a sequential reveal instead of all four
            // popping in simultaneously.
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
