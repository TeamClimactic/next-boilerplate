import sitemapGenerator from 'nextjs-sitemap-generator';
import { fileURLToPath } from 'url';

const srcDir = new URL('../src/', import.meta.url);

void sitemapGenerator({
	// TODO: dont forget to change this
	baseUrl: 'https://sportaj.ga',
	pagesDirectory: fileURLToPath(new URL('pages/', srcDir)),
	targetDirectory: fileURLToPath(new URL('public/', srcDir)),
	nextConfigPath: fileURLToPath(new URL('next.config.js', srcDir)),
	ignoredPaths: []
});
