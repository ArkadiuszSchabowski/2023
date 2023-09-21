class Clock {
  NormalClock() {
    let normalClock = document.querySelector("#normalClock");

    function ShowTime() {
      let date = new Date();
      date = date.toLocaleTimeString();
      normalClock.innerHTML = date;
    }

    setInterval(ShowTime, 1000);
  }
}
let clock = new Clock();
clock.NormalClock();
