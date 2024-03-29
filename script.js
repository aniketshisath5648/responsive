var menubutton = document.querySelector('.anii');
var leftNav = document.querySelector('.left-nav');

menubutton.addEventListener("click", function() {
    leftNav.classList.toggle('down');
})