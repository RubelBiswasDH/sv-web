<svelte:head>
	<title>Layout</title>
	<meta name="description" content="Layout" />
</svelte:head>

<div class="bg-red-50 min-h-screen grid gap-0 md:grid-cols-12 grid-rows-6 grid-cols-4 grid-flow-row">
    <div class='bg-blue-400 md:col-span-3 md:row-span-2 md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-3 hidden md:grid'></div>
    <div class='bg-teal-400 md:col-span-2 md:row-span-2 md:row-start-4 md:row-end-6 md:col-start-1 md:col-end-3 col-span-4 row-span-3 hidden md:grid'></div>
    <div class="bg-rose-100 md:col-span-5 md:row-span-4 md:row-start-1 md:row-end-6 md:col-start-3 md:col-end-7 col-span-4 row-span-3"></div>

    <div class="bg-fuchsia-400 md:col-span-1 md:row-span-6 md:row-start-6 md:row-end-7 md:col-start-1 md:col-end-7 col-span-4 row-span-3 hidden md:grid"></div>

    <div class="bg-cyan-400 md:col-span-2 md:row-span-6 md:row-start-1 md:row-end-3 md:col-start-7 md:col-end-13 col-span-4 row-span-3 hidden md:grid"></div>
    <div class="bg-yellow-100 md:col-span-4 md:row-span-4 md:row-start-3 md:row-end-7 md:col-start-7 md:col-end-11 place-self-center col-span-4 row-span-3">
        <div class="outer-square-shape">
            <div class="inner-circle">
                <div class="mountain-shape"></div>
            </div>
        </div>
    </div>
    <div class="bg-emerald-400 md:col-span-4 md:row-span-2 md:row-start-3 md:row-end-7 md:col-start-11 md:col-end-13 col-span-4 row-span-3 hidden md:grid"></div>
</div>

<style>
    .outer-square-shape {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #293462;
        height: 300px;
        width: 300px;
    }
    .inner-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        background-color: rgb(254, 249, 195);
    }
    .mountain-shape {
        background-color: #f25f55;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        -webkit-clip-path: polygon(72% 34%, 99% 70%, 100% 100%, 0% 100%, 27% 63%, 41% 80%);
        clip-path: polygon(72% 34%, 99% 70%, 100% 100%, 0% 100%, 27% 63%, 41% 80%);
    }
</style>