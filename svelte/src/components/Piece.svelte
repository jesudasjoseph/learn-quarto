<script>
	import { slide } from 'svelte/transition';
	import { GAME_PIECES } from '../constants.js';
	import { mouseX, mouseY } from '../stores.js';

	export let pieceID;

	const pieceData = GAME_PIECES[pieceID];
	const styleClasses = pieceData ? `${pieceData.light ? 'light' : 'dark'} ${pieceData.tall ? 'tall' : 'short'} ${pieceData.round ? 'round' : 'square'} ${pieceData.hollow ? 'hollow' : 'solid'}` : ' ';

	let isSelected = true;

	function drag(node) {
		let moving = false;

		node.addEventListener('mousedown', () => {
			moving = true;
			node.style.cursor = 'none';
		});

		window.addEventListener('mousemove', (e) => {
			if (moving) {
				node.style.cursor = 'none';
				node.style.position = 'fixed';
				node.style.transform = 'translate(-50%, -50%) scale(1.2)';
				node.style.top = `${$mouseY}px`;
				node.style.left = `${$mouseX}px`;
			}
		});
		
		window.addEventListener('mouseup', () => {
			moving = false;
			node.style.cursor = 'pointer';
			node.style.position = 'static';
			node.style.transform = '';
		});

		window.addEventListener('touchend', () => {
			moving = false;
			node.style.cursor = 'pointer';
			node.style.position = 'static';
			node.style.transform = '';
		});
	}

</script>

<div use:drag transition:slide class={styleClasses} />

<style lang="scss">
	@import '../partials/_variables.scss';

	div {
		cursor: pointer;
		width: $piece-t-size;
		height: $piece-t-size;

		&:active {
			transform: scale(1.2);
		}
	}

	.light {
		background-color: $light;
	}
	.dark {
		background-color: $dark;
	}

	.tall {
		
	}
	.short {
		width: $piece-s-size;
		height: $piece-s-size;
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
			box-shadow: inset 4px 4px 4px $light, inset -4px -4px 4px $light, inset 4px -4px 4px $light, inset -4px 4px 4px $light;
		}
		&.dark {
			background-color: $dark-shadow;
			box-shadow: inset 4px 4px 4px $dark, inset -4px -4px 4px $dark, inset 4px -4px 4px $dark, inset -4px 4px 4px $dark;
		}
	}
	.solid {

	}
</style>