/* eslint-disable no-undef */

/**
 * Simple map
*/

// config map

let config = {
    minZoom: 7,
    maxZoom: 18,
};

// magnification with which the map will start
const zoom = 18;
// co-ordinates
const lat = 53.210958;
const lng = -2.923858;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

// Markers
L.marker([53.211174, -2.924058])
.addTo(map)
.bindPopup("<b>Home</b><br>52.53929, -1.48382<br>23 Dec 2020");

// Polygons
var polygon1 = L.polygon([
    [53.211174, -2.924058],
    [53.210951, -2.923652],
    [53.210959, -2.924370]
], { color : "pink" })
.addTo(map)
.bindPopup("I am a polygon.<br><em>html</em>?");