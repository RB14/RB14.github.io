self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', e => {

    let url = e.request.url;
    if (!url.endsWith("download")) return;

    console.log(url);

    let count = 0;
    let stream = new ReadableStream({
        pull(cntrl) {
            console.log("pull called");
            count++;

            cntrl.enqueue(`<html><head></head><body>hello world</body></html>`);
            cntrl.close();
            if (count > 1000) {
                cntrl.close();
            }
        }
    }) ;

    let resp = new Response(stream, {
        headers: {'Content-Type': 'text/html'}
    });

    e.respondWith(Promise.resolve(resp));
    return;
});
