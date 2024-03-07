const toggle = document.querySelector(".toggle")
const navMenu = document.querySelector(".nav-menu")
newFunction();

function newFunction() {
    toggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menvi");
    });
}