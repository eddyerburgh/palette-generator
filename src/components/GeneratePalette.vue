<template>
	<div>
	<button
			@click="generateRandomPalette()"
			id="random-palette"
		>Generate Random Palette</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default{
  methods: mapActions([
    'generateRandomPalette',
  ]),
};
</script>

<style>
  button {
    border: 0;
    padding: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }
</style>