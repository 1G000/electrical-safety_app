<template>
  <div class="wrapper">
    <form @submit.prevent="submitHandler">
      <h2>Дла продолжения работы вам необходимо пройти авторизацию</h2>
      <h3>Введите логин</h3>
      <TextInput :required="true" v-model="email" label="Введите логин" />
      <h3>Введите пароль</h3>
      <TextInput :required="true" v-model="password" label="Введите пароль" />

      <LargeButton
        :type="submit"
        buttonText="Зайти в систему!"
        :required="true"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import store from "@/store";
import TextInput from "@/components/TextInput.vue";
import LargeButton from "@/components/LargeButton.vue";

let email = ref("");
let password = ref("");

const submitHandler = async () => {
  const apiUrl = "https://114489bc2b841e30.mokky.dev/auth";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка авторизации");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    store.commit("setToken", data.token);
    store.dispatch("getEmployees");

    router.push("./");
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
};
</script>
