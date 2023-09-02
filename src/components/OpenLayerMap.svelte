<script lang="ts">
    export let containerId: any, url: any, color: any, opacity: any; 

    import { afterUpdate } from 'svelte';
    import Map from 'ol/Map.js';
    import OSM from 'ol/source/OSM.js';
    import TileLayer from 'ol/layer/Tile.js';
    import View from 'ol/View.js';
    import VectorLayer from 'ol/layer/Vector.js';
    import VectorSource from 'ol/source/Vector.js';
    import GeoJSON from 'ol/format/GeoJSON';
    import Style from 'ol/style/Style';
    import Fill from 'ol/style/Fill.js';

    const renderMap = (url: any, color: any, opacity: any) => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        url: url,
                        format: new GeoJSON()
                    }),
                    style: new Style({
                        fill: new Fill({
                            color: color
                        })
                    }),
                    opacity: opacity
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 4,
            }),
        });
    }

    afterUpdate(() => {
        renderMap(url, color, opacity)
    })
  
</script>

<div>
    <div id={ containerId }></div>
</div>

<style>
    @import "ol/ol.css";
    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>