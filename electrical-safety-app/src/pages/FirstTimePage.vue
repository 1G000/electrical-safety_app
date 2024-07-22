<template>
  <h2>Заполните информацию о себе</h2>

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
