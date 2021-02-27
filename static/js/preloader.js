function preloader_start() {
    document.body.classList.remove('loaded');
    document.body.classList.remove('loaded_hiding');
}

function preloader_stop() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}