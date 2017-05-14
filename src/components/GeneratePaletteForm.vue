<template>
  <div class="text-align-center">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input
              id="generate-palette"
              type="text"
              placeholder="enter hex or rgb"
              @input="generatePaletteIfValidColor"
              class="input"
        />
      </p>
      <p class="control">
        <input type="submit" class="button" />
      </p>
    </div>
	  <p>OR</p>
    <button
            @click="generateRandomPalette()"
            id="random-palette"
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
    generatePaletteIfValidColor: function generatePaletteIfValidColor(event) {
      const inputValue = event.target.value;
      if (isValidHex(inputValue)) {
        this.$store.dispatch('generatePalette', { rgb: hexToRgb(inputValue) });
      }
      if (isValidRgb(inputValue)) {
        this.$store.dispatch('generatePalette', { rgb: inputValue });
      }
    },
  },
};
</script>
