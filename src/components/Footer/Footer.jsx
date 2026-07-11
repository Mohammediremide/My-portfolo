// ============================================================
// components/Footer/Footer.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// A lightweight closing section — repeats the key navigation
// and social links so visitors who've scrolled all the way down
// aren't forced to scroll back up to the Navbar to leave.
// ============================================================

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  // Computed once per render rather than hard-coded, so the
  // copyright year never needs a manual yearly update.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          Daniel<span className="footer-logo-accent">.Collins</span>
        </span>

        <div className="footer-socials">
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
            href="https://twitter.com/danielcollins"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="footer-copy">
          © {year} Daniel Collins. Built with React, end to end.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
