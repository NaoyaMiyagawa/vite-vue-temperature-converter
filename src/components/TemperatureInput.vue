<script lang="ts" setup>
const props = defineProps<{
  scale: 'c' | 'f';
  temperature: number | string;
  onTemperatureChange: (x: number) => void;
}>();

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function handleChange(e: Event) {
  props.onTemperatureChange(e.target.value);
}
</script>

<template>
  <fieldset>
    <legend>Enter temperature in {{ scaleNames[scale] }}:</legend>
    <input :value="temperature" @input="handleChange" />
  </fieldset>
</template>
