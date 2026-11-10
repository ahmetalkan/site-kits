import { spawnSync } from 'node:child_process'
import { rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { presetSlugs } from '../src/config/presets'

const bin = resolve('node_modules/.bin/astro')
const root = resolve('.')

const only = process.argv.slice(2)
const slugs = only.length ? only : presetSlugs
const started = Date.now()

for (const slug of slugs) {
  if (!presetSlugs.includes(slug)) {
    console.error(`Unknown preset: ${slug}`)
    process.exit(1)
  }

  const outDir = `dist/${slug}`
  rmSync(resolve(root, outDir), { recursive: true, force: true })

  console.log(`\n▸ building ${slug} → ${outDir}`)
  const result = spawnSync(bin, ['build'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      SITE_PRESET: slug,
      OUT_DIR: outDir,
      BASE_PATH: process.env.BASE_PATH ?? `/site-kits/${slug}`,
    },
  })

  if (result.status !== 0) {
    console.error(`\n✗ ${slug} failed with exit code ${result.status}`)
    process.exit(result.status ?? 1)
  }
}

console.log(`\n✓ built ${slugs.length} preset(s) in ${((Date.now() - started) / 1000).toFixed(1)}s`)
