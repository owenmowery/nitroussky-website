let navbar = document.querySelector(".navbar");
let ham = document.querySelector(".ham");

function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}
if (navbar){
    ham.addEventListener("click", toggleHamburger);
}
var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
    function(menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)
