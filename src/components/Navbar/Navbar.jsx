// ============================================================
// components/Navbar/Navbar.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// Persistent site navigation, plus the entry point for theme
// toggling. It owns two pieces of local state: whether the
// mobile menu is open, and whether the page has been scrolled
// (used to give the bar a solid background once content starts
// passing underneath it). Neither piece of state is needed by
// any other component, so it stays local rather than living in
// context.
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import './Navbar.css';

// The sections a visitor can jump to. Defined as data, not
// hard-coded JSX, so adding/reordering a nav link is a one-line
// change here rather than editing markup in two places (desktop
// + mobile menu both read from this same array).
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes the mobile menu after a link is tapped, so the next
  // section isn't hidden behind an open overlay menu.
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner container">
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          Daniel<span className="navbar-logo-accent">.Collins</span>
        </a>

        {/* Desktop links — hidden on small screens via CSS,
            replaced there by the hamburger + overlay menu. */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary navbar-cta">
            Hire Me
          </a>

          {/* Hamburger toggle, visible only on mobile via CSS. */}
          <button
            type="button"
            className="navbar-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu — only mounted while open, animated
          in/out via AnimatePresence. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
