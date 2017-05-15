<template>
  <div class="history-list">
    <h2 class="subtitle">History</h2>
    <div class="box palette--history-list__container" v-for="palette in history">
      <palette
        :palette="palette"
        :handleClick="paletteOnClick"
        className="palette--history-list"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Palette from '@/components/palette/Palette';

  export default{
    name: 'history-list',
    computed: mapGetters([
      'history',
    ]),
    components: {
      Palette,
    },
    props: ['paletteOnClick'],
  };
</script>
