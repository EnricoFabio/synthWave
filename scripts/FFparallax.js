window.addEventListener("scroll", parallax, false);

function parallax() {
    var canvaslyr = document.getElementById('canvas');

canvaslyr.style.top = (-window.pageYOffset/6) + 'px';


}