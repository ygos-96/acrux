import { defineConfig } from "vite"

// configuração para múltiplos HTMLs
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  }
})
