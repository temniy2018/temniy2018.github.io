const video = document.getElementById('trailer');
const playBtn = document.getElementById('playTrailer');

const onClickPlayBtn = () => {
  video.play();
}

const play = () => {
  video.className = 'game-video-content-video__bg_playing';
  video.controls = true;
  playBtn.style.visibility = 'hidden';
}

const pause = () => {
  playBtn.style.visibility = 'visible';
}

video.addEventListener('play', play);

video.addEventListener('pause', pause);