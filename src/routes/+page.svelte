<script lang="ts">
	import FileExplorer from '$lib/components/FileExplorer.svelte';
	import ImageViewer from '$lib/components/ImageViewer.svelte';
	let imageFile: any;
	const launchImageViewer = (event: CustomEvent) => {
		imageFile = event.detail;
	};
</script>

<FileExplorer on:image={launchImageViewer} />
<ImageViewer {imageFile} />
