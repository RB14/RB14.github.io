'use strict';

let cameraPlayer = document.querySelector('#camera-player video');
let cameraSelect = document.querySelector('#camera-source');
let resHeight = document.querySelector('#res-height');
let resWidth = document.querySelector('#res-width');
let startBtn = document.querySelector('#start');

navigator.getUserMedia =  navigator.webkitGetUserMedia;

var errorCallback = function(e) {
    console.log('Rejected!', e);
};


// getting the sources, and adding to the camera selection list
MediaStreamTrack.getSources(function(sourceInfos) {
    var cameraCount = 1;
    for (var i = 0; i < sourceInfos.length; i++) {
        var sourceInfo = sourceInfos[i];
        console.log(sourceInfo.kind);
        if (sourceInfo.kind == 'video') {
            var option = document.createElement('option');
            option.value = sourceInfo.id;
            option.text = sourceInfo.label || `Camera ${cameraCount++}`;
            cameraSelect.appendChild(option);
        }

    }
});

var connectCamera = function() {

    var selectedCam = cameraSelect.value;
    var height = resHeight.value;
    var width = resWidth.value;

    if (!!cameraPlayer.stream) {
        cameraPlayer.pause();
        cameraPlayer.stream.stop();
    }


    var constraints = {
        video: {
            mandatory: {
                minWidth: width,
                minHeight: height
            },

            optional: [{
                sourceId: selectedCam
            }]
        }
    };

    navigator.getUserMedia(constraints, function(stream) {

        cameraPlayer.stream = stream;
        cameraPlayer.src = window.URL.createObjectURL(stream);
    }, errorCallback);

};


start.addEventListener('click', connectCamera);
