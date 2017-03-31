// INDEX
// animation apparition nom/prénom artistes qui exposent

var titre = document.querySelector('.wrapp');

if (window.innerWidth > 580) {
    window.setTimeout(function () {
        titre.classList.add('loaded');
    }, 100);
}