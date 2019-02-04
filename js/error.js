(function () {
    var template = document.querySelector('template');
    var errorTemplate = template.content.querySelector('.error');

    window.error = {
        errorHandler: function (errorTitle, errorText) {
            errorTemplate.querySelector('.error-title').textContent = errorTitle;
            errorTemplate.querySelector('.error-message').textContent = errorText;
            document.body.insertAdjacentElement("afterbegin", errorTemplate);
            var errorPopupElement = document.querySelector('.error');
            var removeErrorPopup = function () {
                errorPopupElement.remove();
            };
            setTimeout(removeErrorPopup, 10000);
        }

    };








})();