import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'emailjs-com',
        /^html2canvas($|\/)/,  // Use regex to match html2canvas and its submodules
        'jspdf',
      ],
    },
  },
});
