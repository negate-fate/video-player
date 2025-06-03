const video = document.querySelector('video');
const progress = document.querySelector('progress');
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const volume = document.querySelector("#volume");
const speed = document.querySelectorAll('.speed');
const back = document.querySelector('#back');
const forward = document.querySelector('#forward');

// play video when the play button is clicked
play.addEventListener('click', function play() {
    video.play();
});

// pause video when the pause button is clicked
pause.addEventListener('click', function pause() {
    video.pause();
});

// Toggle between play and pause 
function togglePlay() {
    if (video.paused) {
        video.play();
        return;
    }
    video.pause();
}

// toggle play / pause when the video is clicked
video.addEventListener('click', togglePlay);

// toggle play / pause when the space bar is pressed
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        togglePlay();
    }
});

// respond to volume slider changes
volume.addEventListener('input', function changeVolume() {
    video.volume = volume.value;
});

// set video playback speed when rate buttons are clicked
function setSelected(e) {
    video.play();
    video.playbackRate = e.target.getAttribute('data-speed');
};

// event listener for playback speed button clicks
speed.forEach(function(button) {
    button.addEventListener('click', setSelected);
});

// update the progress bar
function updateProgress() {
    if (video.currentTime > 0) {
        progress.value = video.currentTime / video.duration;
    };
};

// add event listener for updates to the video's time point
video.addEventListener('timeupdate', updateProgress);

// take the video back 5 seconds on back button click
back.addEventListener('click', function back() {
    video.currentTime -= 5;
});

// take the video forward 5 seconds on forward button click
forward.addEventListener('click', function forward() {
    video.currentTime += 5;
});