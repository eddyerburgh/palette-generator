<template>
    <div class="field">
        <p class="control">
            Format:
            <label class="radio">
                <input checked="true" type="radio" name="format" value="hex" @click="changeFormat('hex')">
                hex
            </label>
            <label class="radio">
                <input type="radio" name="format" value="rgb" @click="changeFormat('rgb')">
                rgb
            </label>
        </p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default{
      name: 'format-options',
      methods: {
        ...mapActions([
          'changeFormat',
        ]),
      },
    };
</script>
