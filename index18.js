"use strict";

navigator.serviceWorker.register('./sw.js').then(reg => {
    console.log("success");
});
