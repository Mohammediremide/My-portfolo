// ============================================================
// main.jsx
// ------------------------------------------------------------
// WHY THIS FILE EXISTS:
// This is the single entry point Vite boots first. Its only job
// is to find the real DOM node (#root, in index.html) and mount
// the React component tree into it. Nothing visual or stateful
// belongs here — that all lives in App.jsx and below.
// ============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles (design tokens + reset) must be imported before
// any component renders, so every component has access to the
// CSS variables the moment it mounts.
import './index.css';
import App from './App.jsx';

// ThemeProvider wraps the whole app here, at the root, so that
// EVERY component in the tree — no matter how deeply nested —
// can call useTheme() and read the current theme. If we wrapped
// it further down, components outside that wrapper (like a
// top-level Loader) wouldn't have access to it.
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  // StrictMode doesn't render anything itself — it's a development
  // tool that intentionally double-invokes some functions (like
  // component bodies and effects) to help surface bugs caused by
  // impure logic. It has no effect on the production build.
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
