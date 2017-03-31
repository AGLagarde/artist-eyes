// burgermenu

var btn = document.querySelector('.burger');
var menu = document.querySelector('nav ul');

btn.addEventListener('click', function () {
    if (menu.style.display == '') {
        menu.style.display = "block";
        menu.style.transition = "2s";
        console.log('yep')
    } else {
        menu.style.display = '';
        menu.style.transition = "2s";
        console.log('arf');
    }
});



// sticky nav
var nav = document.querySelector('header');
document.addEventListener('scroll', function (event) {
    if (document.body.scrollTop > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});