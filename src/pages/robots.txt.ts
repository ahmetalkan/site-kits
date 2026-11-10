import type { APIRoute } from 'astro'
import { preset, href } from '../config/site'

export const GET: APIRoute = () => {
  const origin = new URL(preset.demoUrl).origin
  const sitemap = new URL(href('/sitemap.xml'), origin).href
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
