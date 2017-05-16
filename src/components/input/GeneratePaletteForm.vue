<template>
        <form
          class="field is-grouped"
          v-on:submit.prevent="generatePaletteIfValidColor">
          <p class="control is-expanded has-icons-right">
            <input
              id="generate-palette"
              type="text"
              placeholder="enter hex or rgb"
              class="input"
              :class="{
                'is-success': isValid && isDirty,
                'is-danger': isInvalid && isDirty
              }"
              v-model="inputValue"
              @input="validateInput"
            />
            <span class="icon is-small is-right">
              <i
                class="fa"
                :class="{
                'fa-check': isValid && isDirty,
                'fa-warning': isInvalid && isDirty
                }"
              />
            </span>

          </p>
          <p class="control">
            <input
              type="submit"
              class="button"
              v-on:submit.prevent="generatePaletteIfValidColor"
            />
          </p>
      </form>
</template>

<script>
import { mapActions } from 'vuex';
import isColor from 'is-color';

export default{
  name: 'generate-palette-form',
  data() {
    return {
      isValid: false,
      isInvalid: false,
      isDirty: false,
      inputValue: '',
    };
  },
  methods: {
    ...mapActions([
      'generateRandomPalette',
    ]),
    generatePaletteIfValidColor() {
      this.isDirty = true;
      if (this.isValid) {
        this.isDirty = false;
        this.$store.dispatch('generatePalette', this.inputValue);
      }
    },
    validateInput() {
      if (isColor(this.inputValue)) {
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
