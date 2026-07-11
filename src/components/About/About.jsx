// ============================================================
// components/About/About.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// The Hero states the thesis ("ships and teaches"); About is
// where that claim gets backed up with specifics — what Daniel
// actually does day to day, and a second photo for visitors who
// scroll past the Hero quickly and want a face to the work.
// ============================================================

import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <motion.div
          className="about-portrait"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }} means this animation plays
          // a single time, the first time the element scrolls
          // into view — not every time the visitor scrolls past
          // it again, which would feel jittery.
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* PHOTO: a second, optional crop for this section —
              place at src/assets/images/daniel-collins-about.jpg.
              If you'd rather reuse one photo site-wide, point
              this at the same file as the Hero image instead. */}
          <img
            src="/src/assets/images/daniel-collins.png"
            alt="Daniel Collins at work"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <span className="section-eyebrow">About</span>
          <h2 className="section-heading">
            One engineer, the full pipeline.
          </h2>

          <p className="about-paragraph">
            I'm a full-stack engineer based in Lagos, working across web
            interfaces, mobile apps, backend services, and the
            infrastructure that runs them. A typical week might mean
            shipping a React feature, extending a Spring Boot API,
            containerizing a service with Docker, and tuning how it runs
            in Kubernetes — all for the same product.
          </p>

          <p className="about-paragraph">
            Alongside building, I teach. I write curriculum and lead
            instruction for engineers earlier in their careers, which
            means every system I build also has to be explainable —
            clear enough that someone else can open the code and
            understand not just what it does, but why it's built that
            way.
          </p>

          <div className="about-focus-list">
            <div className="about-focus-item">
              <span className="about-focus-label">Build</span>
              <p>Web, mobile, and backend systems, shipped end to end.</p>
            </div>
            <div className="about-focus-item">
              <span className="about-focus-label">Teach</span>
              <p>Curriculum and live instruction for engineers in training.</p>
            </div>
            <div className="about-focus-item">
              <span className="about-focus-label">Operate</span>
              <p>Containerized, orchestrated deployments — not just code that runs locally.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
