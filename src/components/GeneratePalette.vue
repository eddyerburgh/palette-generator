<template>
  <div>
    <input
				    id="generate-palette"
				    type="text"
				    placeholder="enter hex or rgb"
				    @input="generatePaletteIfValidColor"
    />
    <input
				    type="submit"
				    value="generate random palette"
            @click="generateRandomPalette()"
            id="random-palette"
    >
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

<style>
  button {
    border: 0;
    padding: 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }

</style>