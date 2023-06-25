const image = document.getElementById("blinkMoveImage");
let animationInterval;

function startAnimation() {
  animationInterval = setInterval(function () {
    image.style.transform =
      "translate(" + getRandomOffset() + "px, " + getRandomOffset() + "px)";
  }, 5000);
}

function stopAnimation() {
  clearInterval(animationInterval);
}

function getRandomOffset() {
  return Math.floor(Math.random() * 11) - 5;
}

startAnimation();

const countElement = document.getElementById("count");
let count = 0;
const interval = setInterval(function () {
  count++;
  countElement.textContent = count.toLocaleString();
  if (count === 1234) {
    clearInterval(interval);
  }
}, 1);

const druidImage = document.getElementById('druid-image');

druidImage.addEventListener('mouseover', () => {
  druidImage.classList.add('darker');
});

druidImage.addEventListener('mouseout', () => {
  druidImage.classList.remove('darker');
  druidImage.classList.add('lighter');
});

druidImage.addEventListener('transitionend', () => {
  druidImage.classList.remove('lighter');
});
