import { defineConfig } from 'vite'

export default defineConfig({
  base: './',

  build: {
    rollupOptions: {
      input: 'html/index.html'
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: true
  }
})
