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
	@import '../partials/_variables.scss';

	#container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		column-gap: 2px;
		row-gap: 2px;
	}
	#slot {
		display: block;
		width: $slot-size;
		height: $slot-size;
		border: solid 2px darken(grey, 15%);
		background-color: grey;
		border-radius: 4px;
	}
</style>

