var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map = new ga.Map({
  target: 'map',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 100,
    center: [560000, 140000]
  }),
});

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://xavieralexandre.org/parcours/lavey-morcles/lavey-morcles.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map.addLayer(vector);

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://xavieralexandre.org/parcours/cambioula/cambioula.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map.addLayer(vector);

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://xavieralexandre.org/parcours/derborence/derborence.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map.addLayer(vector);

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://xavieralexandre.org/parcours/gruyeres/gruyeres.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map.addLayer(vector);
