import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],   // <-- You forgot this part
  server: {
    proxy: {
      '/api': {
        target: 'http://13.233.195.36:8081',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
