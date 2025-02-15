import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import * as path from "node:path";

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:color";
        @use "${path.resolve(__dirname, "src/assets/styles/base")}" as *;
        `,
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
    devSourcemap: true,
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
      include: "**/*.{js,jsx,ts,tsx}",
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  esbuild: {
    target: "es2022",
    tsconfigRaw: {
      compilerOptions: {
        useDefineForClassFields: true,
      },
    },
  },
  clearScreen: false,
  server: {
    open: process.env.NODE_ENV === "development-web",
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
