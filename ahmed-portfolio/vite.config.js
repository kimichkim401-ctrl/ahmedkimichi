import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, uncomment and set your repo name:
  // base: '/ahmed-portfolio/',
})
