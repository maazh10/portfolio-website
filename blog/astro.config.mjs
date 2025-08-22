import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://maazh.tech',
	base: '/blog',
	build: {
		assets: '_astro',
	},
	integrations: [
		mdx(),
		sitemap(),
	],
});