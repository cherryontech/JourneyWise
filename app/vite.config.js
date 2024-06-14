import commonjs from '@rollup/plugin-commonjs';

export default {
  build: {
    rollupOptions: {
      external: ['html2canvas', 'jspdf', 'emailjs-com'],
      plugins: [commonjs()]  // Add this plugin
    }
  }
};

