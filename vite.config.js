const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        outDir: resolve(__dirname, './out'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html')
            }
        },
        watch: {
            buildDelay: 0,
            clearScreen: true,
            exclude: "node_modules/**",
        }
    }
})