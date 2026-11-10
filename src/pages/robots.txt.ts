import type { APIRoute } from 'astro'
import { preset } from '../config/site'

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', preset.demoUrl).href}\n`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
