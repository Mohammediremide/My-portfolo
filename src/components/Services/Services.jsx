// ============================================================
// components/Services/Services.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// Translates the skills list into outcomes — not "I know React"
// but "I build web applications." This section answers what a
// visitor can actually hire Daniel to do.
// ============================================================

import { motion } from 'framer-motion';
import {
  FaReact,
  FaMobileAlt,
  FaServer,
  FaDocker,
  FaChalkboardTeacher,
  FaCode,
} from 'react-icons/fa';
import { services } from '../../data/services.js';
import './Services.css';

const ICON_MAP = {
  FaReact,
  FaMobileAlt,
  FaServer,
  FaDocker,
  FaChalkboardTeacher,
  FaCode,
};

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">003 / Services</span>
          <h2 className="section-heading">What I can build for you.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.id}
                className="service-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              >
                <Icon className="service-icon" aria-hidden="true" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
