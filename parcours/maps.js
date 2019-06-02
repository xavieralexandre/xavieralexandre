var bex = [570000, 137000];

var view = new ol.View({
  center: bex,
  resolution: 100
});

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');

var map = new ga.Map({
  layers: [layer],
  loadTilesWhileAnimating: true,
  target: 'map',
  view: view
});

var map_track = function(kml) {
  var source = new ol.source.Vector({
    url: 'https://www.xavieralexandre.org/parcours/' + kml + '/' + kml + '.kml',
    format: new ol.format.KML({})
  });
  var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(255,0,0,0.8)',
        width: 1
      }),
    })
  });
  map.addLayer(vector);
};

var allElements = document.getElementsByClassName('track');
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  if (el.id) { allIds.push(el.id); }
  map_track(el.id);
}
