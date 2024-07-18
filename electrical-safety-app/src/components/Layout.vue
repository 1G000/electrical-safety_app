<template>
  <v-layout>
    <AppHeader :title="title" />

    <v-main
      style="
        height: 100vh;
        background-image: url('../../public/icons/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
      "
    >
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import AppHeader from "./AppHeader.vue";

export default {
  name: "Layout",
  components: [AppHeader],
  data() {
    return {
      drawer: true,
      rail: true,
      rightDrawer: true,
      rightRail: true,
      title: "Приложение для проверки знаний по электробезопасности",
    };
  },
};
</script>

<style scoped></style>
