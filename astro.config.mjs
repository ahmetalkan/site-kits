import { defineConfig } from 'astro/config'

const outDir = process.env.OUT_DIR ?? './dist'

export default defineConfig({
  output: 'static',
  outDir,
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
})
