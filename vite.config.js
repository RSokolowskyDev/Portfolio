import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages user/org sites (username.github.io) keep base: '/'
  // For project sites (username.github.io/repo-name) change to: base: '/repo-name/'
  base: '/',
})
