<template>
  <v-layout>
    <AppHeader title="Проверка знаний по электробезопасности" />
    <v-main style="height: 100vh; overflow: auto">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup>
import AppHeader from "./AppHeader.vue";
</script>

<style scoped></style>
