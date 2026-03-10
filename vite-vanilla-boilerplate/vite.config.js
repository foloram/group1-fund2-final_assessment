import { defineConfig } from 'vite'

export default defineConfig({
  base: '/group1-fund2-final_assessment/',
  server: {
    proxy: {
      '/api': {
        target: 'https://image-feed-api.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path,
      }
    }
  }
})
