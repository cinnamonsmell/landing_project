function nextDay() {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
}

function calcTimer() {
  let today = new Date();
  let saleDeadLine = nextDay();
  let delta = (saleDeadLine - today) / 1000;
  delta = Math.trunc(delta);

  let hours = Math.trunc(delta / 3600);
  let minutes = Math.trunc(delta / 60) - hours * 60;
  let seconds = delta - hours * 60 * 60 - minutes * 60;
  let hoursElem = document.getElementById("timerHours");
  let minutesElem = document.getElementById("timerMinutes");
  let secondsElem = document.getElementById("timerSeconds");
  hoursElem.innerHTML = twoDigits(hours);
  minutesElem.innerHTML = twoDigits(minutes);
  secondsElem.innerHTML = twoDigits(seconds);
}

calcTimer();
setInterval(calcTimer, 1000);

function twoDigits(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
