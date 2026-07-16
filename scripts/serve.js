import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', 'dist');
const port = process.env.PORT || 4173;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

const server = createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    if (!extname(urlPath)) urlPath += '.html';
    const safePath = normalize(join(root, urlPath));
    if (!safePath.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    const info = await stat(safePath);
    if (info.isDirectory()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const body = await readFile(safePath);
    res.writeHead(200, { 'Content-Type': types[extname(safePath)] || 'application/octet-stream' });
    res.end(body);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
