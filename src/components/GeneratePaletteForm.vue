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
              :class="{
                'is-success': isValid,
                'is-danger': isInvalid
              }"
              v-model="inputValue"
              @input="validateInput"
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
  data() {
    return {
      isValid: false,
      isInvalid: false,
      inputValue: '',
    };
  },
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
    validateInput() {
      if (isValidHex(this.inputValue)) {
        this.isValid = true;
        this.isInvalid = false;
      } else if (isValidRgb(this.inputValue)) {
        this.isValid = true;
        this.isInvalid = false;
      } else {
        this.isValid = false;
        this.isInvalid = true;
      }
    },
  },
};
</script>
