<template>
    <div
      v-on:click="handleClick && handleClick({palette})"
      v-if="palette.rgb"
      :class="className"
    >
	    <swatch
        :color="palette.rgb.primary"
        :tone="palette.tone.primary"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette.rgb.accent"
        :tone="palette.tone.accent"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette.rgb.grayLight"
        :tone="palette.tone.grayLight"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
	    <swatch
        :color="palette.rgb.grayDark"
        :tone="palette.tone.grayDark"
        :displayColor="displayColor"
        :handleClick="swatchOnClick"
      />
  </div>
</template>

<script>
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
  components: {
    Swatch,
  },
};
</script>
