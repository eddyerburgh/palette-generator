<template>
      <div>
        <div class="container">
          <div class="col-lg-8 offset-lg-2">
            <generate-palette-form />
          </div>
        </div>
        <div class="col-lg-8">
          <palette />
        </div>
        <div class="col-lg-2">
          <palette />
        </div>
    </div>
</template>

<script>
  import GeneratePaletteForm from '@/components/GeneratePaletteForm';
  import Palette from '@/components/Palette';
  import { hexToRgb } from '@/lib/convert';

  export default {
    name: 'palette-generator',

    components: {
      GeneratePaletteForm,
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
