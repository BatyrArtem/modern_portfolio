let spinnerWrapper = document.querySelector('.spinner-wrapper');

const pageStart = Date.now()

window.addEventListener('load', function () {
    // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    const timeLoaded = Date.now() - pageStart

    function classAddSpinner() {
        spinnerWrapper.classList.add('fadeOut')
    }

    if(timeLoaded < 1000) setTimeout(() => classAddSpinner(), 750 - timeLoaded)
    else classAddSpinner()
});