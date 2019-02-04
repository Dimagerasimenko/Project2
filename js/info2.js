(function(){

var changeLink = document.querySelector('.nolink');
var checkPass = document.getElementById('passport');
var checkNation = document.getElementById('nationality');
var checkAge = document.getElementById('age');
var btnAccept = document.querySelector('.box-info__btn--accept');
var formInfo2 = document.querySelector('.box-info__form');
var MAX_AGE = 100;

var formHandler = function(){
  if(checkPass.value.length > 3 && checkNation.value.length > 3 && checkAge.value.length > 1){
    changeLink.classList.remove('nolink');
      btnAccept.classList.add('active');
      console.log('ура');
    } else {console.log('Вы что то не указали.')
  };
};

if(isNaN(checkAge.value) && checkAge.value < MAX_AGE) {
alert('вы ввели недопустимое значенние.');

}



formInfo2.addEventListener('input', formHandler);


})();
