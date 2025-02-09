import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";
import * as path from "node:path";
import autoprefixer from "autoprefixer";

const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, "src/assets/styles/base.less")}";`,
      },
    },
    devSourcemap: true,
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
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
