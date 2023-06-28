export default (env)=> (
{
    // sw.js
    filename: "sw.js",
    srcDir: "src",
    strategies: "injectManifest",
    injectManifest: {
      injectionPoint: null,
    },

    // Manifest
    manifest: {
      name: env.VITE_APP_NAME,
      short_name: env.VITE_APP_SHORT_NAME,
      description: env.VITE_APP_DESCRIPTION,
      theme_color: env.VITE_APP_THEME_COLOR,
      background_color: env.VITE_APP_BACKGROUND_COLOR,
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
  }
)