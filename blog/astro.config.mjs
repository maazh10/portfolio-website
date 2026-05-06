import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://maazh.tech',
	// This app now serves the homepage at `/` and the blog at `/blog`.
	// Keeping `base` empty ensures routes are generated correctly in production.
	base: '',
	integrations: [
		mdx(),
		sitemap(),
	],
});