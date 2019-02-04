(function () {
 var countCar = document.querySelector('.car-count');

 var randomCar = function (min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
    countCar.style.fontWeight = '900';
    countCar.textContent = randomCar(1000,2000) + ' автомобиля(ей)';

})();