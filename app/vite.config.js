import { defineConfig } from 'vite';


export default defineConfig({
  build: {
    rollupOptions: {
      external: ['emailjs-com', 'html2canvas', 'jspdf'], // Specify external dependencies here
    },
  },
});