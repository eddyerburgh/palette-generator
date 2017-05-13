<template>
    <div class="swatch"
         :style="{background: color}">
        <div
          v-if="displayColor"
          class="swatch-info"
          :style="{color: tone}"
        >{{color}}</div>
    </div>
</template>

<script>
    export default{
      name: 'swatch',
      props: ['color', 'tone', 'displayColor'],
    };
</script>

<style>
  .swatch {
    width: 25%;
    height: 100%;
    float: left;
    position: relative;
  }
  .swatch-info {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
  }
</style>
