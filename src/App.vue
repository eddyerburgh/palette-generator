<template>
  <div id="app">
    <div class="container">
      <div class="column">
        <h1 class="title">Palette Generator</h1>
        <hr />
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
