// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html', // основной файл HTML
        room1: '/room1/room1.html' // HTML для первой комнаты
      },
    },
  },
});