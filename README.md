# lucapadovan.dev

Personal portfolio built with Astro and TypeScript, in English (default) and Italian.

## Local development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. English is served at `/`, Italian at `/it/`.

## Check and build

```sh
npm run check
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Update the site

- Text, translations, projects, and experience: `src/data/content.ts`
- Homepage: `src/components/Home.astro`
- Project case studies: `src/components/CaseStudy.astro`
- Shared layout and SEO metadata: `src/layouts/Layout.astro`
- Styles: `src/styles/global.css`
- GitHub repository snapshot: `src/data/repositories.json`
- Images and demo videos: `public/assets/`
- Logo: `public/assets/logo.svg` (also used to generate the favicon and social previews)
- Downloadable CVs: `public/cv/`

The homepage leads with professional experience, followed by two featured case studies and three compact project previews. Case studies document the contribution, engineering decisions, trade-offs, and technical references.

Professional contact is through LinkedIn; GitHub links accompany the projects. The public CV copies omit the personal email address; keep it out of replacement PDFs too.

GitHub stars and releases refresh in the browser through `public/live.js`, with a local cache and a static fallback.

To regenerate the social preview images:

```sh
npm run social-images
```

## Deployment

Push to `main` to run the GitHub Pages workflow in `.github/workflows/deploy.yml`. It checks and builds the site before publishing. The custom domain is configured in `public/CNAME`.
