<svelte:head>
	<title>Chart</title>
	<meta name="description" content="Layout" />
</svelte:head>

<script lang="ts" type="module">
    import { onMount } from "svelte";
    import { countryDataStore } from "../../store"
    import { sortByValue } from "../../utils/utils";

    const columns = ['Flag', 'Name', 'CIOC', 'UN Member Status', 'Currencies', 'Population', 'Languages']

    const topCountries = sortByValue($countryDataStore, 'population')?.slice(0,10)

    
    const config = {
        type: 'polarArea',
        data: topCountries,
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart'
            }
            }
        },
    };

    // Fetch country data and store
    async function fetchData() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
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

    onMount(fetchData);
</script>

<div class="flex w-full h-full min-h-screen">
    <div class="w-2/3">
        <table class="w-full table-auto">
            <thead class="w-full">
              <tr>
                {#each columns as c (c)}
                    <th>{c}</th>
                {/each}
              </tr>
            </thead>
            <tbody>
                {#each $countryDataStore as c}
                <tr class="text-sm">
                    <td>{c?.flag ?? ''}</td>
                    <td>{c?.name?.common ?? ''}</td>
                    <td>{c?.cioc ?? ''}</td>
                    <td>{c?.unMember ? 'Yes' : 'NO'}</td>
                    <td>{(c?.currencies && Object.keys(c?.currencies)?.length) ? Object.keys(c?.currencies)[0] : ''}</td>
                    <td>{c?.population ?? ''}</td>
                    <td>{c?.languages ? Object.values(c?.languages)?.join(',') : ''}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <div class="w-1/3">
        <div id='polar-area'></div>
    </div>
</div>

<style>

</style>