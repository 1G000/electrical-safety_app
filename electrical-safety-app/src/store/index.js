import { createStore } from "vuex";

export default createStore({
  state: {
    employeeName: "",
    selectedDepartament: null,
    selectedProfession: null,
    selectedCategory: null,
    errorsQty: 0,
    isSuccess: false,
    reason: "",
    group: "",
    id: "",
    previousDate: "",
    previousGroup: "",
  },
  mutations: {
    updateEmployeeName(state, value) {
      state.employeeName = value;
    },
    updateDepartament(state, value) {
      state.selectedDepartament = value;
    },
    updateProfession(state, value) {
      state.selectedProfession = value;
    },
    updateCategory(state, value) {
      state.selectedCategory = value;
    },
    updateErrorsQty(state, value) {
      state.errorsQty = value;
    },
    updateSuccess(state, value) {
      state.isSuccess = value;
    },
    updateReason(state, value) {
      state.reason = value;
    },
    updateGroup(state, value) {
      state.group = value;
    },
    updateId(state, value) {
      state.id = value;
    },
    updatePreviousDate(state, value) {
      state.previousDate = value;
    },
    updatePreviousGroup(state, value) {
      state.previousGroup = value;
    },
  },
});
