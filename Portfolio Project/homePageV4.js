// Navbar - Hamburger 

// const hamburger = document.getElementById("hamburger");
// const links = document.getElementById("links");

// hamburger.addEventListener("click", () => {
//     links.classList.toggle("show");
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// Projects - Events to Play & Pause videos in Projects section

let clip = document.querySelector(".vidJS")

clip.addEventListener("mouseover", function (e) {
    clip.play();
}) //Plays JS project Video when mouse hovers over video

clip.addEventListener("mouseout", function (e) {
    clip.pause();
}) //Pauses JS project Video when mouse stops hovering over video

let clip2 = document.querySelector(".vidSQL")

clip2.addEventListener("mouseover", function (e) {
    clip2.play();
}) //Plays SQL project Video when mouse hovers over video

clip2.addEventListener("mouseout", function (e) {
    clip2.pause();
}) //Pauses SQL project Video when mouse stops hovering over video


let clip3 = document.querySelector(".vidPY")

clip3.addEventListener("mouseover", function (e) {
    clip3.play();
}) //Plays Python project Video when mouse hovers over video

clip3.addEventListener("mouseout", function (e) {
    clip3.pause();
}) //Pauses Python project Video when mouse stops hovering over video
