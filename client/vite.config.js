import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Redirect API calls to the backend
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Alias for cleaner imports
    },
  },
});
