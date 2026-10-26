import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'if-function',
          'global-builtin',
          'color-functions'
        ]
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
