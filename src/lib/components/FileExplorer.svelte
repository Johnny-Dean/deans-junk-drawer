<script lang="ts">
	import File from '$lib/components/icons/File.svelte';
	let files = [
		{ name: 'Inspiration', url: '', type: 'dir' },
		{ name: '2022', url: '', type: 'dir' },
		{ name: 'clothes', url: '', type: 'dir' },
		{ name: '12930-1239-0', url: '', type: 'img' }
	];

	let selected: any;
	const select = (file: any) => {
		selected = file;
	};
	const open = (file: any) => {
		if (file.type == 'img') {
			// Emit Image Viewer
		} else if (file.type == 'dir') {
			// Updating SPA
			// Fetch by dir files
			// update the files
		}
	};
</script>

<div class="window">
	{#each files as file}
		<File
			{...file}
			selected={file === selected}
			on:click={() => select(file)}
			on:dblclick={() => open(file)}
		/>
	{/each}
</div>

<style>
	.window {
		background-color: black;
		padding: 20px;
	}
</style>
