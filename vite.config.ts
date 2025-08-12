import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/split-invoice-viewer/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: {
          'activereports': ['@mescius/activereportsjs', '@mescius/activereportsjs-react'],
          'react-vendor': ['react', 'react-dom'],
          'vendor': ['jszip']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
