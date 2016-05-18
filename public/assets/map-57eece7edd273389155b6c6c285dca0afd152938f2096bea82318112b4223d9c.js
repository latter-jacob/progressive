var mymap = L.map('mapid').setView([42.4374, -71.7606], 9);
//
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB2d3R3MTBqeHVrbHk0NGM5ajRjcCJ9.ts4qRmVk4Wf7wyKwomlAKw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jake8940.01gj7ih1',
    accessToken: 'pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB5OWl3MTBqenVrbHl6dWxkMWwxNyJ9._UKAJjElysUixu5b7S-xNg',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
//
// var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([42.4374, -71.7606], 40233.6, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1
}).addTo(mymap);

// var popup = L.popup();
// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(mymap);
// }
// mymap.on('click', onMapClick);

// circle.bindPopup("I am a circle.");
