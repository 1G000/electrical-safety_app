<template>
  <v-app-bar :elevation="2" class="px-4" height="150">
    <template v-slot:prepend>
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <v-img src="../../public/icons/logo.svg" width="400" height="150" />
        </v-col>
        <v-col>
          <h1 style="padding-left: 20px">{{ title }}</h1>
        </v-col>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "AppHeader",

  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
