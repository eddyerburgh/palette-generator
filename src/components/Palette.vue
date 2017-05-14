<template>
    <div
      v-if="palette.rgb"
      :class="className"
    >
	    <swatch
        :color="palette.rgb.primary"
        :tone="palette.tone.primary"
        :displayColor="displayColor"
      />
	    <swatch
        :color="palette.rgb.accent"
        :tone="palette.tone.accent"
        :displayColor="displayColor"
      />
	    <swatch
        :color="palette.rgb.grayLight"
        :tone="palette.tone.grayLight"
        :displayColor="displayColor"
      />
	    <swatch
        :color="palette.rgb.grayDark"
        :tone="palette.tone.grayDark"
        :displayColor="displayColor"
      />
  </div>
</template>

<script>
import Swatch from '@/components/Swatch';

export default{
  name: 'palette',
  props: [
    'palette',
    'className',
    'displayColor',
  ],
  components: {
    Swatch,
  },
};
</script>
