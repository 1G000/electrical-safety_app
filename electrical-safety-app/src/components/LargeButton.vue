<template>
  <v-btn
    color="secondary"
    :disabled="disabled"
    :loading="isLoading"
    @click="onClick"
    style="height: 100px; width: 300px; font-size: 24px"
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
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
