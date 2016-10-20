// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player = [];

function onYouTubeIframeAPIReady() {
    player[0] = new YT.Player('video_0', {
        height: '390',
        width: '640',
        videoId: 'fJ9rUzIMcZQ',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[1] = new YT.Player('video_1', {
        height: '390',
        width: '640',
        videoId: 'W9cA9Z4bNzk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    console.log(event);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    // console.log(event);
    if (event.data == -1) {
    	// unstarted
        console.log('unstarted');
    } else if (event.data == 0) {
    	// ended
        console.log('ended');
    } else if (event.data == 1) {
    	// playing
        console.log('playing');
        playVideo();
    } else if (event.data == 2) {
    	// paused
        console.log('paused');
        pauseVideo();
    } else if (event.data == 3) {
    	// buffering
        console.log('buffering');
    } else if (event.data == 5) {
    	// video cued
        console.log('video cued');
    }
}

function playVideo() {
    player[0].playVideo();
    player[1].playVideo();
}

function pauseVideo() {
    player[0].pauseVideo();
    player[1].pauseVideo();
}

function stopVideo() {
    player[0].stopVideo();
    player[1].stopVideo();
}

$(window).load(function() {

    $('.touch-swap').css('display', 'block');

    $('.touch-swap').mouseup(function() {
        $('#video_1').css('display', 'block');
    });

    $('.touch-swap').mousedown(function() {
        $('#video_1').css('display', 'none');
    });
});

$(document).ready(function() {
});
