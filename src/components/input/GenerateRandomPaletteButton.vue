<template>
  <button
    @click="generateRandomPalette()"
    id="random-generate"
    class="button is-primary"
  >
    generate random palette
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default{
  name: 'generate-random-palette-button',
  methods: mapActions([
    'generateRandomPalette',
  ]),
};
</script>
