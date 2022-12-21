<script>
	let paths = [
		{ name: 'Inspiration', url: 'www.suckmypenis.com' },
		{ name: '2022', url: 'www.suckmypenis.com' },
		{ name: 'clothes', url: 'www.suckmypenis.com' }
	];
</script>

<nav>
	{#each paths as { name, url }, i}
		<a href={url}> {name}</a>
		{#if paths.length - 1 !== i} → {/if}
	{/each}
</nav>

<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
	}
</style>
