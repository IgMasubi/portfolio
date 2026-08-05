import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The published website uses the custom domain ignk.ru, so assets must be
  // resolved from the domain root rather than /portfolio/.
  base: '/',
  plugins: [react()],
})
