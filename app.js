const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

meditateAnimation();

function meditateAnimation() {
  text.innerHTML = "breath in";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "breath out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(meditateAnimation, totalTime);
