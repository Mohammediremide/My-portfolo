// ============================================================
// components/Skills/Skills.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// This is the detailed counterpart to the Hero's typed summary —
// where the Hero cycles through the stack one item at a time for
// effect, Skills lays the whole thing out at once, grouped by
// category, for a visitor who wants the full picture.
// ============================================================

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaDocker,
} from 'react-icons/fa';
import { SiSpring, SiKubernetes } from 'react-icons/si';
import { skillCategories } from '../../data/skills.js';
import './Skills.css';

// react-icons components can't be stored as strings in the data
// file directly (a data file should stay free of JSX/components,
// per the comment in skills.js), so this lookup map translates
// the icon name string from the data into the actual component.
const ICON_MAP = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaDocker,
  SiSpring,
  SiKubernetes,
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">002 / Skills</span>
          <h2 className="section-heading">The stack, end to end.</h2>
          <p className="section-subheading">
            From markup to orchestration — every layer a real product
            depends on.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="skills-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="skills-category-label">{category.label}</h3>
              <ul className="skills-list">
                {category.items.map((skill) => {
                  // Look up the actual icon component by the
                  // string name stored in the data file.
                  const Icon = ICON_MAP[skill.icon];
                  return (
                    <li key={skill.name} className="skill-item glass-panel">
                      <Icon className="skill-icon" aria-hidden="true" />
                      <div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
