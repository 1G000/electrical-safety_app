<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup></script>
<style>
* {
  padding: 0px;
  margin: 0px;
}

main {
  height: 100vh;
}

.wrapper {
  padding: 20px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  backdrop-filter: blur(5px);
  background-image: url("../../public/icons/background2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

h3 {
  font-style: italic;
  font-size: 22px;
  margin: 20px 0;
}

h2,
h3,
.button-description {
  color: #fff3e0;
}
</style>
