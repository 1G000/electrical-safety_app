<template>
  <h2>Найдите себя)) и следуйте инструкции</h2>

  <MainSelect :options="myOptions" />
</template>

<script>
import MainSelect from "../components/MainSelect.vue";

export default {
  data() {
    return {
      myOptions: [
        { value: "Иванов", label: "Option 1" },
        { value: "Петров", label: "Option 2" },
      ],
    };
  },
};
</script>
