self.addEventListener('fetch', e => {

    let url = e.request.url;
    if (!url.endsWith("download")) return;

    console.log(url);

    let count = 0;
    let stream = new ReadableStream({
        pull(cntrl) {
            count++;
            if (count > 1000) {
                cntrl.close();
            }

            cntrl.enqueue(count);
        }
    }) ;

    let resp = new Response(stream, {
        headers: {'Content-Type': 'text/plain'}
    })

    e.respondWith(resp);

});
