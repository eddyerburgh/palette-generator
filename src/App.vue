<template>
  <div id="app">
	  <generatePalette />
    <palette />
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

<style>
#app {
  font-family: sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
