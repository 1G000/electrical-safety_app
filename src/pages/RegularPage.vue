<template>
  <div class="wrapper">
    <form @submit.prevent="submitHandler">
      <h2>Укажите Ваше подразделение</h2>
      <MainSelect
        class="select"
        v-model="selectedDepartament"
        :options="departaments"
        label="Подразделение"
        :required="true"
      />
      <h2>Укажите Ваше ФИО</h2>
      <MainSelect
        class="select"
        v-model="employeeName"
        :options="newnames"
        label="Сотрудник"
        :required="true"
      />
      <div class="data-field">
        <p>Должность:</p>
        <span>{{ selectedProfession }}</span>
      </div>
      <div class="data-field">
        <p>Категория персонала:</p>
        <span>{{ selectedCategory }}</span>
      </div>
      <div class="data-field">
        <p>Действующая группа по электробезопасности:</p>
        <span>{{ `${group} ` }} до 1000 В</span>
      </div>
      <div class="data-field">
        <p>Дата проведения предыдущей проверки знаний:</p>
        <span>{{ `${previousDate} ` }} </span>
      </div>
      <LargeButton
        :type="submit"
        buttonText="Начать проверку!"
        :required="true"
      />
    </form>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import router from "@/router";
import store from "@/store";
import { getUserByName } from "../store/async";
import MainSelect from "@/components/MainSelect.vue";
import LargeButton from "@/components/LargeButton.vue";

let employeeName = ref("");
let selectedDepartament = ref("");
let selectedProfession = ref("");
let selectedCategory = ref("");
let previousDate = ref("");
let group = ref("");
let newnames = ["Сначала выберите подразделение"];

const departaments = computed(() => store.getters.getDepartaments);
watch(departaments);

watch(
  () => selectedDepartament.value,
  (department) => {
    newnames = store.getters.getEmployesByDept(department);
  }
);

watch(
  () => employeeName.value,
  async (userName) => {
    const user = await getUserByName(userName);
    if (user) {
      group.value = user[0].group;
      selectedProfession.value = user[0].jobTitle;
      selectedCategory.value = user[0].category;
      previousDate.value = user[0].previousDate;
      store.commit("updateId", user[0].id);
    } else {
      group.value = "";
    }
  }
);

const submitHandler = () => {
  store.commit("updateEmployeeName", employeeName);
  store.commit("updateDepartament", selectedDepartament);
  store.commit("updateProfession", selectedProfession);
  store.commit("updateCategory", selectedCategory);
  store.commit("updateGroup", group);
  store.commit("updatePreviousDate", previousDate);
  router.push("/test");
};
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

.data-field {
  border-radius: 10px;
  display: flex;
  gap: 30px;
  padding: 15px;
  align-items: center;
  background-color: #fff3e0;
  max-height: 100px;
  width: 600px;
}

.data-field p {
  color: black;
}

.data-field span {
  font-size: 18px;
  font-weight: bold;
  color: black;
}
</style>
