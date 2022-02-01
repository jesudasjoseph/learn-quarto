<script>
	import Piece from './Piece.svelte';

	export let boardState;
</script>

<div id="container">
	{#each boardState as row}
		{#each row as slot}
			<div id="slot">
				<Piece pieceID={slot} />
			</div>
		{/each}
	{/each}
</div>

<style lang="scss">
	#container {
		display: grid;
		width: 20vw;
		height: 20vw;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		column-gap: 3px;
		row-gap: 3px;
	}
	#slot {
		display: block;
		width: 100%;
		height: 100%;
		background-color: grey;
		border-radius: 4px;
	}
</style>

