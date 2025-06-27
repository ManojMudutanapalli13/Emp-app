
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/GitHUB02/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/GitHUB02"
  },
  {
    "renderMode": 2,
    "route": "/Users/manoj.mudutanapalli/AppData/Local/Programs/Git/GitHUB02/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 562, hash: '793cc5c62fca53475a8805dfaeba5cb9b4bbb27b9221f0e83690313d41ecd316', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'c26c65a66b20c0ccc185445775c82412797ed694bde87afe32280551077223cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 843, hash: '6b217a3a6112b12eb4be0ad4ff356a3c29ed255750361ab22ece4ceb0c8b3f6f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
