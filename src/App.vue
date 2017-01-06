<template>
  <div id="app">
	  <div class="container">
		  <div class="col-lg-8 offset-lg-2">
			  <h1 class="text-align-center">Palette Generator</h1>
			  <generatePalette />
		  </div>
		  <palette />
	  </div>
  </div>
</template>

<script>
import GeneratePalette from './components/GeneratePalette';
import Palette from './components/Palette';

export default {
  name: 'app',
  components: {
    GeneratePalette,
    Palette,
  },
};
</script>

<style lang="scss">
	@import "./style/style.scss";
</style>
