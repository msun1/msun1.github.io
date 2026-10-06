import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work whether you deploy to username.github.io
  // or to username.github.io/repository-name/.
  base: './',
})
