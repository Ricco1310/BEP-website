var bannerTop = document.getElementById("banner");
var figures = document.getElementsByTagName("figure");
var initialDesign = document.getElementById("initialDesign");

function loadImages() {
    var toggle = true;
    initialDesign.onmousedown = function () {
        console.log(toggle);
        toggle = !toggle;
        if (toggle) {
            for (var i = 0; i < figures.length; i++) {
                figures[i].style.display = "inline-block";
                console.log(42);
            }
        } else {
            for (var i = 0; i < figures.length; i++) {
                figures[i].style.display = "none";
                console.log(9001);
            }
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
