// ============================================================
// components/Hero/Hero.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// The Hero is the first thing every visitor sees, so it carries
// the page's thesis: Daniel builds across the full stack, not
// just one layer of it. The signature element is a typed
// "build log" — Typed.js cycling through the actual stack
// (HTML/CSS → JavaScript → Java → React → Spring Boot →
// React Native → Docker → Kubernetes) inside a terminal-style
// panel, echoing how a real build pipeline reports each stage.
// ============================================================

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
} from 'react-icons/fa';
import { stackBuildLog } from '../../data/skills.js';
import './Hero.css';

function Hero() {
  // A ref to the DOM node Typed.js will type into. Typed.js
  // manipulates the DOM directly (outside React's render cycle),
  // which is exactly the kind of imperative, third-party-library
  // integration refs are meant for.
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Typed.js is instantiated once, on mount, against the DOM
    // node the ref points to. Each string in stackBuildLog is
    // typed out, paused on, then erased before moving to the
    // next — producing the "compiling each layer of the stack"
    // effect.
    const typed = new Typed(typedElementRef.current, {
      strings: stackBuildLog.map((tech) => `Building with ${tech}_`),
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1400,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
    });

    // Cleanup: Typed.js attaches its own DOM nodes and interval
    // timers. Without calling .destroy() here, navigating away
    // (or React 19/StrictMode's double-invoke in dev) would leave
    // an orphaned instance still typing into a removed element.
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow">Full-Stack Engineer · Lagos</span>

          <h1 className="hero-heading">
            Daniel Collins builds software that
            <span className="hero-heading-accent"> ships</span> and code that
            <span className="hero-heading-accent"> teaches</span>.
          </h1>

          <p className="hero-description">
            I design and ship production systems across the web, mobile, and
            backend then turn that same work into curriculum for the next
            engineer learning to do it. From interface to infrastructure, one
            stack, end to end.
          </p>

          {/* The terminal-style panel Typed.js types into. The
              trailing static text node before it gives screen
              readers something stable to announce, since the
              typed content changes continuously and isn't
              meaningful to read character-by-character. */}
          <div className="hero-terminal" aria-hidden="true">
            <div className="hero-terminal-bar">
              <span className="hero-terminal-dot dot-red" />
              <span className="hero-terminal-dot dot-yellow" />
              <span className="hero-terminal-dot dot-green" />
              <span className="hero-terminal-title">build.log</span>
            </div>
            <div className="hero-terminal-body">
              <span className="hero-terminal-prompt">$</span>{' '}
              <span ref={typedElementRef} />
            </div>
          </div>

          <div className="hero-actions">
            <a href="/src/assets/Daniel Anyamene cv (5).docx" download className="btn btn-primary">
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hire Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/danielcollins"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/danielcollins"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/DancoltofLagos"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {/* PHOTO: place your headshot at
              src/assets/images/daniel-collins.jpg — this is the
              primary, full-bleed photo for the site. */}
          <img
            src="/src/assets/images/daniel-collins.png"
            alt="Portrait of Daniel Collins"
            className="hero-portrait-img"
          />
          <div className="hero-portrait-frame" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
