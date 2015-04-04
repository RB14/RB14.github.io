'use strict';

/* EX: 2 */
function sayHI() {
    worker.postMessage({'cmd': 'start', 'msg': 'Hi'});
}

function stop() {
    worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
}

function unkownCmd() {
    worker.postMessage({'cmd': 'foobard', msg: '???'});
}

var worker = new Worker('doWork2.js');

worker.addEventListener('message', function(e) {
    document.getElementById('result').textContent = e.data;
}, false);


/* EX: 1 */
//var worker = new Worker('task.js');
//
//worker.addEventListener('message', function(e) {
//    console.log('Worker said: ', e.data);
//}, false);
//
//worker.postMessage('Hello World');


//worker.postMessage();


navigator.getUserMedia = navigator.webkitGetUserMedia;

var errorCallback = function(e) {
    console.log('Rejected!', e);
};

var constraints = {
    video: {
        mandatory: {
            minWidth: 1920,
            minHeight: 1080
        }
    }
};

navigator.getUserMedia(constraints, function(localMediaStream) {
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(localMediaStream);

    video.onloadedmetadata = function(e) {

    };

}, errorCallback);

MediaStreamTrack.getSources(function(sourceInfos) {
    var audioSource = null;
    var videoSource = null;

    for (var i = 0; i != sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'audio') {
            console.log(sourceInfo.id, sourceInfo.label || 'microphone');

            audioSource = sourceInfo.id;
        } else if (sourceInfo.kind === 'video') {
            console.log(sourceInfo.id, sourceInfo.label || 'camera');

            videoSource = sourceInfo.id;
        } else {
            console.log('Some other kind of source: ', sourceInfo);
        }
    }

    sourceSelected(audioSource, videoSource);
});

function sourceSelected(audioSource, videoSource) {
    var constraints = {
        audio: {
            optional: [{sourceId: audioSource}]
        },
        video: {
            optional: [{sourceId: videoSource}]
        }
    };

    navigator.getUserMedia(constraints, successCallback, errorCallback);
}
