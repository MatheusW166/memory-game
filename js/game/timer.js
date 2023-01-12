const timerElement = document.querySelector(".timer");

let interval;
let time = 0;

function getTime() {
  return time;
}

function startTimer() {
  timerElement.innerHTML = "0";
  interval = setInterval(() => {
    timerElement.innerHTML = ++time;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  time = 0;
}

export { startTimer, stopTimer, resetTimer, getTime };
