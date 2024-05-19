import { defineConfig } from 'vite';

// vite.config.js

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html', // основной файл HTML
        room1: '/room1/room1.html', // HTML для первой комнаты
        room2: '/room1/room2.html', 
        room3: '/room1/room3.html',
       fire: '/firegame.html',  // HTML для второй комнаты// HTML для второй комнаты
      },
    },
   
  },
});

