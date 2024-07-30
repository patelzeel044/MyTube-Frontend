import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
     '/api': JSON.stringify(process.env.VITE_BACKEND_URL || process.env.BACKEND_URL)
    }
  }
})
