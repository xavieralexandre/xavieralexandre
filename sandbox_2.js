var extent = [570000, 137000,580000,140000];



var view = new ol.View({
  extent:extent,
});

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');

var map = new ga.Map({
  layers: [layer],
  loadTilesWhileAnimating: true,
  target: 'map',
  view: view
});
