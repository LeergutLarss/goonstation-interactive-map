
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 1,
    maxBounds: window.imageBounds
});

var mapLayer = L.imageOverlay(window.imageSource, window.imageBounds).addTo(map);

map.fitBounds(window.imageBounds);

