const Thevideo = document.createElement('video');

function unpause() {

    Thevideo.play();

};

function video() {

    const divRes = document.querySelector('div#res');

    Thevideo.setAttribute('src', 'videos/video.mp4');

    Thevideo.setAttribute('width', '500');

    Thevideo.setAttribute('height', '500px');

    Thevideo.setAttribute('onpause', 'unpause()');

    divRes.appendChild(Thevideo);

    Thevideo.play();

};