
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/Emp-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/Emp-app"
  },
  {
    "renderMode": 2,
    "route": "/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/Emp-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 561, hash: '58d09e2c0cb5c205b001a1632d393f7223740698d4300bdebe4b001844f6cd09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '122558ea9dbe3260d1ad8dcd5a0deaafe90c6e787b428980ac180c66cc7a5444', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 842, hash: 'dc7ace80214d4a2f365f02a6c606c468779aa708255c72a3e5eb03d95484cc07', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
