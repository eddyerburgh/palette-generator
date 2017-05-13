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
  import { hexToRgb } from '@/lib/convert';

  export default {
    name: 'palette-generator',

    components: {
      'generate-palette': GeneratePalette,
      palette: Palette,
    },

    props: ['hex'],

    beforeMount() {
      if (this.hex) {
        this.$store.dispatch('generatePalette', { rgb: hexToRgb(this.hex) });
      }
    },
  };
</script>
