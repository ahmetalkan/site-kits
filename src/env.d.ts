/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_PRESET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
