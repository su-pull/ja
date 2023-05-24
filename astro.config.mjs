import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

export default defineConfig({
  site: 'https://example.com/',
  integrations: [react(), sitemap(), prefetch(), image()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
})
