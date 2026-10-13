// Genera assets/manifest.json con la lista de imágenes y sonidos que hay en assets/.
// Uso: node tools/assets.mjs   (o doble clic en actualizar-assets.bat)
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = fileURLToPath(new URL('../assets/', import.meta.url));
const OK = new Set(['.png', '.webp', '.jpg', '.jpeg', '.gif', '.ogg', '.mp3', '.wav', '.m4a', '.webm']);

mkdirSync(raiz, { recursive: true });
const archivos = [];
const recorrer = (dir, pref) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) recorrer(join(dir, e.name), pref + e.name + '/');
    else if (OK.has(extname(e.name).toLowerCase())) archivos.push(pref + e.name);
  }
};
recorrer(raiz, '');
archivos.sort();
writeFileSync(join(raiz, 'manifest.json'), JSON.stringify({ archivos }, null, 1) + '\n');
console.log(`assets/manifest.json: ${archivos.length} archivo(s)`);
for (const a of archivos) console.log('  ' + a);
console.log('Abrí el juego con ?assets en la URL para ver cuáles se usan y cuáles tienen el nombre mal.');
