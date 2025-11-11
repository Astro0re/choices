import { defineConfig } from 'vite';
import { resolve } from 'path';

// Vite configuration for the simple 2D game project
export default defineConfig({
  // Base path for the project
  base: './',
  
  // Resolve alias for easier imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Allows using '@' to refer to the 'src' directory
    },
  },
  
  // Server configuration for development
  server: {
    port: 3000, // Port number for the development server
    open: true, // Automatically open the browser when the server starts
  },
  
  // Build configuration for production
  build: {
    outDir: 'dist', // Output directory for the built files
    sourcemap: true, // Generate source maps for easier debugging
  },
});