export const addTask = (payload) => ({ type: "ADD_TASK", payload: payload });
export const changeInputField = (payload) => ({
  type: "CHANGE_INPUT_FIELD",
  payload: payload
});
export const deleteTask = (payload) => ({
  type: "DELETE_TASK",
  payload: payload
});
export const editTask = (payload) => ({ type: "EDIT_TASK", payload: payload });
export const inputTask = (payload) => ({
  type: "INPUT_TASK",
  payload
});
