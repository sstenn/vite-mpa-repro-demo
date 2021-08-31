import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import mpa from 'vite-plugin-mpa'

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    mpa({
      open: 'start',
      scanDir: 'src/apps'
    })
  ]
})
