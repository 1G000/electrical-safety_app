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
  </div>
</template>

<script lang="ts">
import LargeButton from "../components/LargeButton.vue";
import generateProtocol from "../components/builder";
import router from "../router";
export default {
  components: {
    LargeButton,
  },
  methods: {
    navigateToRegularPage() {
      router.push("/regular");
    },
    generateProtocol,
    navigateToExtraordinaryPage() {
      router.push("/extraordinary");
    },
    navigateToFirstTimePage() {
      router.push("/first-time");
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 20px;
  backdrop-filter: blur(5px);
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

h3 {
  font-style: italic;
  font-size: 22px;
  margin: 20px 0;
}

h2,
h3,
.button-description {
  color: #ffd740;
}

.button-description {
  margin-left: 10px;
  max-width: 700px;
  font-size: 20px;
  font-weight: 600;
}
</style>
