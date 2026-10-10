import type { APIRoute } from 'astro';
import { homePath, projectPath, studies, type Language } from '../data/content';

export const GET: APIRoute = ({ site }) => {
  const paths = (['en', 'it'] as Language[]).flatMap(lang => [homePath(lang), ...Object.keys(studies).map(slug => projectPath(lang, slug))]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
