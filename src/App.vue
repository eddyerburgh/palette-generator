<template>
  <div id="app">
    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <h1 class="text-align-center">Palette Generator</h1>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import "style/style.scss";
</style>
