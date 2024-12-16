const startButton = document.getElementById('start-button');
const delayInput = document.getElementById('delay-input');
const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image4stereoscopy');

let delayTime = 8; // default delay time in seconds
let intervalId = null;

startButton.addEventListener('click', () => {
  startFullscreen();
  //startAnimation();
});

delayInput.addEventListener('input', () => {
  const value = delayInput.value.trim();
  if (isNaN(value)) {
    delayTime = 8; // default value
  } else {
    delayTime = parseInt(value);
  }
});

var imageIndex = 0;

function startAnimation() {
  intervalId = setInterval(function() {
    const images = [
      'bench_stereoscopy.png',
      'treeflowers_stereoscopy.png',
      'treeuprooted_stereoscopy.png',
      'broken_wood_stereoscopy.png',
      'holzfigur_stereoscopy.png',
      'kabelrolle_stereoscopy.png',
      'treetrunc_stereoscopy.png'
      // add more stereoscopic images here...
    ];
    imageIndex++;
    if (imageIndex >= images.length) {
      imageIndex = 0
    };
    var filename = "img/"+images[imageIndex];
    //alert("Filname"+imageIndex+": '"+filename+"'");
    console.log("Display Image "+(imageIndex + 1)+" Filename: '"+filename+"'");
    image.src = filename;
  }, delayTime * 1000);
}

function stopAnimation() {
  clearInterval(intervalId);
  intervalId = null;
}

function startFullscreen () {
  var elem = imageContainer;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
};

startAnimation();
