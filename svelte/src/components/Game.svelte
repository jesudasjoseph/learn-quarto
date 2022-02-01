<script>
	import { GAME_PIECES, INITIAL_GAME_STATE } from '../constants.js';
	import Palette from './Palette.svelte';
	
	let gameState = INITIAL_GAME_STATE;
</script>
<div id="light">
	<Palette pieces={gameState.lightPieces} />
</div>
<div id="dark">
	<Palette pieces={gameState.darkPieces} />
</div>

<style lang="scss">
	#light {
		width: 50px;
		height: 200px;
	}
	#dark {
		width: 5px;
		height: 200px;
	}
</style>