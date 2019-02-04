(function(){
var PHOTOS = ['jpeg', 'png', 'jpg'];
var photoButton = document.querySelector('.photo-button');
var photoBox = document.querySelector('.photo img');
var errorPhoto = document.querySelector('.photo-error');

var changePhotoHandler = function () {
var file = photoButton.files[0];
var fileName = file.name.toLowerCase();
var result = PHOTOS.some(function(item){
  return fileName.endsWith(item);
});
if (result) {
  var reader = new FileReader();
  reader.addEventListener('load', function(){
    photoBox.src = reader.result;
  });
  reader.readAsDataURL(file);
  errorPhoto.textContent = '';
} else {
  errorPhoto.textContent = 'Формат файла не поддерживается';
  photoBox.src = '#';

}
}

photoButton.addEventListener('change', changePhotoHandler);

})();
