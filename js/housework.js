/*(function () {
    var formCheckIn = document.querySelector('.form1');
    var password = document.querySelector('.field-password');
    var passwordRepeat = document.querySelector('.field-password_repeat');
    var hintPassword = document.querySelector('.hint-password');


    var formHandler = function (evt) {
        evt.preventDefault();
        if (password.value !== passwordRepeat.value) {
            hintPassword.textContent = 'Пароль не совпал!!!';

        }
    }

    formCheckIn.addEventListener('submit', formHandler);


})();*/