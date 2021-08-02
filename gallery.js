/** ---- This is a basic image gallery rotating function which changes the images every 3 seconds -----
 * This Javascript code was inspired by basic Javascript functions and edited to suit this website 
 */

var i = 0;
var images = [];
var time = 3000;


images[0] = "./assets/photos/image1.jpg";
images[1] = './assets/photos/image2.jpg';
images[2] = './assets/photos/image3.jpg';


function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;