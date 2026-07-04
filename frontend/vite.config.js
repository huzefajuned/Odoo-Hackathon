import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: mode === 'development' ? {
      '/api': {
        target: process.env.VITE_API_URL || 'http://127.0.0.1:3001',
        changeOrigin: true,
        secure: false,
      }
    } : undefined
  }
}))
