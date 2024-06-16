import { defineConfig } from 'vite';


export default {
    build: {
      rollupOptions: {
        external: ['emailjs-com', 'html2canvas', 'jspdf']
      }
    }
  }