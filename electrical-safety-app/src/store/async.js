import axios from "axios";

const baseUrl = "https://114489bc2b841e30.mokky.dev/employees";

export const getData = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getUserByName = async (name) => {
  try {
    const response = await axios.get(`${baseUrl}?name=${name}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const addNewEmployee = async (newEmployee) => {
  try {
    const response = await axios.post(baseUrl, newEmployee);
    return response.data;
  } catch (error) {
    console.error("Error adding new employee:", error);
    return null;
  }
};

export const updateEmployeePreviousDate = async (
  employeeId,
  newPreviousDate
) => {
  try {
    const response = await axios.patch(`${baseUrl}/${employeeId}`, {
      previousDate: newPreviousDate,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating employee previous date:", error);
    return null;
  }
};

export const updateEmployee = async (
  employeeId,
  newJobTitle,
  newPreviousDate,
  newGroup,
  newCategory
) => {
  try {
    const response = await axios.patch(`${baseUrl}/${employeeId}`, {
      group: newGroup,
      jobTitle: newJobTitle,
      previousDate: newPreviousDate,
      category: newCategory,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating employee previous date:", error);
    return null;
  }
};

export const getDepartaments = (employees) => {
  if (employees) {
    const departmentsAll = new Set();

    for (const employee of employees) {
      const dept = employee.departament;
      departmentsAll.add(dept);
    }
    const departaments = Array.from(departmentsAll);
    return departaments;
  }
  return [];
};
