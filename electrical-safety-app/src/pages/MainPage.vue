<template>
  <div class="wrapper">
    <h2>Добро пожаловать на проверку знаний по электробезопасности</h2>
    <h3>Укажите причину прохождения проверки знаний</h3>

    <div class="button-container">
      <div class="button-row">
        <LargeButton
          buttonText="Первичная"
          buttonColor="success"
          @click="handleButtonClick"
        />
        <div class="button-description">
          Если вы проходите проверку знаний впервые
        </div>
      </div>
      <div class="button-row">
        <LargeButton
          buttonText="Очередная"
          buttonColor="success"
          @click="handleButtonClickTwo"
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
          @click="handleButtonClickTwo"
        />
        <div class="button-description">
          Если Вам нужно повысить действующую группу, а также в случае смены
          должности или при изменении требований нормативных документов
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LargeButton from "../components/LargeButton.vue";
export default {
  components: {
    LargeButton,
  },
  methods: {
    handleButtonClick() {
      console.log("Кнопка 1 нажата!");
    },
    handleButtonClickTwo() {
      console.log("Кнопка 2 нажата!");
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}

.button-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 20px;
}

h2,
h3,
.button-description {
  color: #fff59d;
}

.button-description {
  margin-left: 10px;
  max-width: 700px;
  font-size: 20px;
}
</style>
