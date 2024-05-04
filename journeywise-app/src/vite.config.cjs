import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import googleFontsPlugin from 'google-fonts-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    googleFontsPlugin({
      fonts: [
        {family: 'DM Serif Text', variants: ['400']},
        {family: 'DM Sans', variants: ['400']}
      ]
    })
  ],
})
