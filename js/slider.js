(function () {

    var buttonPrev = document.querySelector(".button-prev");
    var buttonNext = document.querySelector(".button-next");
    var imges = document.querySelectorAll(".slide-box img");
    var i = 0;
    var prevSliderHandler = function () {
        imges[i].className = '';
        i--;
        if (i < 0) {
            i = imges.length-1;
        }
        imges[i].className = 'show';
    }

    buttonPrev.addEventListener('click', prevSliderHandler);

    var nextSliderHandler = function () {
        imges[i].className = '';
        i++;
        if (i >= imges.length) {
            i = 0;
        }
        imges[i].className = 'show';
    }

    buttonNext.addEventListener('click', nextSliderHandler);
})();