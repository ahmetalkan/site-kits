import { getPreset } from './presets'

export const preset = getPreset(import.meta.env.SITE_PRESET)

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
]

export const year = new Date().getFullYear()
