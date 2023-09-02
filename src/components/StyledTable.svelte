<script lang="ts">
    export let columns: any, data: any;
</script>
<table class="w-full max-h-full p-0 border-collapse shadow-m">
    <thead class="sticky top-0 bg-white border-b">
      <tr class="p-0">
        {#each columns as c (c)}
            <th class="text-[12px] text-left px-1 py-1">{c}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="overflow-y-auto">
        {#each data as d}
        <tr class="text-[12px] hover:bg-gray-50 border-b px-2 py-2">
            <td class="px-1 text-[12px]">{d?.flag ?? ''}</td>
            <td class="max-w-[60px]">{d?.name?.common ?? ''}</td>
            <td>{d?.cioc ?? ''}</td>
            <td class="text-center ">{d?.unMember ? 'Yes' : 'NO'}</td>
            <td>{(d?.currencies && Object.keys(d?.currencies)?.length) ? Object.keys(d?.currencies)[0] : ''}</td>
            <td>{d?.population ?? ''}</td>
            <td class="max-w-[40px]">{d?.languages ? Object.values(d?.languages)?.join(', ') : ''}</td>
        </tr>
        {/each}
    </tbody>
</table>
