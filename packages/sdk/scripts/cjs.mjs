import { readFileSync, writeFileSync } from 'node:fs';
let code = readFileSync('dist/index.js', 'utf8');
code = code.replace(/^export /gm, '');
writeFileSync('dist/index.cjs', code);
