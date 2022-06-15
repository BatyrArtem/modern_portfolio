const aboutMe = document.getElementById("about-info")
const portrait = document.getElementById("portrait")

let changeImage = true;
let changeImageMenu = true;

function changePhotoInterval() {
    changeImage = !changeImage   
    aboutMe.classList.remove("bio-image") 
    aboutMe.classList.add("hide")
setInterval(x => {
    if(changeImage) {
        changeImage = !changeImage
        aboutMe.classList.remove("bio-image-back") 
        aboutMe.classList.add("hide")
    }
    else {
        changeImage = !changeImage
        aboutMe.classList.remove("hide")
        aboutMe.classList.add("bio-image-back")
    }
}, 1500)
}

changePhotoInterval()