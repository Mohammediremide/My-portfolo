// ============================================================
// components/ThemeToggle/ThemeToggle.jsx
// ------------------------------------------------------------
// WHY THIS COMPONENT EXISTS:
// This is the one piece of UI that actually calls useTheme() to
// flip dark/light mode. Splitting it out from Navbar keeps
// Navbar focused on navigation and lets this toggle be reused
// elsewhere (a mobile menu, a footer) without duplicating logic.
// ============================================================

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext.jsx';
import './ThemeToggle.css';

function ThemeToggle() {
  // Pulled straight from context — this component doesn't own
  // theme state itself, it just reads and triggers changes to
  // the shared state defined in ThemeContext.
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      // aria-label is needed because the button's only content
      // is an icon — screen readers have no text to announce
      // otherwise.
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
