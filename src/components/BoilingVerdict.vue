<script lang="ts" setup>
defineProps<{
  celsius: number | string;
}>();
</script>

<template>
  <p>
    <template v-if="celsius >= 100"> The water would boil. </template>
    <template v-else> The water would not boil </template>
  </p>
</template>
