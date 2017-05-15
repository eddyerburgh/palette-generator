<template>
  <div>
    <generate-palette-form />
    <generate-random-palette-button />
  </div>
</template>

<script>
  import GeneratePaletteForm from '@/components/input/GeneratePaletteForm';
  import GenerateRandomPaletteButton from '@/components/input/GenerateRandomPaletteButton';

  export default{
    name: 'palette-input',
    components: {
      GeneratePaletteForm,
      GenerateRandomPaletteButton,
    },
  };
</script>
