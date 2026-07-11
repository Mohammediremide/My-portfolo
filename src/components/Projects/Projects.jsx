// ============================================================
// components/Projects/Projects.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// The proof behind every claim made in Hero/About/Skills. This
// section owns one piece of local state — the active filter —
// because filtering only affects what's rendered inside THIS
// section; no other part of the page needs to know which filter
// is selected.
// ============================================================

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, projectFilters } from '../../data/projects.js';
import './Projects.css';

function Projects() {
  // The currently selected filter tag. Starts on 'All' so every
  // project is visible on first render.
  const [activeFilter, setActiveFilter] = useState('All');

  // useMemo recalculates the filtered list only when
  // `activeFilter` changes, rather than on every re-render of
  // this component (e.g. from an unrelated state update) —
  // useful here since .filter() walks the whole projects array.
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">004 / Projects</span>
          <h2 className="section-heading">Selected work.</h2>
        </div>

        <div className="projects-filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`projects-filter-btn ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {/* AnimatePresence + a key tied to project.id lets cards
              animate out when a filter removes them and animate in
              when a filter reveals them, instead of just snapping. */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="project-card glass-panel"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
