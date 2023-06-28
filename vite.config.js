import react from "@vitejs/plugin-react-swc";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { defineConfig, loadEnv } from "vite";
import { imagetools } from "vite-imagetools";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

import PWAConfig from "./vite.config.PWA";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      ViteEjsPlugin(env), 
      VitePWA(PWAConfig(env)),
      imagetools(), 
      react()
    ],
  };
});
