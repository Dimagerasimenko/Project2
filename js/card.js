(function () {

    var showInfo = function (jsonObj) {
        var data = jsonObj;
        var list = document.querySelector('.test');
        for (var i = 0; i < data.length; i++){

            var listItem = document.createElement('li');
            var listLink = document.createElement('a');
            listLink.href = data[i].html_url;
            listLink.textContent = data[i].name;
            listLink.target = '_blank';
            listItem.textContent = '';
            list.appendChild(listItem);
            listItem.appendChild(listLink);

        }
    };

    window.backend.load(showInfo, window.error.errorHandler);


})();