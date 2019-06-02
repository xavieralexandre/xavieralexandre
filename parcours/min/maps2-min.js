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
    format: new ol.format.KML({
      extractStyles: true
    }),
  });
  var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(0,0,255,0.8)',
        width: 3
      }),
    })
  });
  map.addLayer(vector);

  var zoom_to_track = function(kml) {
    var zoomto = document.getElementById(kml);
    zoomto.addEventListener('mouseenter', function() {
      var duration = 1000;
      var start = +new Date();
      var pan = ol.animation.pan({
        duration: duration,
        source: map.getView().getCenter(),
        start: start
      });
      var zoom = ol.animation.zoom({
        duration: duration,
        resolution: map.getView().getResolution(),
        start: start
      });
      var bounce = ol.animation.bounce({
        duration: duration,
        resolution: 2 * map.getView().getResolution(),
        start: start,
        easing: ol.easing.upAndDown
      });

      map.beforeRender(pan, zoom, bounce);
      var extent = source.getExtent();
      map.getView().fitExtent(extent, map.getSize());
    }, false);
  };
  zoom_to_track(kml);
};

var allElements = document.getElementsByClassName('track');
var allIds = [];
for (var i = 0, n = allElements.length; i < n; ++i) {
  var el = allElements[i];
  if (el.id) { allIds.push(el.id); }
  map_track(el.id);
}
