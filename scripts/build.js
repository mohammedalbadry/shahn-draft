import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderHomePage } from '../src/pages/home.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const pages = [{ file: 'index.html', render: renderHomePage }];

async function build() {
  await mkdir(distDir, { recursive: true });
  for (const page of pages) {
    const html = page.render();
    const outPath = join(distDir, page.file);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    console.log(`built ${page.file}`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
