<script lang="ts">
	export let selected: boolean;
	export let name: string;
	export let url: string;
	export let type: string;
	const folder =
		'https://www.pngfind.com/pngs/m/676-6768386_icons8-flat-foder-folder-icon-flat-svg-hd.png';
</script>

<div on:click on:dblclick on:keydown class="file-container noselect" class:selected>
	<!-- Change this to an SVG eventually? -->
	<img src={url !== '' ? url : folder} alt="icon" class="file-icon" />
	<p>{name}</p>
</div>

<style>
	.file-container {
		width: 7.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	/* Source: https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting */
	.noselect {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.selected {
		background-color: rgba(120, 156, 255, 0.43);
	}

	.file-icon {
		margin-top: 5px;
		width: 100px;
		height: 75px;
	}
</style>
