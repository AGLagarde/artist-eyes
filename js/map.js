// MAP
// google map pour localiser la galerie


// initialisation de la map
var carte = document.querySelector('.map');
var map = new google.maps.Map(carte, {
    center: {
        lat: 48.8518602,
        lng: 2.4180957
    },
    zoom: 12
});

var myLatlng = {
    lat: 48.8518602,
    lng: 2.4180957
};
marker = new google.maps.Marker({
    position: myLatlng,
    map: map
});

// pop-in pour information sur lieu
var infowindow = new google.maps.InfoWindow({
    content: 'Galerie Artist-Eyes'
});

// pour fermer pop in
marker.addListener('click', function () {
    infowindow.open(map, marker);
});

map.addListener('click', function () {
    console.log('boom');
    infowindow.close(map, marker);
});