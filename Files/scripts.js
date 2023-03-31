var mapLayer = L.imageOverlay(window.imageSource, window.imageBounds);
var pipeLayer = L.imageOverlay(window.pipeSource, window.imageBounds);

var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 1,
    maxBounds: window.imageBounds,
    layers: mapLayer
});


var baseLayers = {
    "Base": mapLayer,
};

var overlays = {
    "PipeNet": pipeLayer,
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);


map.fitBounds(window.imageBounds);

