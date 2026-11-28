/* Minuta, Mary! — funcionamento sem internet.
   Regra: com internet, sempre a versão publicada mais recente (rede primeiro); sem internet, a última cópia guardada.
   Não guarda nada do que a pessoa escreve (isso fica no localStorage do aparelho) e não toca no contador. */
const CACHE = "mary-v18";
const BASICO = ["./", "index.html", "app.js?v=18", "motor.js?v=18", "docx.js?v=18", "dados/conteudo.js?v=18", "dados/casos.js?v=18",
  "dados/basica.js?v=18", "dados/basica_aula.js?v=18", "manifest.webmanifest",
  "icones/icone-192.png", "icones/icone-512.png", "icones/icone-maskable-512.png", "icones/apple-touch-icon.png"];

self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICO)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", ev => {
  ev.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", ev => {
  const r = ev.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;      // POST do contador e outros sites: direto à rede
  if (/\.php$/.test(u.pathname)) return;                              // contador e painel nunca vão para o cache
  ev.respondWith(
    fetch(r, { cache: "no-cache" }).then(resp => {
      if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
      return resp;
    }).catch(() => caches.match(r, { ignoreSearch: r.mode === "navigate" }).then(m => m || (r.mode === "navigate" ? caches.match("index.html") : undefined)))
  );
});
