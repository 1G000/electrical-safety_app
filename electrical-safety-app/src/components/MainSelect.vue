<template>
  <v-select
    :items="options"
    item-text="label"
    item-value="value"
    :style="{
      borderRadius: '10px',
      backgroundColor: '#FFF3E0',
      color: 'black',
      width: '600px',
      height: '80px',
    }"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
