var mymap2 = L.map('mapid2').setView([42.4374, -71.7606], 9);
//
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB2d3R3MTBqeHVrbHk0NGM5ajRjcCJ9.ts4qRmVk4Wf7wyKwomlAKw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jake8940.01gj7ih1',
    accessToken: 'pk.eyJ1IjoiamFrZTg5NDAiLCJhIjoiY2lucnB5OWl3MTBqenVrbHl6dWxkMWwxNyJ9._UKAJjElysUixu5b7S-xNg',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap2);

var circle = L.circle([42.4374, -71.7606], 40233.6, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1
}).addTo(mymap2);

$(window).on("resize", function() {
    $("#mapid2").height($(window).height()).width($(window).width());
    mapid2.invalidateSize();
}).trigger("resize");
