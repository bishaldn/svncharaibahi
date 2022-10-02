const mobile_nav = document.querySelector('.mobile-nav-btn');
const show = document.querySelector('.nav');
const hideImage = document.querySelector('.imageContainer');
mobile_nav.addEventListener('click', () => toggleNavbar());
function toggleNavbar() {
    show.classList.toggle("show");
    hideImage.classList.toggle("hide");

}


