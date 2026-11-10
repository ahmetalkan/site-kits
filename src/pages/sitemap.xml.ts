import type { APIRoute } from 'astro'
import { preset } from '../config/site'

const staticRoutes = ['/', '/services/', '/about/', '/contact/', '/blog/']

export const GET: APIRoute = () => {
  const routes = [
    ...staticRoutes,
    ...preset.posts.map((post) => `/blog/${post.slug}/`),
  ]

  const urls = routes
    .map((route) => {
      const loc = new URL(route, preset.demoUrl).href
      const priority = route === '/' ? '1.0' : route.startsWith('/blog/') && route !== '/blog/' ? '0.6' : '0.8'
      return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
