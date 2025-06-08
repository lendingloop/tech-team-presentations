import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'

// Determine base path from environment variable or use default
const base = process.env.BASE_URL || '/'

export default defineConfig({
  plugins: [svgLoader()],
  base: base,
  // Ensure all assets use the correct base path
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})