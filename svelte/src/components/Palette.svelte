<script>
	export let pieces;
</script>

<div id="container">
	{#each pieces as piece}
		<div id="slot">{piece}</div>
	{/each}
</div>

<style lang="scss">
	@import '../partials/_variables.scss';
	
	#container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}
	#slot {
		width: 60px;
		height: 60px;
		border: solid 2px black;
		border-radius: 4px;
		background-color: $text-dark;
	}	
</style>
