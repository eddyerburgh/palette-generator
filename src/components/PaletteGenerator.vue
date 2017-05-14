<template>
      <div>
        <div class="container">
          <div class="col-lg-8 offset-lg-2">
            <generate-palette-form />
          </div>
        </div>
        <div class="col-lg-8">
          <palette
            :palette="palette"
            className="palette--main"
            :displayColor="true"
            :swatchOnClick="copyColor"
          />
        </div>
        <div class="col-lg-2">
          <history-list
            :paletteOnClick="updatePalette"
          />
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import copyToClipboard from 'copy-to-clipboard';
  import GeneratePaletteForm from '@/components/GeneratePaletteForm';
  import Palette from '@/components/Palette';
  import HistoryList from '@/components/HistoryList';
  import { hexToRgb } from '@/lib/convert';

  export default {
    name: 'palette-generator',

    computed: mapGetters([
      'palette',
    ]),

    components: {
      GeneratePaletteForm,
      Palette,
      HistoryList,
    },

    props: ['hex'],

    methods: {
      copyColor(color) {
        copyToClipboard(color);
      },
      ...mapActions([
        'updatePalette',
      ]),
    },

    beforeMount() {
      if (this.hex) {
        this.$store.dispatch('generatePalette', { rgb: hexToRgb(this.hex) });
      }
    },
  };
</script>
