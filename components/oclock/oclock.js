// const timeDisplay = document.querySelector("#timeDisplay");
// const startBtn = document.querySelector("#startBtn");
// const resetBtn = document.querySelector("#resetBtn");

// let startTime = 0;
// let currentTime = 0;
// let elapsedTime = 0;
// let paused = true;
// let intervalId;
// let hrs = 0;
// let mins = 0;
// let secs = 0;

// startBtn.addEventListener("click", () => {
//     if (paused) {
//         paused = false;
//         startTime = Date.now() - elapsedTime;
//         intervalId = setInterval(updateTime, 75);
//     }
// });

// resetBtn.addEventListener("click", () => {});

// function updateTime() {
//     elapsedTime = Date.now() - startTime;
//     secs = Math.floor(elapsedTime / 1000 % 60);
//     mins = Math.floor(elapsedTime / (1000 * 60) % 60);
//     hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

//     timeDisplay.textContent = `${hrs}:${mins},${secs}`;
// }

const time_el = document.querySelector('.container .time .timeDisplay');
const start_btn = document.getElementById('startBtn');
const reset_btn = document.getElementById('resetBtn');

let seconds = 0;
let interval = null;

// EVENT 
start_btn.addEventListener('click', start);
reset_btn.addEventListener('click', reset);
start_btn.addEventListener('click', start);

function timer () {
    seconds++;

    let hrs =  Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs *3600 )) / 60);
    let secs = Math.floor(seconds % 60);

    if(secs < 10) secs = '0' + secs ;
    if(mins < 10) mins = '0' + mins ;
    if(hrs < 10) hrs = '0' + hrs ;


    
    time_el.innerHTML = `${hrs}:${mins},${secs}`;
}

function start () {
    if (interval) {
        return
    }
    interval =  setInterval(timer, 1000);
}
function stop() {
    clearInterval(interval);
    interval = null;
}
function reset() {
    stop();
    seconds = 0;
    time_el.innerHTML = '00:00,00';
}
