(function(){
var checkbox = document.querySelector('.accept-checkbox');
var changeLink = document.querySelector('.nolink');
var boxLink = document.querySelector('.box-info__link');

var checkPass = document.getElementById('passport');
var checkNation = document.getElementById('nationality');
var checkAge = document.getElementById('age');
var btnAccept = document.querySelector('.box-info__btn--accept')

var clickHandler = function() {
    if(checkbox.checked) {
      changeLink.classList.remove('nolink');
      boxLink.classList.add('active');
    }
};

checkbox.addEventListener('click', clickHandler);

})();
