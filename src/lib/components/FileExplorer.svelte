<script lang="ts">
	import type { IFile } from 'src/lib/types/types';
	import { FileType } from 'src/lib/types/types';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import File from '$lib/components/File.svelte';
	let files = [
		{ name: 'Inspiration', url: '', type: FileType.DIR },
		{ name: '2022', url: '', type: FileType.DIR },
		{ name: 'clothes', url: '', type: FileType.DIR },
		{
			name: '12930-1239-0',
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
			type: FileType.IMG
		}
	];

	let paths: Array<any> = [];
	let selected: IFile;
	const select = (file: IFile) => {
		selected = file;
	};
	const open = (file: IFile) => {
		if (file.type === FileType.IMG) {
			dispatch('image', file);
		} else if (file.type === FileType.DIR) {
			// Updating SPA
			// Fetch by dir files
			// update the files
		}
	};

	// Window drag-n-drop --> will probably be abstracted because we also want to do this with the files / folder
	let window: HTMLDivElement;
	let isGrabbed = false;

	const moveWindow = (event: MouseEvent) => {
		window.style.left = `${event.clientX - 50}px`;
		window.style.top = `${event.clientY - 50}px`;
	};
</script>

<div class="window primary-window" bind:this={window}>
	<div class="top-bar secondary-window">
		<nav>
			<a href={'home'}>Home</a>
			{#each paths as { name, url }, i}
				<a href={url}> {name}</a>
				{#if paths.length - 1 !== i} → {/if}
			{/each}
		</nav>
	</div>
	<div class="file-display secondary-window">
		{#each files as file}
			<File
				{...file}
				selected={file === selected}
				on:click={() => select(file)}
				on:dblclick={() => open(file)}
			/>
		{/each}
	</div>
</div>

<style>
	.window {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		position: absolute;
		left: 25%;
		top: 25%;
		width: 50rem;
		padding: 20px;
	}

	nav {
		display: flex;
		align-items: flex-start;
		width: 25rem;
		border-radius: 8px;
		padding: 0.5rem;
	}
	.file-display {
		border-radius: 8px;
		width: 50rem;
	}
</style>
