const { resolve } = require("path");
const { defineConfig } = require("vite");

/**
 * @type {import('vite').UserConfig}
 */
module.exports = defineConfig({
  root: resolve(__dirname, "./app"),
  build: {
    outDir: resolve(__dirname, "./dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./app/index.html"),
        about: resolve(__dirname, "./app/page/about.html"),
        projects: resolve(__dirname, "./app/page/projects.html"),
      },
    },
    watch: {
      buildDelay: 0,
      clearScreen: true,
      exclude: "node_modules/**",
    },
  },
});
