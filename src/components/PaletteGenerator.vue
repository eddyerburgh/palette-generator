<template>
  <div id="app">
    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <h1 class="text-align-center">Palette Generator</h1>
        <generate-palette />
      </div>
      <palette />
    </div>
  </div>
</template>

<script>
  import GeneratePalette from '@/components/GeneratePalette';
  import Palette from '@/components/Palette';

  export default {
    name: 'palette-generator',
    components: {
      'generate-palette': GeneratePalette,
      palette: Palette,
    },
  };
</script>
