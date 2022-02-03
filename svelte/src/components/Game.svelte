<script>
	import { GAME_PIECES, INITIAL_GAME_STATE } from '../constants.js';
	import { mouseX, mouseY } from '../stores.js';
	import Palette from './Palette.svelte';
	import Board from './Board.svelte';
	
	let gameState = INITIAL_GAME_STATE;
</script>

<div id="container">
	<div id="light">
		<Palette pieces={gameState.lightPieces} />
	</div>
	<div id="board">
		<Board boardState={gameState.board} />
	</div>
	<div id="dark">
		<Palette pieces={gameState.darkPieces} />
	</div>
</div>

{ $mouseX }
{ $mouseY }

<style lang="scss">
	#container {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		justify-items: center;
	}
	#light {
		justify-self: end;
		height: 200px;
	}
	#board {
		margin-left: 10px;
		margin-right: 10px;
	}
	#dark {
		justify-self: start;
		height: 200px;
	}
</style>