<template>
  <section class="places">
    <mapbox
      :access-token=token
      :map-options="{
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [10.018343, 51.133481],
        zoom: 5.3
      }"
      @map-load="mapLoaded"
    >
    </mapbox>

    <ul>
      <li>
        <a href="/">
          <v-btn id="places-back-btn">Zurück</v-btn>
        </a>
      </li>
      <li>
        <a href="/impressum">
          <p>Impressum</p>
        </a>
      </li>
      <li>
        <a href="/datenschutz">
          <p>Datenschutz</p>
        </a>
      </li>
      <li>
        <a href="/agb">
          <p>AGB</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';

export default {
  components: {
    Mapbox,
  },

  methods: {
    mapLoaded(map) {
      map.addSource('states', {
        type: 'geojson',
        data: 'https://gist.githubusercontent.com/oscar6echo/4423770/raw/990e602cd47eeca87d31a3e25d2d633ed21e2005/dataBundesLander.json',
      });
      map.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        layout: {},
        paint: {
          'fill-color': [
            'case', ['==', ['string', ['get', 'NAME_1']], 'Berlin'],
            '#F7565C',
            'rgba(0, 0, 0, 0)',
          ],
          'fill-opacity': 0.6,
        },
      });
    },
  },

  data() {
    return {
      token: 'pk.eyJ1IjoiZmxvdzk4IiwiYSI6ImNqZ2Y1NWQwOTE3bmEycW54aTVudXB3NzMifQ.qcrhs7g-s9aaJ6tHkO7njg',
    };
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 100vh;
}
.places ul {
  list-style-type: none;

  position: absolute;
  top: 10px;
  left: 10px;
}
.places li {
  display: inline;
}
.places ul p {
  color: gray;
}
</style>
