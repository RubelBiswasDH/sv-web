<script>
    import OpenLayerMap from '../../components/OpenLayerMap.svelte';
</script>

<div>
    <OpenLayerMap
        containerId="map"
        url="countries.geojson"
        fillColor="#006a4e"
        fillOpacity={ 0.75 }
    />
</div>
