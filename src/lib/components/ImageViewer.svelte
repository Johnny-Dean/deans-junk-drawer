<script lang="ts">
	import type { IFile } from 'src/lib/types/types';
	export let imageFile: IFile;
</script>

{#if imageFile}
	<div class="window primary-window">
		<div class="top-bar secondary-window">
			<p>'{imageFile.name}'</p>
		</div>
		<div class="img-container secondary-window">
			<img src={imageFile.url} alt="imageURL" />
		</div>
	</div>
{/if}

<style>
	.window {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		padding: 10px;
		width: 50%;
	}

	.top-bar {
		display: flex;
		justify-content: center;
	}

	.img-container {
		padding: 5px;
	}

	img {
		max-width: 100%;
	}
</style>
