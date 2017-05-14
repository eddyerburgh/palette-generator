<template>
  <div class="text-align-center">
        <form
          class="field is-grouped"
          v-on:submit.prevent="generatePaletteIfValidColor">
          <p class="control is-expanded">
            <input
              id="generate-palette"
              type="text"
              placeholder="enter hex or rgb"
              class="input"
              v-model="inputValue"
            />
          </p>
          <p class="control">
            <input
              type="submit"
              class="button"
              v-on:submit.prevent="generatePaletteIfValidColor"
            />
          </p>
      </form>
    <button
            @click="generateRandomPalette()"
            id="random-generate"
            class="button is-primary"
    >
	    generate random palette
	    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isValidRgb, isValidHex } from '@/lib/validators';
import { hexToRgb } from '@/lib/convert';

export default{
  name: 'generate-palette-form',
  methods: {
    ...mapActions([
      'generateRandomPalette',
    ]),
    generatePaletteIfValidColor() {
      if (isValidHex(this.inputValue)) {
        this.$store.dispatch('generatePalette', { rgb: hexToRgb(this.inputValue) });
      }
      if (isValidRgb(this.inputValue)) {
        this.$store.dispatch('generatePalette', { rgb: this.inputValue });
      }
    },
  },
};
</script>
