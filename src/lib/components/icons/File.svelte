<script lang="ts">
	export let selected: boolean;
	export let name: string;
	export let url: string;
	export let type: string;
	const folder =
		'https://www.pngfind.com/pngs/m/676-6768386_icons8-flat-folder-folder-icon-flat-svg-hd.png';
</script>

<div on:click on:dblclick on:keydown class="file-container no-highlight" class:selected>
	<img src={url ? url : folder} alt="icon" class="file-icon" />
	<p>{name}</p>
</div>

<style>
	.file-container {
		width: 110px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.selected {
		background-color: rgba(88, 88, 88, 1);
	}

	.no-highlight {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently */
	}

	.file-icon {
		margin-top: 5px;
		width: 100px;
		height: 75px;
	}
</style>
