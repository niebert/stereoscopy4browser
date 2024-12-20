# Stereoscopy4Browser 1.0.4
This repository creates [HTML5 WebApp](https://niebert.github.io/stereoscopy4browser) as [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC) for [stereoscopic](https://en.wikiversity.org/wiki/Stereoscopy) images created for a [Wikiversity learning resource about Stereoscopy](https://en.wikiversity.org/wiki/Stereoscopy). For preview use an VR headset with an inserted smartphone (see image below). The stereoscopy images are displayed in fullscreen and the VR headset uses the split the screen in two halfs for the left and right eye.

Start the following [WebApp](https://niebert.github.io/stereoscopy4browser) and press the start button for the fullscreen immersive animation of stereoscopy images.

<h3><a href="https://niebert.github.io/stereoscopy4browser" target="_blank">Demo of Stereoscopy Images</a></h3>

![Stereoscopic Image](./img/vr_headset_with_smartphone_and_stereoscopy_image.jpg)

## Javascript File
The Javascript file `js/stereoscopy4browser.js` contains the list of images that are displayed in [fullscreen immersive preview](https://niebert.github.io/stereoscopy4browser). In the function `startAnimation()`  the list of images are defined
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
      'treetrunc_stereoscopy.png'
      // add more stereoscopic images here...
    ];
    const currentImageIndex = images.indexOf(image.src);
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    image.src = "img/"+images[nextImageIndex];
  }, delayTime * 1000);
}
```

## Stereoscopy Images as Demo
The following image will be shown in the [HTML5 web app](https://niebert.github.io/stereoscopy4browser) with a default time span of 8 seconds. You can adapt the time span in the web app.
![Stereoscopic Image](./img/bench_stereoscopy.png)
![Stereoscopic Image](./img/treeflowers_stereoscopy.png)
![Stereoscopic Image](./img/treeuprooted_stereoscopy.png)
![Stereoscopic Image](./img/broken_wood_stereoscopy.png)
![Stereoscopic Image](./img/kabelrolle_stereoscopy.png)
![Stereoscopic Image](./img/holzfigur_stereoscopy.png)
![Stereoscopic Image](./img/treetrunc_stereoscopy.png)
