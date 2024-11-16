import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseUrl = process.env.VITE_BASE_URL || '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl,
})
