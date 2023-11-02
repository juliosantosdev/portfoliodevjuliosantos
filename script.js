function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Images/menu.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "Images/close-menu.png";
    }

}

window.addEventListener('load', function() {
    var source = document.createElement('source');
    source.src = 'video/1menor.mp4';
    source.type = 'video/mp4';

    var video = document.createElement('video');
    video.appendChild(source);
    video.autoplay = true;
    video.loop = true;

    var videoContainer = document.querySelector('.video-sobre');
    videoContainer.appendChild(video);

    video.load();
});
