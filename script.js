const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const progressFilled = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewindBtn = document.querySelector(".rewind");
const skipBtn = document.querySelector(".skip");

// Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

// Volume
volume.addEventListener("input", () => {
    video.volume = volume.value;
});

// Playback Speed
playbackSpeed.addEventListener("input", () => {
    video.playbackRate = playbackSpeed.value;
});

// Rewind 10s
rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});

// Skip 25s
skipBtn.addEventListener("click", () => {
    video.currentTime += 25;
});

// Progress Bar
video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
});

// Seek on Progress Click
progress.addEventListener("click", (e) => {
    const scrubTime =
        (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
});