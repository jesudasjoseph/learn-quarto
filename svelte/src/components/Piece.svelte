<script>
	import { GAME_PIECES } from '../constants.js';

	export let pieceID;

	const pieceData = GAME_PIECES[pieceID];
	const styleClasses = pieceData ? `${pieceData.light ? 'light' : 'dark'} ${pieceData.tall ? 'tall' : 'short'} ${pieceData.round ? 'round' : 'square'} ${pieceData.hollow ? 'hollow' : 'solid'}` : ' ';
</script>

<div draggable="true" class={styleClasses} />

<style lang="scss">
	@import '../partials/_variables.scss';

	div {
		cursor: pointer;
	}

	.light {
		background-color: $light;
	}
	.dark {
		background-color: $dark;
	}

	.tall {
		width: 45px;
		height: 45px;

		&:active {
			width: 50px;
			height: 50px;
		}
	}
	.short {
		width: 35px;
		height: 35px;

		&:active {
			width: 40px;
			height: 40px;
		}
	}

	.round {
		border-radius: 4px;
	}
	.square {
		border-radius: 50%;
	}

	.hollow {
		&.light {
			background-color: $light-shadow;
			box-shadow: inset 6px 6px 6px $light, inset -6px -6px 6px $light, inset 6px -6px 6px $light, inset -6px 6px 6px $light;
		}
		&.dark {
			background-color: $dark-shadow;
			box-shadow: inset 6px 6px 6px $dark, inset -6px -6px 6px $dark, inset 6px -6px 6px $dark, inset -6px 6px 6px $dark;
		}
	}
	.solid {

	}
</style>