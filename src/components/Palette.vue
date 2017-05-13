<template>
  <div v-if="palette.rgb">
    <div :class="className">
	    <swatch :color="palette.rgb.primary" :tone="palette.tone.primary" />
	    <swatch :color="palette.rgb.accent" :tone="palette.tone.accent" />
	    <swatch :color="palette.rgb.grayLight" :tone="palette.tone.grayLight" />
	    <swatch :color="palette.rgb.grayDark" :tone="palette.tone.grayDark" />
    </div>
  </div>
</template>

<script>
import Swatch from '@/components/Swatch';

export default{
  name: 'palette',
  props: ['palette', 'className'],
  components: {
    Swatch,
  },
};
</script>

<style>
  .palette{
    width: 100%;
    height: 50vh;
    margin: 0 auto;
  }
</style>
