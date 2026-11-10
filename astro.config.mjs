import { defineConfig } from 'astro/config'

const outDir = process.env.OUT_DIR ?? './dist'
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  output: 'static',
  base,
  outDir,
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
})
