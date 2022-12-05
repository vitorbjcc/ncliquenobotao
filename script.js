const Thevideo = document.createElement('video');

const btn = document.querySelector('button#btn');

function unpause() {

    Thevideo.play();

};

function video() {

    const divRes = document.querySelector('div#res');
    
    btn.style.width = '0px';
    
    btn.style.height = '0px';
    
    btn.textContent = '';
    
    btn.style.

    Thevideo.setAttribute('src', 'video.mp4');

    Thevideo.setAttribute('width', '500');

    Thevideo.setAttribute('height', '500px');

    Thevideo.setAttribute('onpause', 'unpause()');

    divRes.appendChild(Thevideo);

    Thevideo.play();

};
