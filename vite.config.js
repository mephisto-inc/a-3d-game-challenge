import {defineConfig} from "vite";

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three/examples/jsm/")) {
            return "three-addons";
          }
          if (id.includes("node_modules/three/build/three.core.js")) {
            return "three-core";
          }
          if (id.includes("node_modules/three/build/three.module.js")) {
            return "three-module";
          }
        },
      },
    },
  },
});
