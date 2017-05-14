<template>
    <div class="swatch"
         v-on:click="handleClick && handleClick(color)"
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
      props: [
        'color',
        'tone',
        'displayColor',
        'handleClick',
      ],
    };
</script>
