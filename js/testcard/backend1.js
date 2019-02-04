(function () {

    var DATA_URL = 'https://restcountries.eu/rest/v2/capital/minsk';
    var TIMEOUT = 1000;
    var statusCode = {
        success: 200,
        bad_request: 400,
        access_denied: 403,
        not_found: 404,
        server_error: 500,
        application_error: 503
    };

    window.backend1 = {};

    var getData = function (onLoad, onError) {
        var request = new XMLHttpRequest();
        request.responseType = 'json';
        request.timeout = TIMEOUT;
        request.addEventListener('load', function () {

            switch (request.status) {

                case statusCode.success:
                    onLoad(request.response);

                    break;
                case statusCode.bad_request:
                    onError('Статус ответа' + request.status + 'Ошибка в запросе');
                    break;
                case statusCode.access_denied:
                    onError('Статус ответа' + request.status + 'Доступ запрещен у Вас нет прав.');
                    break;

                case  statusCode.not_found:
                    onError('Статус ответа' + request.status + 'Данные по запросу не найдены.');
                    break;
                case statusCode.server_error:
                    onError('Статус ответа' + request.status + 'Такого быть не может');
                    break;
                case statusCode.application_error:
                    onError('Статус ответа' + request.status + 'Такого быть не может');
                    break;
                default:
                    onError('Что случилось неизвестно давайте');
            };
        });

        request.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });
        request.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + request.timeout + 'мс');
        });
        return request;
    }

    window.backend1.load = function (onLoad, onError) {
        var request = getData(onLoad, onError);
        request.open('GET', DATA_URL);
        request.send();
    };

})();