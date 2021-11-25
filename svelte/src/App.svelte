<script>
	import router from "page";

	import Test from './components/Test.svelte';
	import Tests from './components/Tests.svelte';
	import _404 from './components/404.svelte';

	let page;

	router('/', () => page = Test);
	router('/t', () => page = Tests);
	router('*', () => page = _404);

	router.start();

</script>

<main>
	<svelte:component this={page} />
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
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>