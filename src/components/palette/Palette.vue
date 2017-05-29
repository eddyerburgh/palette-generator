<template>
    <div
      v-on:click="handleClick && handleClick({palette})"
      v-if="palette.rgb"
      :class="className"
    >
	    <swatch
        :color="palette[format].primary"
        :tone="palette.tone.primary"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette[format].accent"
        :tone="palette.tone.accent"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette[format].grayLight"
        :tone="palette.tone.grayLight"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette[format].grayDark"
        :tone="palette.tone.grayDark"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swatch from '@/components/palette/Swatch';

export default{
  name: 'palette',
  props: [
    'palette',
    'className',
    'displayColor',
    'swatchOnClick',
    'handleClick',
  ],
  computed: {
    ...mapGetters([
      'format',
    ]),
  },
  components: {
    Swatch,
  },
};
</script>
