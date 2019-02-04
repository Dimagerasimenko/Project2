(function () {

var sidebar = document.querySelector('.sidebar');
var arrowTrigger = document.querySelector('.arrow-trigger');

var triggerHandler = function () {
    if (sidebar.classList.contains('sidebar-closed')){
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
        arrowTrigger.style.transform = 'rotate(180deg)';
    } else {
        sidebar.classList.add('sidebar-closed');
        sidebar.classList.remove('sidebar-open');
        arrowTrigger.style.transform = 'rotate(0deg)';
    }
}

    arrowTrigger.addEventListener('click', triggerHandler);


})();