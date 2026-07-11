// ============================================================
// context/ThemeContext.jsx
// ------------------------------------------------------------
// WHY THIS FILE EXISTS:
// Theme state (dark/light) is needed by components all over the
// tree — the Navbar toggle button, but potentially others too.
// Passing that state down as props would mean threading it
// through every component in between ("prop drilling"), even
// ones that don't care about it. The Context API solves this:
// it lets any component "subscribe" directly to theme state,
// no matter how deep it is in the tree.
// ============================================================

import { createContext, useContext, useState, useEffect } from 'react';

// createContext makes a "channel" that components can read from.
// The default value here only applies if a component tries to
// read the context without a <ThemeProvider> above it — which
// shouldn't happen, but it keeps things from silently crashing.
const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

// The key used to persist the user's choice in localStorage so
// the theme survives a page refresh instead of resetting to the
// default every visit.
const STORAGE_KEY = 'daniel-collins-portfolio-theme';

export function ThemeProvider({ children }) {
  // useState's initializer function runs once, on first render,
  // not on every re-render — important here because reading
  // localStorage is a side-effecty operation we only want to do
  // once. It checks for a saved preference first, then falls
  // back to the visitor's OS-level preference, then to 'dark'.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;

    const prefersLight = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;
    return prefersLight ? 'light' : 'dark';
  });

  // useEffect here runs after every render where `theme` changed.
  // Its job is to sync React state with two things OUTSIDE React:
  // 1. The `data-theme` attribute on <html>, which is what the
  //    CSS variables in index.css actually key off of.
  // 2. localStorage, so the choice persists across visits.
  // The dependency array [theme] means this effect only re-runs
  // when `theme` itself changes — not on every unrelated render.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // A plain callback function, not an inline arrow re-created
  // inline in JSX, so consuming components can hand it straight
  // to an onClick without redefining it themselves.
  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  // The Provider is what makes `theme` and `toggleTheme`
  // available to any descendant that calls useTheme(). Only the
  // components that actually call useTheme() re-render when
  // theme changes — not the whole tree.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// A small custom hook wrapping useContext. This is a common
// pattern: it means consuming components write
// `const { theme } = useTheme()` instead of importing
// ThemeContext directly everywhere and calling useContext on it.
// It also gives us one place to throw a helpful error if someone
// forgets to wrap their tree in <ThemeProvider>.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
