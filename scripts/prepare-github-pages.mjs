import { copyFile, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist/advogado-hiago');
const indexPath = resolve(outputDirectory, 'index.html');
const notFoundPath = resolve(outputDirectory, '404.html');
const cnamePath = resolve(outputDirectory, 'CNAME');

await copyFile(indexPath, notFoundPath);

const cname = (await readFile(cnamePath, 'utf8')).trim();

if (cname !== 'moretticarvalhopires.com.br') {
  throw new Error('O CNAME da build não corresponde ao domínio de produção.');
}

console.log(`GitHub Pages preparado em ${outputDirectory}`);
