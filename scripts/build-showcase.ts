import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { presets } from '../src/config/presets'

const verticalLabel: Record<string, string> = {
  clinic: 'ClinicKit',
  trade: 'TradeKit',
  charter: 'CharterKit',
}

const cards = presets
  .map(
    (preset) => `
      <a class="card" href="./${preset.slug}/">
        <span class="swatch" aria-hidden="true">
          <span style="background:${preset.palette.bg}"></span>
          <span style="background:${preset.palette.brand}"></span>
          <span style="background:${preset.palette.accent}"></span>
        </span>
        <span class="core">${verticalLabel[preset.vertical] ?? preset.vertical}</span>
        <h2>${preset.brand}</h2>
        <p>${preset.seo.description}</p>
        <span class="go">View demo <span aria-hidden="true">→</span></span>
      </a>`,
  )
  .join('\n')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Site Kits — twelve Astro theme presets</title>
    <meta name="description" content="ClinicKit, TradeKit and CharterKit: one Astro theme core with twelve vertical presets for clinics, home services and charter businesses." />
    <meta name="theme-color" content="#1C2433" />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <style>
      :root {
        --bg: #F4F1EA;
        --surface: #FFFDF8;
        --ink: #1B2330;
        --muted: #5D6573;
        --line: #DDD6C8;
        --accent: #B98A2E;
        --serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
        --sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: var(--sans);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }
      a { color: inherit; }
      .wrap { width: min(1120px, 100% - 2.5rem); margin-inline: auto; }
      header { padding: clamp(3rem, 8vw, 6rem) 0 clamp(2rem, 4vw, 3rem); border-bottom: 1px solid var(--line); }
      .eyebrow {
        display: inline-flex; align-items: center; gap: .55rem;
        margin: 0 0 1rem; font-size: .72rem; font-weight: 700;
        letter-spacing: .16em; text-transform: uppercase; color: #7A5A1F;
      }
      .eyebrow::before { content: ""; width: 1.75rem; height: 1px; background: currentColor; opacity: .7; }
      h1 { margin: 0; font-family: var(--serif); font-weight: 500; font-size: clamp(2.4rem, 6vw, 4.4rem); line-height: 1.02; letter-spacing: -.04em; max-width: 20ch; }
      header p { max-width: 60ch; margin: 1.2rem 0 0; color: var(--muted); font-size: 1.06rem; }
      header .links { margin-top: 1.8rem; display: flex; flex-wrap: wrap; gap: .75rem; }
      .btn {
        display: inline-flex; align-items: center; gap: .5rem; min-height: 2.7rem;
        padding: .55rem 1.2rem; border-radius: 999px; border: 1px solid var(--ink);
        background: var(--ink); color: var(--bg); text-decoration: none; font-size: .9rem; font-weight: 600;
      }
      .btn.secondary { background: transparent; color: var(--ink); border-color: var(--line); }
      main { padding: clamp(2.5rem, 6vw, 4.5rem) 0; }
      .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
      .card {
        display: grid; gap: .55rem; align-content: start;
        padding: 1.4rem; background: var(--surface); border: 1px solid var(--line);
        border-radius: 14px; text-decoration: none;
        transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
      }
      .card:hover { transform: translateY(-3px); border-color: #C4B79E; box-shadow: 0 20px 40px -32px rgba(20, 24, 32, .55); }
      .swatch { display: flex; gap: .3rem; height: .55rem; margin-bottom: .35rem; }
      .swatch span { flex: 1; border-radius: 999px; border: 1px solid rgba(0,0,0,.08); }
      .core { font-size: .68rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
      .card h2 { margin: 0; font-family: var(--serif); font-size: 1.4rem; font-weight: 500; letter-spacing: -.02em; }
      .card p { margin: 0; color: var(--muted); font-size: .88rem; }
      .go { margin-top: .45rem; font-size: .82rem; font-weight: 600; color: #7A5A1F; }
      footer { border-top: 1px solid var(--line); padding: 1.6rem 0 2.2rem; color: var(--muted); font-size: .82rem; }
      footer .wrap { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .75rem; }
      footer a { color: var(--ink); }
      @media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
      @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <header>
      <div class="wrap">
        <p class="eyebrow">Astro theme collection</p>
        <h1>Twelve verticals, one theme core.</h1>
        <p>
          ClinicKit, TradeKit and CharterKit are three design cores for local-service and directory
          projects. Each of the twelve presets below builds a complete site — services, about, contact,
          blog, sitemap and structured data — from a single data object. No client-side JavaScript.
        </p>
        <div class="links">
          <a class="btn" href="https://github.com/ahmetalkan/site-kits">Source on GitHub</a>
          <a class="btn secondary" href="https://github.com/ahmetalkan/site-kits#quick-start">Build your own</a>
        </div>
      </div>
    </header>

    <main>
      <div class="wrap">
        <div class="grid">${cards}
        </div>
      </div>
    </main>

    <footer>
      <div class="wrap">
        <span>MIT licensed. Built with Astro, no runtime dependencies.</span>
        <span><a href="https://github.com/ahmetalkan/site-kits">github.com/ahmetalkan/site-kits</a></span>
      </div>
    </footer>
  </body>
</html>
`

const out = resolve('dist/index.html')
writeFileSync(out, html)
copyFileSync(resolve('public/favicon.svg'), resolve('dist/favicon.svg'))
console.log(`✓ showcase written to ${out}`)
