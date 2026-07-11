import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React plugin setup. Nothing custom is needed
// here since the project has no path aliases or special build
// requirements beyond what Vite ships with by default.
export default defineConfig({
  plugins: [react()],
});
