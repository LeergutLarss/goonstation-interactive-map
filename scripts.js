const imageBounds = [[0, 0], [9600, 9600]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 1
});

var mapLayer = L.imageOverlay('./atlas-1.png', imageBounds).addTo(map);

map.fitBounds(imageBounds);

