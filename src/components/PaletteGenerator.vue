<template>
      <div class="palette-generator">
        <div v-if="copied" class="box copied-message">
          Copied to clipboard!
        </div>
        <section class="palette-generator__section section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <palette-input />
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
  import PaletteInput from '@/components/input/PaletteInput';
  import Palette from '@/components/palette/Palette';
  import HistoryList from '@/components/HistoryList';

  export default {
    name: 'palette-generator',

    computed: mapGetters([
      'palette',
    ]),

    components: {
      PaletteInput,
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
        this.$store.dispatch('generatePalette', { rgb: this.hex });
      }
    },
  };
</script>
