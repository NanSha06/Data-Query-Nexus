import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  /**
   * Path aliases (must match tsconfig.json)
   */
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client/src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },

  /**
   * Client root
   */
  root: path.resolve(import.meta.dirname, "client"),

  /**
   * Build output (served by Express)
   */
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  /**
   * Dev server filesystem rules
   */
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
