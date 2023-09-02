<script>
	import { onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';

	onMount(() => {
		window.location.href = '/layout'
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex items-center justify-center min-h-screen">
	<Loader />
</section>
