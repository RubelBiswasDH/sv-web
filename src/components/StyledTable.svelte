<script lang="ts">
    export let columns: any, data: any;
    import Tag from "./Tag.svelte";
</script>
<table class="w-full max-h-full p-0 border-collapse shadow-m">
    <thead class="sticky top-0 bg-white border-b">
      <tr class="p-0">
        {#each columns as c (c)}
            <th class="text-[12px] text-left px-2 py-1">{c}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="overflow-y-auto">
        {#each data as d}
        <tr class="text-[12px] hover:bg-gray-50 border-b px-2 py-4">
            <td class="px-2 text-[20px]">{d?.flag ?? ''}</td>
            <td class="max-w-[60px] px-2">{d?.name?.common ?? ''}</td>
            <td class="px-2">{d?.cioc ?? ''}</td>
            <td class="w-[130px] px-2 text-center">
               <Tag value={ d?.unMember } />
            </td>
            <td class="px-2">{(d?.currencies && Object.keys(d?.currencies)?.length) ? Object.keys(d?.currencies)[0] : ''}</td>
            <td class="px-2">{d?.population ?? ''}</td>
            <td class="max-w-[40px] px-2">{d?.languages ? Object.values(d?.languages)?.join(', ') : ''}</td>
        </tr>
        {/each}
    </tbody>
</table>
