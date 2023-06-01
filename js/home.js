var image = document.getElementById("blinkMoveImage");
var animationInterval;

function startAnimation() {
  animationInterval = setInterval(function () {
    image.style.transform =
      "translate(" + getRandomOffset() + "px, " + getRandomOffset() + "px)";
  }, 1000);
}

function stopAnimation() {
  clearInterval(animationInterval);
}

function getRandomOffset() {
  return Math.floor(Math.random() * 11) - 5;
}

startAnimation();

var countElement = document.getElementById("count");
var count = 0;
var interval = setInterval(function () {
  count++;
  countElement.textContent = count.toLocaleString();
  if (count === 9999) {
    clearInterval(interval);
  }
}, 1);
