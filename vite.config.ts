import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), TanStackRouterVite({ autoCodeSplitting: true }), viteReact(), tailwindcss(),],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
