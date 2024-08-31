<template>
  <v-app-bar
    :elevation="2"
    width="100%"
    height="120"
    style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fff3e0;
    "
  >
    <v-img
      src="../../public/icons/logo.svg"
      width="20%"
      height="150"
      @click="handler"
      class="logo"
    />
    <div style="width: 60%">
      <h1 style="text-align: center">
        {{ title }}
      </h1>
      <h2 style="text-align: center; color: black">{{ reason }}</h2>
    </div>

    <v-img src="../../public/icons/electrical.png" width="20%" height="100" />
  </v-app-bar>
</template>

<script setup>
import router from "@/router";
import store from "@/store";
import { computed } from "vue";
import { defineProps } from "vue";
const reason = computed(() => store.state.reason);

const handler = () => {
  store.commit("updateReason", "");
  router.push("/");
};

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style>
.logo {
  cursor: pointer;
}
</style>
