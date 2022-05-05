// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');
const aboutMe = document.getElementById("about-info")
const portrait = document.getElementById("portrait")

//Set Initial State Of Menu
let showMenu = false;
let changeImage = true;
let changeImageMenu = true;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add ('show'));

        //Set Menu State
        showMenu = true;
    } else  {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove ('show'));

        //Set Menu State
        showMenu = false;
    }
}

// function changePhoto() {
//     setTimeout( x => {
//         aboutMe.classList.remove("bio-image")
//         aboutMe.classList.add("hide")
//     }, 1500)
// }

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

// function changePhotoMenu() {
//         changeImageMenu = !changeImageMenu   
//         portrait.classList.remove("portrait") 
//         portrait.classList.add("portrait-hide")
//     setInterval(x => {
//         if(changeImageMenu) {
//             changeImageMenu = !changeImageMenu
//             portrait.classList.remove("portrait-back") 
//             portrait.classList.add("portrait-hide ")
//         }
//         else {
//             changeImageMenu = !changeImageMenu
//             portrait.classList.remove("portrait-hide")
//             portrait.classList.add("portrait-back")
//         }
//     }, 1500)
// }

// changePhotoMenu()