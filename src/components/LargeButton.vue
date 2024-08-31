<template>
  <v-btn
    color="primary"
    :disabled="disabled"
    :loading="isLoading"
    style="
      height: 80px;
      min-width: 300px;
      font-size: 24px;
      padding: 15px;
      border-radius: 10px;
    "
  >
    {{ buttonText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Кнопка",
    },
    buttonColor: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>
