import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { apply, getMapboxLayer, updateMapboxLayer } from 'ol-mapbox-style';
import Link from 'ol/interaction/Link.js';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

setInterval(() => {
  const mapboxLayer = getMapboxLayer(map, 'fibre_node');
  updateMapboxLayer(map, mapboxLayer);
}, 1000);

map.addInteraction(new Link());
await apply(map, '/style.json');