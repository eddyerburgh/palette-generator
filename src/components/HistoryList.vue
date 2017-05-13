<template>
  <div class="history-list">
      <palette
        v-for="palette in history"
        :palette="palette"
        className="palette--history-list"
      />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Palette from '@/components/Palette';

  export default{
    name: 'history-list',
    computed: mapGetters([
      'history',
    ]),
    components: {
      Palette,
    },
  };
</script>
