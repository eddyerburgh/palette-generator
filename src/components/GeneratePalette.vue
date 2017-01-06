<template>
  <div class="text-align-center">
    <input
				    id="generate-palette"
				    type="text"
				    placeholder="enter hex or rgb"
				    @input="generatePaletteIfValidColor"
    />
	  <p>OR</p>
    <button
            @click="generateRandomPalette()"
            id="random-palette"
            class="button text-align-center"
    >
	    generate random palette
	    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isValidRgb, isValidHex } from '../lib/validators';
import { hexToRgb } from '../lib/convert';

export default{
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
