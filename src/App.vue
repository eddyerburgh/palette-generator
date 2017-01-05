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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
