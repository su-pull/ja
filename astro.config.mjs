import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

export default defineConfig({
  site: 'https://example.com/',
  integrations: [sitemap(), prefetch()]
})
