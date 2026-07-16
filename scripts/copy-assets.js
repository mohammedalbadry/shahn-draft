import { cp, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function main() {
  await mkdir(join(root, 'dist', 'js'), { recursive: true });
  await copyFile(join(root, 'src', 'js', 'main.js'), join(root, 'dist', 'js', 'main.js'));

  await mkdir(join(root, 'dist', 'assets', 'images'), { recursive: true });
  await cp(join(root, 'src', 'assets', 'images'), join(root, 'dist', 'assets', 'images'), {
    recursive: true,
    force: true,
  }).catch(() => {});

  console.log('assets copied');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
