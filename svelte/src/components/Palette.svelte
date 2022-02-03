<script>
	import Piece from './Piece.svelte'

	export let pieces;
</script>

<div id="container">
	{#each pieces as piece}
		<div id="slot">
			<Piece pieceID={piece}/>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../partials/_variables.scss';
	
	#container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		column-gap: 2px;
		row-gap: 2px;
	}
	#slot {
		display: grid;
		justify-items: center;
		align-items: center;
		width: $slot-size;
		height: $slot-size;
		border: solid 2px black;
		border-radius: 4px;
		background-color: $text-dark;
	}	
</style>
