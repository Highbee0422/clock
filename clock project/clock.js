const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  // Get the current date and hours
  const currentDate = new Date();

  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  // set the elements to the required degeres
  const hourToDegree = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourToDegree}deg)`;

  const minuteToDegree = (minute / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteToDegree}deg)`;

  const secondToDegree = (seconds / 60) * 360;
  secondEl.style.transform = `rotate(${secondToDegree}deg)`;
}

updateClock();
