<svelte:head>
	<title>Layout</title>
	<meta name="description" content="Layout" />
</svelte:head>

<div class="grid min-h-screen grid-flow-row grid-cols-4 grid-rows-6 gap-0 bg-red-50 md:grid-cols-12">
    <div class='hidden bg-blue-400 md:col-span-3 md:row-span-2 md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-3 md:grid'></div>
    <div class='hidden col-span-4 row-span-3 bg-teal-400 md:col-span-2 md:row-span-2 md:row-start-4 md:row-end-6 md:col-start-1 md:col-end-3 md:grid'></div>
    <div class="col-span-4 row-span-3 bg-rose-100 md:col-span-5 md:row-span-4 md:row-start-1 md:row-end-6 md:col-start-3 md:col-end-7"></div>

    <div class="hidden col-span-4 row-span-3 bg-fuchsia-400 md:col-span-1 md:row-span-6 md:row-start-6 md:row-end-7 md:col-start-1 md:col-end-7 md:grid"></div>

    <div class="hidden col-span-4 row-span-3 bg-cyan-400 md:col-span-2 md:row-span-6 md:row-start-1 md:row-end-3 md:col-start-7 md:col-end-13 md:grid"></div>
    <div class="col-span-4 row-span-3 bg-yellow-100 md:col-span-4 md:row-span-4 md:row-start-3 md:row-end-7 md:col-start-7 md:col-end-11 place-self-center">
        <div class="outer-square-shape">
            <div class="inner-circle">
                <div class="mountain-shape"></div>
            </div>
        </div>
    </div>
    <div class="hidden col-span-4 row-span-3 bg-emerald-400 md:col-span-4 md:row-span-2 md:row-start-3 md:row-end-7 md:col-start-11 md:col-end-13 md:grid"></div>
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
        -webkit-clip-path: polygon(67% 23%, 100% 63%, 90% 100%, -19% 100%, 16% 59%, 31% 71%);
        clip-path: polygon(67% 23%, 100% 63%, 90% 100%, -19% 100%, 16% 59%, 31% 71%);
    }
</style>