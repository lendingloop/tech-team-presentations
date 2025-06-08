import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'

// Determine base path based on environment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const base = isGitHubPages ? '/tech-team-presentations/' : '/'

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