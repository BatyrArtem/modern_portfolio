let spinnerWrapper = document.querySelector('.spinner-wrapper');
const animateLgHeading = document.querySelector('.lg-heading');

const pageStart = Date.now()

window.addEventListener('load', function () {
    // spinnerWrapper.parentElement.removeChild(spinnerWrapper);
    const timeLoaded = Date.now() - pageStart

    function classAddSpinner() {
        spinnerWrapper.classList.add('fadeOut')
    }

    function animateH1Heading() {
        animateLgHeading.classList.add('animate-lg-heading')
    }

    if(timeLoaded < 1000) {
        setTimeout(() => {
            classAddSpinner()
            animateH1Heading()
        }, 750 - timeLoaded)
    }

    else {
        classAddSpinner()
        animateH1Heading()
    }
});