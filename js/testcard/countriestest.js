(function () {

    var showInfo = function (jsonObj) {
        var data = jsonObj;
        console.log(data);
        var cardCountry = document.querySelector('.cardCountry');


        cardCountry.style.backgroundColor = 'lightgray';
        cardCountry.style.border = '2px';

        for (var i = 0; i < data.length; i++){
            if (i <= 11){
            var blockItem = document.createElement('div');

            var listItem = document.createElement('p');
            blockItem.classList.add('country');
            listItem.textContent = 'Столица '+ data[i].name + ': ' + data[i].capital;
            blockItem.appendChild(listItem);
            cardCountry.appendChild(blockItem);

            var blockRegion = document.createElement('p');
            blockRegion.textContent = 'Регион: ' + data[i].region;
            blockItem.appendChild(blockRegion);

            var population = document.createElement('p');
            population.textContent = 'Численность населения: ' + data[i].population;
            blockItem.appendChild(population);

            var nativeName = document.createElement('p');
            nativeName.textContent = 'Наст имя страны: ' + data[i].nativeName;
            blockItem.appendChild(nativeName);
            }

        }

    };

    window.backCountries.load = function (onLoad, onError) {
        var request = getData(onLoad, onError);
        request.open('GET', DATA_URL);
        request.send();
    };

    window.backCountries.load(showInfo, window.error.errorHandler);


})();