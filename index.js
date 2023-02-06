const video = document.getElementById('trailer');
const playBtn = document.getElementById('playTrailer');

const play = () => {
  video.play();
  video.className = 'game-video-content-video__bg_playing';
  video.controls = true;
  playBtn.style.visibility = 'hidden';
}

const pause = () => {
  playBtn.style.visibility = 'visible';
}

video.addEventListener('pause', pause);