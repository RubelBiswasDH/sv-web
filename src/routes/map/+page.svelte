<script>
    import OpenLayerMap from '../../components/OpenLayerMap.svelte';
</script>

<div>
    <OpenLayerMap
        containerId="map"
        url="countries.geojson"
        color="#006a4e"
        opacity={ 0.75 }
    />
</div>
