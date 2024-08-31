<template>
  <div v-if="isSuccess" class="wrapper">
    <p>Поздравляем, вы успешно прошли проверку знаний! ✅</p>
    <hr class="dividing-line" />
    <p>{{ employeeName }}</p>
    <p>Дата проведения проверки знаний: {{ currentDate }}</p>
    <p>Причина проведения проверки знаний: {{ reason }}</p>
    <p>Подразделение: {{ selectedDepartament }}</p>
    <p>Должность: {{ selectedProfession }}</p>
    <p>Группа по электробезопасности: {{ group }} до 1000В</p>
    <p>Категория персонала: {{ selectedCategory }}</p>
    <p>Количество ошибок: {{ errorsQtyFromStore }}</p>
    <p>Дата проведения следующей проверки знаний: {{ nextTimeDate }}</p>
    <LargeButton
      @click="finishTest"
      buttonText="Получить протокол"
    ></LargeButton>
  </div>

  <div v-else class="wrapper">
    <p>Вы не прошли проверку знаний ❌</p>
    <hr class="dividing-line" />
    <p>{{ employeeName }}</p>
    <p>Количество ошибок: {{ errorsQtyFromStore }}</p>
    <LargeButton buttonText="Завершить проверку знаний" @click="backToMain" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import generateProtocol from "@/util/protocolBuilder";
import { getDate, getNextYearDate } from "@/util/protocolBuilder";
import LargeButton from "@/components/LargeButton.vue";
import router from "@/router";
import {
  addNewEmployee,
  updateEmployeePreviousDate,
  updateEmployee,
} from "@/store/async";

const currentDate = getDate();
const nextTimeDate = getNextYearDate();
const employeeName = computed(() => store.state.employeeName);
const selectedDepartament = computed(() => store.state.selectedDepartament);
const selectedProfession = computed(() => store.state.selectedProfession);
const selectedCategory = computed(() => store.state.selectedCategory);
const errorsQtyFromStore = computed(() => store.state.errorsQty);
const isSuccess = computed(() => store.state.isSuccess);
const reason = computed(() => store.state.reason);
const group = computed(() => store.state.group);
const id = computed(() => store.state.id);

let currentEmployee = {
  name: employeeName.value,
  jobTitle: selectedProfession.value,
  group: group.value,
  previousDate: currentDate,
  category: selectedCategory.value,
  departament: selectedDepartament.value,
};

const backToMain = () => {
  store.commit("updateReason", "");
  router.push("./");
};

const finishTest = () => {
  if (reason.value === "Очередная") {
    updateEmployeePreviousDate(id.value, currentDate);
  }
  if (reason.value === "Первичная") {
    addNewEmployee(currentEmployee);
  }
  if (reason.value === "Внеочередная") {
    updateEmployee(
      id.value,
      selectedProfession.value,
      currentDate,
      group.value,
      selectedCategory.value
    );
  }

  generateProtocol();
  router.push("./");
};
</script>

<style scoped>
.wrapper {
  justify-content: flex-start;
}

.dividing-line {
  width: 100%;
}
p {
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: bold;
}
</style>
