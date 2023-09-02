<script lang="ts">
    export let value: number | boolean;
</script>
<div class="flex items-center justify-center w-full">
    {#if value}
    <div class="text-center w-[40px] text-green-800 bg-green-300">Yes</div>
    {:else}
    <div class="text-center w-[40px] text-white bg-red-300">No</div>
    {/if}
</div>