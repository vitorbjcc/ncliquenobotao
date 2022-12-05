const Thevideo = document.createElement('video');

let btn = document.getElementsByTagName('button')[0];

function unpause() {

    Thevideo.play();

};

function video() {

    const divRes = document.querySelector('div#res');
    
    btn.style.width = '0px';
    
    btn.style.height = '0px';
    
    btn.textContent = '';
    
    btn.style.border = 0;
    
    btn.style.background = '#fff';
    
    btn.style.cursor = '';

    Thevideo.setAttribute('src', 'video.mp4');

    Thevideo.setAttribute('width', '500');

    Thevideo.setAttribute('height', '500px');

    Thevideo.setAttribute('onpause', 'unpause()');

    divRes.appendChild(Thevideo);

    Thevideo.play();

};
