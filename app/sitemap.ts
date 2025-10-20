import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com';
  const paths = ['/', '/about', '/mission', '/approach', '/services', '/blog', '/contact'];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
