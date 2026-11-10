import { getPreset } from './presets'

export const preset = getPreset(import.meta.env.SITE_PRESET)

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

/** Prefix an internal path with the deployment base path. Passes external URLs through. */
export function href(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}` || '/'
}

export const nav = [
  { label: 'Home', href: href('/') },
  { label: 'Services', href: href('/services/') },
  { label: 'About', href: href('/about/') },
  { label: 'Blog', href: href('/blog/') },
  { label: 'Contact', href: href('/contact/') },
]

export const year = new Date().getFullYear()
