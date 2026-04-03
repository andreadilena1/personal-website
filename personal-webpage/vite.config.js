import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal-website/', // <-- obbligatorio per GitHub Pages
  plugins: [react()],
});