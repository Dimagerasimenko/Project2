(function () {

    var showInfo = function (jsonObj) {
        var data = jsonObj;
        console.log(data);
        var cardCity = document.querySelector('.cardCity');
        var cubetest = document.querySelector('.cadrs');
        var tr = document.querySelector('.tr');
        cardCity.style.width = '500px';
        cardCity.style.textAlign = 'center';
        cardCity.style.backgroundColor = 'lightgray';
        /*for (var i = 0; i < data.length; i++){

            var listItem = document.createElement('li');
            var listLink = document.createElement('a');
            listLink.href = data[i].html_url;
            listLink.textContent = data[i].name;
            listLink.target = '_blank';
            listItem.textContent = '';
            list.appendChild(listItem);
            listItem.appendChild(listLink);

        }*/


        var listItem = document.createElement('p');
        listItem.textContent = data[0].alpha3Code;
        cardCity.appendChild(listItem);

        var capital = document.createElement('p');
        capital.textContent = data[0].capital;
        cardCity.appendChild(capital);

        var flag = document.createElement('img');
        flag.src = data[0].flag;
        flag.style.width = '200px';
        cardCity.appendChild(flag);

        var border = document.createElement('p');
        border.textContent = 'Беларусь граничит с такими странами как: ' + data[0].borders;
        cardCity.appendChild(border);

        var region = document.createElement('p');
        region.textContent = 'Регион: ' + data[0].region;
        cardCity.appendChild(region);

        var population = document.createElement('p');
        population.textContent = 'Количество бомжей: ' + data[0].population;
        cardCity.appendChild(population);

        var callCodes = document.createElement('p');
        callCodes.textContent = 'Код страны: ' + data[0].callingCodes;
        cardCity.appendChild(callCodes);






    };

    window.backend1.load(showInfo, window.error.errorHandler);


})();