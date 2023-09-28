class Clock {
constructor(){
  this.normalClock = document.querySelector("#normalClock");
}
  NormalClock() {

    function ShowTime() {
      let date = new Date();
      date = date.toLocaleTimeString();
      this.normalClock.innerHTML = date;
    }
    setInterval(ShowTime, 1000);
  }
}
let clock = new Clock();
clock.NormalClock();
