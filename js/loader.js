let spinnerWrapper = document.querySelector('.spinner-wrapper');

const pageStart = Date.now()

window.addEventListener('load', function () {
    const timeLoaded = Date.now() - pageStart
    // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    if(timeLoaded < 1000) setTimeout(() => spinnerWrapper.classList.add('fadeOut'), 1000 - timeLoaded)
    else spinnerWrapper.classList.add('fadeOut')
});