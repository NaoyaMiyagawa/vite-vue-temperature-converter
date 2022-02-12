<script lang="ts" setup>
import TemperatureInput from './components/TemperatureInput.vue';
import BoilingVerdict from './components/BoilingVerdict.vue';
import { useTemperature } from './composables/useTemperature';

const { celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange } = useTemperature();
</script>

<template>
  <div>
    <TemperatureInput scale="c" :temperature="celsius" :onTemperatureChange="handleCelsiusChange" />
    <TemperatureInput scale="f" :temperature="fahrenheit" :onTemperatureChange="handleFahrenheitChange" />
    <BoilingVerdict :celsius="celsius" />
  </div>
</template>
