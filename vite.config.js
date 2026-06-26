import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Exclude locked/large binary assets from Vite's file watcher
      ignored: ['**/assets/*.mp4', '**/assets/*.mov', '**/assets/*.avi']
    }
  }
})
