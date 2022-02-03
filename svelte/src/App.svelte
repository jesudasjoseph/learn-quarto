<script>
	import Game from './components/Game.svelte';
	import { mouseX, mouseY } from './stores.js';

	function setMouseXY(event) {
		mouseX.set(event.clientX);
		mouseY.set(event.clientY);
	}
</script>

<main on:mousemove={setMouseXY}>
	<h1>Play some Quarto!</h1>
	<svelte:component this={Game} />
</main>

<style lang="scss">
	@import './partials/_variables.scss';

	:global(body) {
		background-color: $background;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: $primary;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 200;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>