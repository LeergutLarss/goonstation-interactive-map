const imageBounds = [[0, 0], [9600, 9600]];
const fieldOfViewBound = [[800, 0], [7800, 9600]];

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    
    maxBounds: fieldOfViewBound
});

var mapLayer = L.imageOverlay('./atlas-1.png', imageBounds).addTo(map);

map.fitBounds(imageBounds);

