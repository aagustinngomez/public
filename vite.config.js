import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/aagustinngomez-Full-Stack-Project-Wodking/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        assetFileNames: (info) => {
          if (info.name.startsWith('.git')) return 'assets/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});