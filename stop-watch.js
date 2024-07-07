"use strict";
const timer1 = document.querySelector(".js-timer1");
const timer2 = document.querySelector(".js-timer2");
const timer3 = document.querySelector(".js-timer3");

const startBut = document.querySelector(".js-start");
const resetBut = document.querySelector(".js-reset");

let a = 0;
let b = 0;
let c = 0;

let intervalA, intervalB, intervalC;

let flag = 1;

startBut.addEventListener("click", function () {
  if (flag) {
    startBut.textContent = "Stop";
    //This is for minute
    intervalA = setInterval(() => {
      b += 1;
      if (b === 60) b = 0;
      timer1.textContent = String(b).padStart(2, 0) + ":";
    }, 60 * 1000);
    //This is for seconds
    intervalB = setInterval(() => {
      a += 1;
      if (a === 60) a = 0;
      timer2.textContent = String(a).padStart(2, 0) + ".";
    }, 1000);
    //This is for millisecond
    intervalC = setInterval(() => {
      c += 1;
      if (c === 100) c = 0;
      timer3.textContent = String(c).padStart(2, 0);
    }, 10);

    flag = 0;
  } else {
    startBut.textContent = "Start";
    clearInterval(intervalA);
    clearInterval(intervalB);
    clearInterval(intervalC);
    flag = 1;
  }
});
resetBut.addEventListener(
  "click",
  function () {
    a = b = c = 0;
    if (!flag) {
      clearInterval(intervalA);
      clearInterval(intervalB);
      clearInterval(intervalC);
      flag = 1;
    }
    timer1.textContent = "00:";
    timer2.textContent = "00.";
    timer3.textContent = "00";
    startBut.textContent = "Start";
  }
);
