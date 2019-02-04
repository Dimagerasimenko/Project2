(function () {
    var buttonCheckin = document.querySelector('.checkin');
    var form = document.querySelector('.form1');
    var formEntry = document.querySelector('.form-entry');
    var buttonEntry = document.querySelector('.entry');
    var closeEntry = document.querySelector('.close-form2');
    var buttonClose = document.querySelector('.close-form');
    var buttonSub = document.querySelector('.form-entry__sub');
    var fieldName = document.querySelector('.field-name2');
    var fieldPassword = document.querySelector('.field-password2');
    var fieldHintName = document.querySelector('.hint-nick2');
    var fieldHintPassword = document.querySelector('.hint-password2');
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
            fieldPassword.focus();
        } else {
            fieldName.focus();
        }
    }

    var openEntryHandler = function (evt) {
        evt.preventDefault();
        formEntry.classList.add('modal-show');
        if (storage) {
            fieldName.value = storage;
            fieldPassword.focus();
        } else {
            fieldName.focus();
        }
    }

    var closeHandler = function (evt) {
        evt.preventDefault();
        form.classList.remove('modal-show');
        formEntry.classList.remove('modal-show');

    }

    var buttonSubHandler = function (evt) {
        evt.preventDefault();

        if (fieldName.value.length < 5) {
            fieldHintName.textContent = 'Минимальное количество символов 5';
        }

        if (fieldPassword.value.length < 10) {
            fieldHintPassword.textContent = 'Минимальное количество символов 10';
        }
    }
    closeEntry.addEventListener('click', closeHandler);
    buttonEntry.addEventListener('click', openEntryHandler);
    buttonSub.addEventListener('click', buttonSubHandler);
    buttonCheckin.addEventListener('click', openHandler);
    buttonClose.addEventListener('click', closeHandler);



})();