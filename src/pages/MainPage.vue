<template>
  <div class="wrapper">
    <h2>Добро пожаловать на проверку знаний по электробезопасности</h2>
    <h3>Укажите причину прохождения проверки знаний</h3>

    <div class="button-container">
      <div class="button-row">
        <LargeButton
          buttonText="Первичная"
          buttonColor="success"
          @click="navigateToFirstTimePage"
        />
        <div class="button-description">
          Если вы проходите проверку знаний впервые
        </div>
      </div>
      <div class="button-row">
        <LargeButton
          buttonText="Очередная"
          buttonColor="success"
          @click="navigateToRegularPage"
        />
        <div class="button-description">
          Если Вам нужно подтвердить существующую группу, согласно графику
          проведения проверки знаний сотрудников
        </div>
      </div>
      <div class="button-row">
        <LargeButton
          buttonText="Внеочередная"
          buttonColor="success"
          @click="navigateToExtraordinaryPage"
        />
        <div class="button-description">
          Если Вам нужно повысить действующую группу, а также в случае смены
          должности или при изменении требований нормативных документов
        </div>
      </div>
    </div>
    <div class="footer">
      <span>Отдел главного энергетика</span>
      <span>2024</span>
    </div>
  </div>
</template>

<script setup>
import LargeButton from "../components/LargeButton.vue";
import store from "@/store";
import router from "../router";

function navigateToRegularPage() {
  store.commit("updateReason", "Очередная");
  router.push("/regular");
}

function navigateToExtraordinaryPage() {
  store.commit("updateReason", "Внеочередная");
  router.push("/extraordinary");
}

function navigateToFirstTimePage() {
  store.commit("updateReason", "Первичная");
  store.commit("updateGroup", "II");
  router.push("/first-time");
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;
}

.button-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 30px;
}

.button-description {
  max-width: 700px;
  font-size: 20px;
  font-weight: 600;
}

.footer {
  width: 100%;
  padding: 20px;
  background-color: #fff3e0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 0px;
}

.footer span {
  font-size: 20px;
  font-weight: bolder;
}
</style>
