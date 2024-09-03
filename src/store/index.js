import { createStore } from "vuex";
import { getData, getDepartaments } from "./async";

const store = createStore({
  state: {
    token: null,
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
    employees: [],
    departaments: [],
    dataLoaded: false,
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
    setEmployees(state, employees) {
      state.employees = employees;
      state.departaments = getDepartaments(employees);
      state.dataLoaded = true;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async getEmployees({ commit }) {
      commit("setEmployees", await getData(localStorage.getItem("token")));
    },
  },
  getters: {
    getProfessions: (state) => (dept) => {
      const selectedData = state.employees.filter(
        (el) => el.departament === dept
      );
      if (!selectedData) return [];
      const professionsSet = new Set(selectedData.map((emp) => emp.jobTitle));
      return Array.from(professionsSet);
    },
    getEmployesByDept: (state) => (dept) => {
      const selectedData = state.employees.filter(
        (el) => el.departament === dept
      );
      if (!selectedData) return [];
      const namesSet = new Set(selectedData.map((emp) => emp.name));
      return Array.from(namesSet);
    },
    getEmployees(state) {
      return state.employees;
    },
    getDepartaments(state) {
      return state.departaments;
    },
    isDataLoaded(state) {
      return state.dataLoaded;
    },
  },
});

// store.dispatch("getEmployees");

export default store;
