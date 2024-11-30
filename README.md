# Stereoscopy4Browser
This repository creates HTML5 WebApp ([[AppLSAC]](https://en.wikiversity.org/wiki/AppLSAC) for stereoscopic images created for a Wikiversity learning resource about Stereoscopy. Due to the VR headset with an inserted smartphone the stereoscopy images are displayed in fullscreen and split the screen in two halfs for left and right eye.

<h3><a href="https://niebert.github.io/stereoscopy4browser" target="_blank">Demo of Stereoscopy Images</a></h3>

![Stereoscopic Image](./img/vr_headset_with_smartphone_and_stereoscopy_image.jpg)

## Javascript File
The Javascript file `js/stereoscopy4browser.js` contains the list of images that are displayed in fullscreen immersive preview. In the function `startAnimation()`  the list of images are defined
```javascript
function startAnimation() {
  intervalId = setInterval(() => {
    const images = [
      'bench_stereoscopy.png',
      'treeflowers_stereoscopy.png',
      'treeuprooted_stereoscopy.png',
      'broken_wood_stereoscopy.png',
      'kabelrolle_stereoscopy.png',
      'holzfigur_stereoscopy.png',
      'wald_zweige_stereoscopy.png'
      // add more stereoscopic images here...
    ];
    const currentImageIndex = images.indexOf(image.src);
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    image.src = "img/"+images[nextImageIndex];
  }, delayTime * 1000);
}
```

## Stereoscopy Images as Demo
The following image will be shown in the HTML5 web app with a default time span of 8 seconds. You can adapt the time span in the web app.
![Stereoscopic Image](./img/bench_stereoscopy.png)
![Stereoscopic Image](./img/treeflowers_stereoscopy.png)
![Stereoscopic Image](./img/treeuprooted_stereoscopy.png)
![Stereoscopic Image](./img/broken_wood_stereoscopy.png)
![Stereoscopic Image](./img/kabelrolle_stereoscopy.png)
![Stereoscopic Image](./img/holzfigur_stereoscopy.png)
![Stereoscopic Image](./img/wald_zweige_stereoscopy.png)
