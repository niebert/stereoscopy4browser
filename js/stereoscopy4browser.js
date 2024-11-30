const startButton = document.getElementById('start-button');
const delayInput = document.getElementById('delay-input');
const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image4stereoscopy');

let delayTime = 8; // default delay time in seconds
let intervalId = null;

startButton.addEventListener('click', () => {
  startFullscreen();
  startAnimation();
});

delayInput.addEventListener('input', () => {
  const value = delayInput.value.trim();
  if (isNaN(value)) {
    delayTime = 8; // default value
  } else {
    delayTime = parseInt(value);
  }
});

function startAnimation() {
  intervalId = setInterval(() => {
    const images = [
      'bench_stereoscopy.png',
      'treeflowers_stereoscopy.png',
      'broken_wood_stereoscopy.png',
      'holzfigur_stereoscopy.png',
      'wald_stereoscopy.png'
      // add more stereoscopic images here...
    ];
    const currentImageIndex = images.indexOf(image.src);
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    image.src = "img/"+images[nextImageIndex];
  }, delayTime * 1000);
}

function stopAnimation() {
  clearInterval(intervalId);
  intervalId = null;
}

function startFullscreen () {
  imageContainer.requestFullscreen();
};
