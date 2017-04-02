var bannerTop = document.getElementById("banner");
var figures = document.getElementsByTagName("figure");
var initialDesign = document.getElementById("initialDesign");

function loadImages() {
    var toggle = false;
    initialDesign.onmousedown = function () {
        console.log(55);
        toggle = !toggle;
    };
    if (toggle) {
        for (var i = 0; i < figures.length; i++) {
            initialDesign.style.display = "visible";
        }
    } else {
        for (var i = 0; i < figures.length; i++) {
            initialDesign.style.display = "hidden";
        }
    }
}

function animateBanner() {
    bannerTop.onmouseenter = function () {
        bannerTop.innerHTML = "Click to return to main page"
    };
    bannerTop.onmouseout = function () {
        bannerTop.innerHTML = "Riccardo's website about building engaging prototypes"
    };
}

window.onload = function () {
    //loadImages();
    animateBanner();
}
