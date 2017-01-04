<template>
  <div v-if="palette.rgb">
    <div class="palette">
	    <div class="swatch primary" v-bind:style="{background: palette.rgb.primary}" />
	    <div class="swatch accent" v-bind:style="{background: palette.rgb.accent}" />
	    <div class="swatch lightGray" v-bind:style="{background: palette.rgb.grayLight}" />
		  <div class="swatch darkGray" v-bind:style="{background: palette.rgb.grayDark}" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
  computed: mapGetters([
    'palette',
  ]),
};
</script>

<style>
  .swatch{
    width: 100px;
    height: 200px;
    float: left;
  }
</style>