// ============================================================
// components/Experience/Experience.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// Projects show what Daniel has built; Experience shows the
// context he built it in — roles, time frames, and what each
// position actually involved. Rendered as a vertical timeline
// since the data is genuinely chronological (unlike skills,
// where ordering doesn't carry meaning).
// ============================================================

import { motion } from 'framer-motion';
import { experience } from '../../data/experience.js';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">005 / Experience</span>
          <h2 className="section-heading">Where the work happened.</h2>
        </div>

        <ol className="experience-timeline">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-marker" aria-hidden="true" />
              <div className="experience-content">
                <span className="experience-period">{item.period}</span>
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-company">
                  {item.company} · {item.location}
                </span>
                <p className="experience-description">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
