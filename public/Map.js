import Map from 'https://cdn.skypack.dev/ol/Map';
import View from 'https://cdn.skypack.dev/ol/View';
import TileLayer from 'https://cdn.skypack.dev/ol/layer/Tile';
import OSM from 'https://cdn.skypack.dev/ol/source/OSM';
import Feature from 'https://cdn.skypack.dev/ol/Feature';
import Point from 'https://cdn.skypack.dev/ol/geom/Point';
import VectorLayer from 'https://cdn.skypack.dev/ol/layer/Vector';
import VectorSource from 'https://cdn.skypack.dev/ol/source/Vector';
import Icon from 'https://cdn.skypack.dev/ol/style/Icon';
import Style from 'https://cdn.skypack.dev/ol/style/Style';
import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj';
import { defaults as defaultControls } from 'https://cdn.skypack.dev/ol/control';



window.addEventListener('DOMContentLoaded', () => {
  const center = fromLonLat([118.7969, 32.0603]); // 경도, 위도

  const iconFeature = new Feature({
    geometry: new Point(center),
    name: '남경 스구루 성당',
  });

  iconFeature.setStyle(
    new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '/church-icon.png',
        scale: 0.1,
      }),
    })
  );

  new Map({
    target: 'map',
    controls: defaultControls({
      zoom: false,
      attribution: false,
      rotate: false,
    }),
    layers: [
      new TileLayer({ source: new OSM() }),
      new VectorLayer({
        source: new VectorSource({ features: [iconFeature] }),
      }),
    ],
    view: new View({ center, zoom: 16 }),
  });
});
