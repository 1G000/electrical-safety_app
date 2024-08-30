<template>
  <v-text-field
    :size="44"
    :rules="rules"
    hide-details="auto"
    :style="{
      borderRadius: '10px',
      backgroundColor: '#FFF3E0',
      color: 'black',
      width: '600px',
      height: '90px',
    }"
  ></v-text-field>
</template>

<script setup>
const rules = [
  (value) => !!value || "Поле обязательное для заполнения",
  (value) => (value && value.length >= 3) || "Min 3 characters",
];
</script>

<style></style>
