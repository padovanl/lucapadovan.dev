// Rebuild the code-designed social cards with: node scripts/social-images.mjs
import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir(new URL('../public/assets/', import.meta.url), { recursive: true });
const logo = await readFile(new URL('../public/assets/logo.svg', import.meta.url), 'utf8');
await writeFile(new URL('../public/favicon.svg', import.meta.url), logo);
for (const lang of ['en', 'it']) {
  const labels = lang === 'en'
    ? ['Linux platforms.', 'Tools for developers.', 'BOLOGNA, ITALY']
    : ['Piattaforme Linux.', 'Strumenti per sviluppatori.', 'BOLOGNA, ITALIA'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x2="1" y2="1"><stop stop-color="#111626"/><stop offset="1" stop-color="#28324b"/></linearGradient>
    <linearGradient id="panel" x2="1" y2="1"><stop stop-color="#263e42"/><stop offset="1" stop-color="#29273f"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <g transform="translate(56 52) scale(.9375)">${logo}</g>
  <text x="138" y="93" fill="#f5f5fc" font-family="DejaVu Sans,sans-serif" font-size="27">Luca Padovan</text>
  <text x="57" y="177" fill="#a6d8f4" font-family="DejaVu Sans Mono,monospace" font-size="14" letter-spacing="2">PLATFORM &amp; SOFTWARE ENGINEER</text>
  <text x="53" y="259" fill="#f5f5fc" font-family="DejaVu Sans,sans-serif" font-weight="bold" font-size="50">${labels[0]}</text>
  <text x="53" y="328" fill="#c1b3ff" font-family="DejaVu Sans,sans-serif" font-weight="bold" font-size="44">${labels[1]}</text>
  <rect x="56" y="380" width="740" height="115" rx="22" fill="url(#panel)" stroke="#465168"/>
  <text x="80" y="418" fill="#a6d8f4" font-family="DejaVu Sans Mono,monospace" font-size="12" letter-spacing="2">OPEN SOURCE / GO / LINUX</text>
  <text x="80" y="460" fill="#f5f5fc" font-family="DejaVu Sans Mono,monospace" font-size="25">portop</text>
  <text x="225" y="460" fill="#c1b3ff" font-family="DejaVu Sans Mono,monospace" font-size="25">qawk</text>
  <text x="352" y="460" fill="#a6d8f4" font-family="DejaVu Sans Mono,monospace" font-size="25">pkgtui</text>
  <text x="505" y="460" fill="#c1b3ff" font-family="DejaVu Sans Mono,monospace" font-size="25">termdock</text>
  <g transform="translate(860 145)">
    <rect width="280" height="320" rx="24" fill="#111626" stroke="#59627a"/>
    <circle cx="25" cy="25" r="5" fill="#c1b3ff"/><circle cx="44" cy="25" r="5" fill="#a6d8f4"/><circle cx="63" cy="25" r="5" fill="#65738f"/>
    <path d="M0 50h280" stroke="#59627a"/>
    <text x="22" y="99" fill="#a6d8f4" font-family="DejaVu Sans Mono,monospace" font-size="16">$ portop</text>
    <text x="22" y="145" fill="#b0b8cf" font-family="DejaVu Sans Mono,monospace" font-size="13">PORT  PROCESS  SERVICE</text>
    <text x="22" y="180" fill="#f5f5fc" font-family="DejaVu Sans Mono,monospace" font-size="13">22    sshd     ssh</text>
    <text x="22" y="208" fill="#f5f5fc" font-family="DejaVu Sans Mono,monospace" font-size="13">80    nginx    nginx</text>
    <rect x="14" y="225" width="252" height="31" rx="5" fill="#c1b3ff20"/>
    <text x="22" y="246" fill="#c1b3ff" font-family="DejaVu Sans Mono,monospace" font-size="13">8080  server   app</text>
    <text x="22" y="291" fill="#65738f" font-family="DejaVu Sans Mono,monospace" font-size="12">[enter] inspect</text>
  </g>
  <path d="M56 538h1088" stroke="#465168"/>
  <text x="56" y="580" fill="#b0b8cf" font-family="DejaVu Sans Mono,monospace" font-size="14" letter-spacing="1">${labels[2]}</text>
  <text x="878" y="580" fill="#c1b3ff" font-family="DejaVu Sans Mono,monospace" font-size="18">lucapadovan.dev</text>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(new URL(`../public/assets/social-${lang}.png`, import.meta.url).pathname);
}
