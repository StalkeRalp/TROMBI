// filepath: c:\Users\RALPHON\Videos\trombinoscope-etu\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Trombinoscope Étudiants",
        short_name: "Trombinoscope",
        description: "Application de gestion des étudiants",
        theme_color: "#4a90e2",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  server: {
    host: true,        // autorise l’accès depuis le réseau local (téléphone, autre PC)
    port: 3000,        // le port spécifique demandé
    strictPort: true   // si le port est occupé, ne change pas automatiquement
  }
});
