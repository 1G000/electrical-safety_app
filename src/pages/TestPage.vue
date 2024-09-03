<template>
  <div class="wrapper" style="height: auto">
    <div class="test-container">
      <h2 class="test-header">Ответьте на все предложенные вопросы</h2>

      <ol>
        <li v-for="(question, index) of randomQuestions" :key="question.id">
          <h4>Вопрос № {{ index + 1 }}</h4>
          <p class="question">{{ question.question }}</p>
          <v-radio-group :v-model="question.id">
            <v-radio
              v-for="answer of question.shuffledAnswers"
              :label="answer.text"
              :value="answer.id"
              :key="answer.id"
              :isRight="answer.isRight"
              @click="clickRadio"
            >
            </v-radio>
          </v-radio-group>
        </li>
      </ol>
      <LargeButton
        :disabled="answeredQuestions.length < 10"
        buttonText="Завершить проверку знаний"
        @click="checkErrors"
      />
    </div>
    >
  </div>
</template>

<script setup>
import questions from "@/data/questions";
import { ref } from "vue";
import router from "@/router";
import store from "@/store";
import LargeButton from "@/components/LargeButton.vue";

let answeredQuestions = ref([]);

const clickRadio = () => {
  answeredQuestions.value = document.querySelectorAll('[type="radio"]:checked');
  return answeredQuestions.value;
};

const checkErrors = () => {
  const filteredValues = Array.from(answeredQuestions.value).filter(
    (radio) => radio.getAttribute("isRight") === "false"
  );
  filteredValues.length <= 2
    ? store.commit("updateSuccess", true)
    : store.commit("updateSuccess", false);

  const questions = Array.from(document.getElementsByTagName("input"));
  questions.forEach((el) => {
    el.disabled = true;
  });
  store.commit("updateErrorsQty", filteredValues.length);

  router.push("/results");
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

randomQuestions.forEach((question) => {
  question.shuffledAnswers = shuffle(question.answers);
});
</script>

<style>
.test-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  gap: 20px;
}

.test-header {
  margin: 10px;
  color: #fff3e0;
}

label {
  color: black;
  opacity: 1 !important;
}

ol {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}

li {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0px 20px;
  border-radius: 20px;
  background-color: #fff3e0;
  color: black;
}

h4 {
  margin-left: 10px;
}

.question {
  font-weight: bold;
  margin-left: 10px;
}
</style>
