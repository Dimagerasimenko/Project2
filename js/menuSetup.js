(function () {
    var fieldBG = document.querySelector('.bg');
    var buttonBG = document.querySelector('.button-bg');
    var hintErrorMax = document.querySelector('.error-bg__max');
    var hintErrorMin = document.querySelector('.error-bg__min');


    var changeBGHandler = function(evt){
        evt.preventDefault();
        if (fieldBG.value.length > 7){
            hintErrorMax.style.display = 'block';
        }
        if (fieldBG.value.length < 7){
            hintErrorMin.style.display = 'block';
        }

        document.body.style.backgroundColor = fieldBG.value;
    }



    buttonBG.addEventListener('click', changeBGHandler);
})();