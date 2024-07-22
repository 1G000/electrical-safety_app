<template>
  <v-select
    v-model="selectedValue"
    :items="options"
    item-text="label"
    item-value="value"
    :style="{ backgroundColor: '#FFD700', color: '#333' }"
    @change="onSelectChange"
  />
  <p>Выбрано: {{ selectedValue }}</p>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true, // Сделаем опции обязательными
    },
  },
  data() {
    return {
      selectedValue: null,
    };
  },
  methods: {
    onSelectChange(value) {
      console.log(value);
    },
  },
};
</script>
