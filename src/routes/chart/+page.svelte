<svelte:head>
	<title>Chart</title>
	<meta name="description" content="Layout" />
</svelte:head>

<script lang="ts" type="module">
    import { onMount, afterUpdate } from "svelte";

    // Import Components
    import StyledTable from "../../components/StyledTable.svelte";
    import PolarAreaChart from "../../components/PolarAreaChart.svelte";

    // Import Store and Utils
    import { API } from '../../app.config'
    import { countryDataStore } from "../../store";
    import { sortByValue } from "../../utils/utils";

    const columns = ['Flag', 'Name', 'CIOC', 'UN Member Status', 'Currencies', 'Population', 'Languages']

    let countryNames: any = []
    let populations: any = []

    // Fetch country data and store
    async function fetchData() {
        try {
            const response = await fetch(API.COUNTRIES);
            if (response.ok) {
                const countryData = await response.json();
                countryDataStore.set(countryData);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    onMount(() => {
        fetchData()
    });

    afterUpdate(() => {
        const topCountries = sortByValue($countryDataStore, 'population')?.slice(0,10)
        countryNames = topCountries.map((c: any) => c?.name?.common)
        populations = topCountries.map((c: any) => c?.population)
    })
</script>

<div class="flex flex-col-reverse w-full h-full min-h-screen gap-4 p-8 md:flex-row bg-blue-50-100">
    <div class="flex md:w-2/3 w-full overflow-x-auto max-h-[80vh] bg-white">
        <StyledTable data={ $countryDataStore } columns={ columns }/>
    </div>
    <div class="w-full md:w-1/3">
        <div class="flex flex-col bg-white">
            <span 
                class="px-2 py-1 text-[12px] font-bold border-b border-gray-400"
            >
                Countries
            </span>
            <div id='chart-container' class='py-2'>
                <PolarAreaChart 
                    chartId={ 'polar-area-chart' } 
                    data={ populations } 
                    labels={ countryNames } 
                />
            </div>
        </div>
    </div>
</div>
