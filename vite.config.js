import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// setup config for react
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
