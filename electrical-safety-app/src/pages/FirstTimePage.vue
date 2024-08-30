<template>
  <div class="wrapper">
    <form @submit.prevent="submitHandler">
      <h2>Введите ваше ФИО</h2>
      <TextInput
        :required="true"
        v-model="employeeName"
        label="Фамилия, Имя, Отчество"
      />
      <h2>Укажите Ваше подразделение</h2>

      <MainSelect
        class="select"
        v-model="selectedDepartament"
        :options="newdepartaments"
        label="Подразделение"
        :required="true"
      />
      <h2>Укажите Вашу должность</h2>
      <MainSelect
        class="select"
        v-model="selectedProfession"
        :options="newprofessions"
        label="Должность"
        :required="true"
      />
      <h2>Укажите категорию персонала</h2>
      <MainSelect
        class="select"
        v-model="selectedCategory"
        :options="categories"
        label="Категория персонала"
        :required="true"
      />
      <LargeButton
        :type="submit"
        buttonText="Начать проверку!"
        :required="true"
      />
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { departaments, getProfessions } from "@/store/async";
import { categories } from "@/data/categories";
import router from "@/router";
import store from "@/store";
import MainSelect from "@/components/MainSelect.vue";
import TextInput from "@/components/TextInput.vue";
import LargeButton from "@/components/LargeButton.vue";

let employeeName = ref("");
let selectedDepartament = ref("");
let selectedProfession = ref("");
let selectedCategory = ref("");

const submitHandler = () => {
  store.commit("updateEmployeeName", employeeName);
  store.commit("updateDepartament", selectedDepartament);
  store.commit("updateProfession", selectedProfession);
  store.commit("updateCategory", selectedCategory);
  router.push("/test");
};

const newdepartaments = departaments;
let newprofessions = [];
watch(
  () => selectedDepartament.value,
  () => {
    newprofessions = getProfessions(selectedDepartament);
  }
);
</script>

<style>
.v-list-item-title {
  font-size: 1.5rem;
}

.v-list-item {
  max-width: 600px;
  word-break: break-all;
}

.v-field__input {
  font-size: 1.5rem;
}
</style>
