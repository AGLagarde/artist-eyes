// tabs du listing

var onglets = document.querySelectorAll('.listing nav ul li');
var tabs = document.querySelectorAll('.listing .wrapper > div');


for (let i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function () {
        for (var j = 0; j < onglets.length; j++) {
            onglets[j].className = '';
        }
        for (var j = 0; j < onglets.length; j++) {
            tabs[j].className = '';
        }
        onglets[i].classList.add('active');
        tabs[i].classList.add('ouvert');
    });
}