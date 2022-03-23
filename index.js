/* Cмена кнопки и звука */

const button = document.querySelector('button');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('pause');
const audio = new Audio();
let isPlay = false;
audio.src = "assets/audio/forest.mp3";

function playAudio() {
 if(!isPlay) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
} else {
  audio.pause();
  isPlay = false;
}
}

/*  Cмена картинок и мелодий  */

const navBtns = document.querySelectorAll('.nav-link');
const navBtn = document.querySelector('.nav-container');
const videoImg = document.querySelectorAll('.img-video');

function changeImage(event) {

  const bird = event.target.dataset.bird;
    if(event.target.classList.contains('nav-link')) {
      videoImg.forEach((img) => img.src = `assets/img/${bird}.jpg`);
      audio.src = `assets/audio/${bird}.mp3`;
      navBtns.forEach((btn) => btn.classList.remove('active'));
      event.target.classList.add('active');   
    if (isPlay == true) {
      audio.play();
    }
  }
}
navBtn.addEventListener('click', changeImage);

/* Cмена кнопки  */

function toggleBtn() {
  button.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);