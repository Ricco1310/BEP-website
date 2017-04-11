var bannerTop = document.getElementById("banner");
var gallery = document.getElementsByClassName("gallery");
var initialDesign = document.getElementsByName("initialDesign");

function loadImages() {
    var toggle = true;
    initialDesign.onmousedown = function () {
        console.log(toggle);
        toggle = !toggle;
        if (toggle) {
            for (var i = 0; i < gallery.length; i++) {
                gallery[i].style.display = "inline-block";
                console.log(42);
            }
        } else {
            for (var i = 0; i < gallery.length; i++) {
                gallery[i].style.display = "none";
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
