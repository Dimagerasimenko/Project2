(function () {

var buttonCheckIn = document.querySelector('.checkin');
var buttonClose = document.querySelector('.close-form');
var buttonSubmit = document.querySelector('.sub');
var fieldName = document.querySelector('.field-name');
var fieldFull = document.querySelector('.field-full');
var fieldPhone = document.querySelector('.field-tel');
var fieldEmail = document.querySelector('.field-email');
var fieldPassword = document.querySelector('.field-password');
var passwordRepeat = document.querySelector('.field-password_repeat');
var form = document.querySelector('.form1');
var hintNick = document.querySelector('.hint-nick');
var hintFull =document.querySelector('.hint-flname');
var hintPhone = document.querySelector('.hint-phone');
var hintEmail = document.querySelector('.hint-email');
var hintPassword = document.querySelector('.hint-password');
var storage = "";
var isStorageSupport = true;

try {
    storage = localStorage.getItem('fieldName');
    }

catch (e) {
    isStorageSupport = false;
}

var openHandler = function (evt) {
    evt.preventDefault();
    form.classList.add('modal-show');
    if (storage) {
        fieldName.value = storage;
        fieldFull.focus();
    } else {
        fieldName.focus();
    }
}


    var closeHandler = function (evt) {
        evt.preventDefault();
        var show = document.querySelector('.form1')
        show.classList.remove('show');
    }


var submitHandler = function (evt) {
    evt.preventDefault();
    /*if (!fieldName.value || !fieldFull.value || !fieldPhone.value || !fieldEmail.value || !fieldPassword.value || !passwordRepeat.value) {
        form.classList.remove('modal-error');
        form.offsetWidth = form.offsetWidth;
        form.classList.add('modal-error');
    }*/
    if (fieldName.value.length < 5) {
        hintNick.textContent = 'Мин кол-во символов 5';
        hintNick.style.color = 'red';
    }

    if (fieldFull.value.length < 15){
        hintFull.textContent = 'Мин кол-во символов 15';
    }

    if (!parseInt(fieldPhone.value, 10) ) {
        hintPhone.textContent = 'Проверь номер телефона';
    }

    if (fieldEmail.value == '') {
        hintEmail.textContent = 'Введите Email';
    }
    if (fieldPassword.value !== passwordRepeat.value) {
        hintPassword.textContent = 'Пароль не совпал!!!';

    }

}



    buttonSubmit.addEventListener('click', submitHandler);
    buttonClose.addEventListener('click', closeHandler);
    buttonCheckIn.addEventListener('click', openHandler);
})();