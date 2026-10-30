
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/RickAndMorty/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },

      includeAssets: [],

      manifest: {
        name: 'Mi primer PWA',
        short_name: 'MyPWA',
        description: 'PWA fantastica',
        scope: '/RickAndMorty/',
        start_url: '/RickAndMorty/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',

        screenshots: [
          {
            src: 'carro_rojo.png',
            sizes: '640x640',
            type: 'image/png',
            form_factor: 'narrow'
          },
          {
            src: 'carro_rojo.png',
            sizes: '640x640',
            type: 'image/png',
            form_factor: 'wide'
          }
        ],

        icons: [
          {
            src: 'carro192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'carro512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
