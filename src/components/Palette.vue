<template>
  <div v-if="palette.rgb">
    <div class="palette">
	    <swatch :color="palette.rgb.primary" :tone="palette.tone.primary" />
	    <swatch :color="palette.rgb.accent" :tone="palette.tone.accent" />
	    <swatch :color="palette.rgb.grayLight" :tone="palette.tone.grayLight" />
	    <swatch :color="palette.rgb.grayDark" :tone="palette.tone.grayDark" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swatch from './Swatch';

export default{
  computed: mapGetters([
    'palette',
  ]),
  components: {
    Swatch,
  },
};
</script>

<style>
  .palette{
    width: 100%;
    height: 60vh;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>