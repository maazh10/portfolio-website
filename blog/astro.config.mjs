import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://maazh.tech',
	base: process.env.NODE_ENV === 'production' ? '/blog' : '',
	integrations: [
		mdx(),
		sitemap(),
	],
});