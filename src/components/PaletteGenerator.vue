<template>
      <div class="palette-generator">
        <div v-if="copied" class="box copied-message">
          Copied to clipboard!
        </div>
        <section class="palette-generator__section section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <generate-palette-form />
            </div>
            <div class="column">
              <history-list
                :paletteOnClick="updatePalette"
              />
            </div>
          </div>
        </div>
        </section>
          <palette
            :palette="palette"
            className="palette--main"
            :displayColor="true"
            :swatchOnClick="copyColor"
          />
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

    data() {
      return {
        copied: false,
      };
    },

    methods: {
      copyColor(color) {
        copyToClipboard(color);
        this.copied = true;
        setTimeout(() => { this.copied = false; }, 500);
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
