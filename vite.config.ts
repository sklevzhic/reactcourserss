/// <reference types="vitest">
/// <reference types="vite/client">
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
    },
    setupFiles: ['./src/setupTests.ts'],
  },
});
