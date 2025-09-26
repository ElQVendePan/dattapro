import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Configura el Service Worker para actualizarse automáticamente.
      manifest: {
        name: "Dattapro", // Nombre completo de la aplicación.
        short_name: "Dattapro", // Nombre corto que aparece en la pantalla de inicio.
        description: "Plataforma web diseñada para gestionar, centralizar y mapear el talento humano de la Universidad Simón Bolívar.", // Descripción de la aplicación.
        theme_color: "#ffffff", // Color del tema que se muestra en la barra de herramientas del navegador.
        background_color: "#ffffff", // Color de fondo de la pantalla de carga inicial.
        display: "standalone", // Modo de visualización: "standalone" simula una app nativa.
        orientation: "portrait", // Orientación preferida de la aplicación.
        start_url: "/", // URL inicial al abrir la aplicación.
        icons: [
          {
            src: "icon/icon192.png", // Ruta del icono de 192x192 píxeles.
            sizes: "192x192", // Tamaño del icono.
            type: "image/jpg", // Tipo de archivo del icono.
          },
          {
            src: "icon/icon512.png", // Ruta del icono de 512x512 píxeles.
            sizes: "512x512", // Tamaño del icono.
            type: "image/jpg", // Tipo de archivo del icono.
          },
        ],
      },
      // workbox: {
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^http:\/\/localhost:5173\/.*$/, // Patrón para manejar las solicitudes del localhost.
      //       handler: "NetworkFirst", // Intenta primero la red y luego la caché.
      //       options: {
      //         cacheName: "local-cache", // Nombre de la caché para estas solicitudes.
      //         expiration: {
      //           maxEntries: 50, // Máximo de recursos en caché.
      //           maxAgeSeconds: 86400, // Duración máxima en la caché (1 día).
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ],
});
