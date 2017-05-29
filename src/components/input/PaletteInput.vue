<template>
  <div>
    <generate-palette-form />
    <generate-random-palette-button />
    <format-options />
  </div>
</template>

<script>
  import GeneratePaletteForm from '@/components/input/GeneratePaletteForm';
  import GenerateRandomPaletteButton from '@/components/input/GenerateRandomPaletteButton';
  import FormatOptions from '@/components/input/FormatOptions';

  export default{
    name: 'palette-input',
    components: {
      FormatOptions,
      GeneratePaletteForm,
      GenerateRandomPaletteButton,
    },
  };
</script>
